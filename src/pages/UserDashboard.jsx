import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, updateDoc, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

export default function UserDashboard() {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("overview");
  const [attendance, setAttendance] = useState([]);
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [notePopup, setNotePopup] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [reports, setReports] = useState([]);
  const [reportText, setReportText] = useState("");
  const [submittingReport, setSubmittingReport] = useState(false);

  useEffect(() => {
    if (userData?.pendingNote && userData?.noteRead === false) {
      setNotePopup(userData.pendingNote);
    }
  }, [userData]);

  useEffect(() => {
    if (!user) return;
    loadData();
    loadNotifications();
    loadReports();
  }, [user, month]);

  async function loadData() {
    try {
      const attQ = query(collection(db, "attendance"), where("uid", "==", user.uid), where("month", "==", month));
      const attSnap = await getDocs(attQ);
      const attData = attSnap.docs.map((d) => d.data());
      attData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAttendance(attData);
      const salQ = query(collection(db, "salaryHistory"), where("uid", "==", user.uid));
      const salSnap = await getDocs(salQ);
      const salData = salSnap.docs.map((d) => d.data());
      salData.sort((a, b) => new Date(b.paidAt) - new Date(a.paidAt));
      setSalaryHistory(salData);
    } catch (err) { console.error(err.message); }
  }

  async function loadNotifications() {
    try {
      const q = query(collection(db, "noteHistory"), where("uid", "==", user.uid));
      const snap = await getDocs(q);
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      data.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt));
      setNotifications(data);
    } catch {}
  }

  async function loadReports() {
    try {
      const q = query(collection(db, "reports"), where("uid", "==", user.uid));
      const snap = await getDocs(q);
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setReports(data);
    } catch {}
  }

  async function dismissNote() {
    setNotePopup(null);
    try { await updateDoc(doc(db, "users", user.uid), { noteRead: true }); } catch {}
  }

  async function submitReport(e) {
    e.preventDefault();
    if (!reportText.trim()) return;
    setSubmittingReport(true);
    try {
      await addDoc(collection(db, "reports"), {
        uid: user.uid, userName: userData?.name, userEmail: userData?.email,
        message: reportText.trim(), createdAt: new Date().toISOString(), status: "open", reply: null,
      });
      setReportText("");
      await loadReports();
      alert("Report submitted successfully. Admin will reply soon.");
    } catch { alert("Failed to submit report"); }
    setSubmittingReport(false);
  }

  const totalEarned = attendance.reduce((s, a) => s + (a.salaryEarned || 0), 0);
  const totalPaid = salaryHistory.filter((s) => s.month === month).reduce((sum, s) => sum + (s.amount || 0), 0);
  const pending = Math.max(0, totalEarned - totalPaid);
  const unreadNotes = notifications.filter(n => !n.read).length;

  // ── Inactive user screen ──
  if (userData?.status === "inactive") {
    return (
      <div className="restricted-page">
        <div className="restricted-card">
          <div className="restricted-icon">🚫</div>
          <h2>Account Temporarily Restricted</h2>
          <p>Your account has been deactivated by the admin. Please contact your administrator for more information.</p>
          <button className="btn-primary" onClick={() => { signOut(auth); navigate("/login"); }}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dash-page">
      {notePopup && (
        <div className="note-overlay">
          <div className="note-popup">
            <div className="note-popup-icon">📝</div>
            <h3>Message from Admin</h3>
            <p className="note-popup-text">{notePopup}</p>
            <button className="btn-primary" onClick={dismissNote}>Got it ✓</button>
          </div>
        </div>
      )}

      <header className="dash-header">
        <div className="dash-header-left">
          <div className="dash-logo">🏢</div>
          <div><h1>My Dashboard</h1><p>Welcome back, {userData?.name}</p></div>
        </div>
        <button className="dash-logout" onClick={() => { signOut(auth); navigate("/login"); }}>🚪 Sign Out</button>
      </header>

      <div className="dash-container">
        {/* Profile */}
        <div className="dash-profile">
          <div className="dash-avatar">{userData?.name?.[0]?.toUpperCase()}</div>
          <div className="dash-profile-details">
            <h2>{userData?.name}</h2>
            <div className="dash-info-row">
              <span>📧 {userData?.email}</span>
              <span>📞 {userData?.phone}</span>
              <span>🏷️ {userData?.role}</span>
            </div>
          </div>
          <div className="dash-emp-code">
            <div className="code-label">Your Employee Code</div>
            <div className="code-value">{userData?.employeeCode}</div>
            <div className="code-hint">Show this to admin for check-in</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="dash-tabs">
          <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>📊 Overview</button>
          <button className={tab === "notifications" ? "active" : ""} onClick={() => setTab("notifications")}>
            🔔 Notifications {unreadNotes > 0 && <span className="badge-count">{unreadNotes}</span>}
          </button>
          <button className={tab === "reports" ? "active" : ""} onClick={() => setTab("reports")}>🚨 Reports</button>
        </div>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <>
            <div className="dash-month-bar">
              <h3>Monthly Summary</h3>
              <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="month-picker" />
            </div>
            <div className="dash-stats">
              <div className="dash-stat green"><div className="stat-icon">📅</div><div className="stat-val">{attendance.length}</div><div className="stat-lbl">Days Present</div></div>
              <div className="dash-stat blue"><div className="stat-icon">💰</div><div className="stat-val">Rs. {totalEarned.toLocaleString()}</div><div className="stat-lbl">Total Earned</div></div>
              <div className="dash-stat purple"><div className="stat-icon">✅</div><div className="stat-val">Rs. {totalPaid.toLocaleString()}</div><div className="stat-lbl">Salary Received</div></div>
              <div className="dash-stat orange"><div className="stat-icon">⏳</div><div className="stat-val">Rs. {pending.toLocaleString()}</div><div className="stat-lbl">Pending</div></div>
            </div>
            <div className="dash-tables">
              <div className="dash-table-card">
                <h3>Attendance — {month}</h3>
                <div className="table-wrap">
                  <table className="ud-table">
                    <thead><tr><th>#</th><th>Date</th><th>Check-In Time</th><th>Earned</th></tr></thead>
                    <tbody>
                      {attendance.map((a, i) => (<tr key={i}><td>{i+1}</td><td>{a.date}</td><td>{a.checkInTime}</td><td className="salary-cell">Rs. {a.salaryEarned}</td></tr>))}
                      {attendance.length === 0 && <tr><td colSpan={4} className="empty-row">No attendance records this month</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="dash-table-card">
                <h3>Salary Payment History</h3>
                <div className="table-wrap">
                  <table className="ud-table">
                    <thead><tr><th>Date</th><th>Month</th><th>Amount</th><th>Note</th></tr></thead>
                    <tbody>
                      {salaryHistory.map((s, i) => (<tr key={i}><td>{new Date(s.paidAt).toLocaleDateString("en-US")}</td><td>{s.month}</td><td className="salary-cell">Rs. {s.amount?.toLocaleString()}</td><td>{s.note || "—"}</td></tr>))}
                      {salaryHistory.length === 0 && <tr><td colSpan={4} className="empty-row">No salary payments yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {/* NOTIFICATIONS TAB */}
        {tab === "notifications" && (
          <div className="notif-list">
            {notifications.length === 0 ? (
              <div className="empty-state-box">
                <div className="empty-icon">🔔</div>
                <h3>No notifications yet</h3>
                <p>Messages from admin will appear here</p>
              </div>
            ) : notifications.map((n) => (
              <div key={n.id} className={`notif-card ${!n.read ? "unread" : ""}`}>
                <div className="notif-icon">📝</div>
                <div className="notif-body">
                  <p>{n.message}</p>
                  <span>📅 {new Date(n.sentAt).toLocaleDateString("en-US")} at {new Date(n.sentAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                </div>
                {!n.read && <span className="notif-new">New</span>}
              </div>
            ))}
          </div>
        )}

        {/* REPORTS TAB */}
        {tab === "reports" && (
          <div>
            <div className="report-form-card">
              <h3>🚨 Report an Issue</h3>
              <form onSubmit={submitReport}>
                <textarea placeholder="Describe your problem or issue..." value={reportText}
                  onChange={(e) => setReportText(e.target.value)} rows={4} required
                  style={{ width: "100%", padding: "12px", border: "1.5px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "inherit", resize: "vertical", marginTop: 12, background: "var(--bg)" }} />
                <button type="submit" className="btn-submit-report" disabled={submittingReport}>
                  {submittingReport ? "Submitting..." : "📤 Submit Report"}
                </button>
              </form>
            </div>
            <h3 style={{ margin: "20px 0 12px", fontSize: 16, fontWeight: 700 }}>My Reports</h3>
            {reports.length === 0 ? (
              <div className="empty-state-box"><div className="empty-icon">📋</div><h3>No reports submitted</h3></div>
            ) : reports.map((r) => (
              <div key={r.id} className={`report-card ${r.status === "resolved" ? "resolved" : ""}`}>
                <div className="report-top">
                  <span className="report-date">{new Date(r.createdAt).toLocaleDateString("en-US")}</span>
                  <span className={`report-status ${r.status === "resolved" ? "resolved" : "open"}`}>
                    {r.status === "resolved" ? "✅ Resolved" : "🔴 Open"}
                  </span>
                </div>
                <p className="report-msg">{r.message}</p>
                {r.reply && (
                  <div className="report-reply">
                    <span>Admin Reply:</span>
                    <p>{r.reply}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
