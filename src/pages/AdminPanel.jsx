import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, where, orderBy, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import MonthlySummary from "../components/MonthlySummary";
import "./AdminPanel.css";

const SALARY_PER_DAY = 500;

export default function AdminPanel() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [attendanceCode, setAttendanceCode] = useState("");
  const [attendanceResult, setAttendanceResult] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [checkingIn, setCheckingIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [salaryModal, setSalaryModal] = useState(null);
  const [salaryAmount, setSalaryAmount] = useState("");
  const [salaryNote, setSalaryNote] = useState("");
  const [modalPending, setModalPending] = useState(0);
  const [modalLoading, setModalLoading] = useState(false);
  const [noteModal, setNoteModal] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [sendingNote, setSendingNote] = useState(false);
  const [updateModal, setUpdateModal] = useState(null);
  const [updateForm, setUpdateForm] = useState({});
  const [updating, setUpdating] = useState(false);
  const [reports, setReports] = useState([]);
  const [replyModal, setReplyModal] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [advances, setAdvances] = useState([]);

  // Notifications & salary reminder
  const [notifOpen, setNotifOpen] = useState(false);
  const [adminNotifs, setAdminNotifs] = useState([]);
  const [salaryReminder, setSalaryReminder] = useState(false);
  const [readNotifIds, setReadNotifIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem("adminReadNotifs") || "[]"); } catch { return []; }
  });

  useEffect(() => { fetchUsers(); fetchAdminNotifs(); checkSalaryReminder(); }, []);
  useEffect(() => {
    if (tab === "reports") fetchReports();
    if (tab === "leaves") fetchLeaves();
    if (tab === "advances") fetchAdvances();
  }, [tab]);
  useEffect(() => {
    const handler = () => { setMenuOpen(null); setNotifOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  async function fetchUsers() {
    setLoadingUsers(true);
    try {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setUsers(list.filter((u) => u.role !== "admin"));
    } catch { toast.error("Failed to load employees"); }
    setLoadingUsers(false);
  }

  async function fetchAdminNotifs() {
    try {
      const notifs = [];
      // New unread reports
      const repSnap = await getDocs(collection(db, "reports"));
      repSnap.docs.forEach(d => {
        const r = d.data();
        if (r.status !== "resolved") notifs.push({ id: d.id, type: "report", text: `🚨 ${r.userName} reported an issue`, time: r.createdAt });
      });
      // Pending leaves
      const leaveSnap = await getDocs(collection(db, "leaves"));
      leaveSnap.docs.forEach(d => {
        const l = d.data();
        if (l.status === "pending") notifs.push({ id: d.id, type: "leave", text: `🏖️ ${l.userName} requested leave on ${l.date}`, time: l.createdAt });
      });
      // New employees (last 7 days)
      const userSnap = await getDocs(collection(db, "users"));
      userSnap.docs.forEach(d => {
        const u = d.data();
        if (u.role !== "admin" && u.createdAt) {
          const diff = (Date.now() - new Date(u.createdAt)) / 86400000;
          if (diff <= 7) notifs.push({ id: d.id, type: "user", text: `👤 New employee joined: ${u.name}`, time: u.createdAt });
        }
      });
      notifs.sort((a, b) => new Date(b.time) - new Date(a.time));
      setAdminNotifs(notifs);
    } catch {}
  }

  function checkSalaryReminder() {
    const today = new Date().getDate();
    const dismissed = localStorage.getItem("salaryReminderDismissed");
    const thisMonth = new Date().toISOString().slice(0, 7);
    if (today === 1 && dismissed !== thisMonth) {
      setSalaryReminder(true);
    }
  }

  function dismissSalaryReminder() {
    const thisMonth = new Date().toISOString().slice(0, 7);
    localStorage.setItem("salaryReminderDismissed", thisMonth);
    setSalaryReminder(false);
  }

  function markNotifRead(notifId) {
    const updated = [...readNotifIds, notifId];
    setReadNotifIds(updated);
    localStorage.setItem("adminReadNotifs", JSON.stringify(updated));
  }

  function markAllNotifsRead() {
    const allIds = adminNotifs.map(n => n.id);
    setReadNotifIds(allIds);
    localStorage.setItem("adminReadNotifs", JSON.stringify(allIds));
  }

  async function fetchReports() {
    try {
      const snap = await getDocs(collection(db, "reports"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setReports(list);
    } catch {}
  }

  async function fetchLeaves() {
    try {
      const snap = await getDocs(collection(db, "leaves"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
      setLeaves(list);
    } catch {}
  }

  async function fetchAdvances() {
    try {
      const snap = await getDocs(collection(db, "advances"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setAdvances(list);
    } catch {}
  }

  async function handleLeaveAction(id, status) {
    try {
      await updateDoc(doc(db, "leaves", id), { status });
      toast.success(`Leave ${status}`);
      fetchLeaves();
    } catch { toast.error("Failed to update leave"); }
  }

  async function handleAdvanceAction(id, status) {
    try {
      await updateDoc(doc(db, "advances", id), { status });
      toast.success(`Advance request ${status}`);
      fetchAdvances();
    } catch { toast.error("Failed to update advance"); }
  }

  async function handleCheckIn() {
    if (!attendanceCode || attendanceCode.length !== 4) { toast.error("Please enter a valid 4-digit code"); return; }
    setCheckingIn(true);
    try {
      const q = query(collection(db, "users"), where("employeeCode", "==", attendanceCode));
      const snap = await getDocs(q);
      if (snap.empty) { toast.error("No employee found with this code"); setAttendanceResult(null); setCheckingIn(false); return; }
      const userDoc = snap.docs[0];
      const user = { id: userDoc.id, ...userDoc.data() };
      const today = new Date().toISOString().split("T")[0];
      const attQ = query(collection(db, "attendance"), where("uid", "==", user.id), where("date", "==", today));
      const attSnap = await getDocs(attQ);
      if (!attSnap.empty) {
        setAttendanceResult({ user, alreadyCheckedIn: true, time: attSnap.docs[0].data().checkInTime });
        toast("Already checked in today", { icon: "ℹ️" });
      } else {
        const now = new Date();
        const checkInTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        await addDoc(collection(db, "attendance"), {
          uid: user.id, name: user.name, employeeCode: user.employeeCode,
          date: today, month: today.slice(0, 7), checkInTime,
          timestamp: now.toISOString(), salaryEarned: SALARY_PER_DAY,
        });
        setAttendanceResult({ user, alreadyCheckedIn: false, time: checkInTime });
        toast.success(`Check-in recorded for ${user.name}`);
        setAttendanceCode("");
      }
    } catch (err) { toast.error("Error: " + err.message); }
    setCheckingIn(false);
  }

  async function openSalaryModal(u) {
    setSalaryModal(u); setSalaryAmount(""); setSalaryNote(""); setModalPending(0); setModalLoading(true);
    try {
      const currentMonth = new Date().toISOString().slice(0, 7);
      const attQ = query(collection(db, "attendance"), where("uid", "==", u.id), where("month", "==", currentMonth));
      const attSnap = await getDocs(attQ);
      const totalEarned = attSnap.docs.reduce((s, d) => s + (d.data().salaryEarned || 0), 0);
      const salQ = query(collection(db, "salaryHistory"), where("uid", "==", u.id));
      const salSnap = await getDocs(salQ);
      const totalPaid = salSnap.docs.map(d => d.data()).filter(s => s.month === currentMonth).reduce((s, d) => s + (d.amount || 0), 0);
      setModalPending(Math.max(0, totalEarned - totalPaid));
    } catch {}
    setModalLoading(false);
  }

  async function handlePaySalary() {
    if (!salaryAmount || isNaN(salaryAmount)) { toast.error("Please enter a valid amount"); return; }
    if (Number(salaryAmount) > modalPending) { toast.error(`Cannot exceed pending — Max: Rs. ${modalPending.toLocaleString()}`); return; }
    try {
      await addDoc(collection(db, "salaryHistory"), {
        uid: salaryModal.id, name: salaryModal.name, amount: Number(salaryAmount),
        note: salaryNote, paidAt: new Date().toISOString(), month: new Date().toISOString().slice(0, 7),
      });
      toast.success(`Rs. ${Number(salaryAmount).toLocaleString()} paid to ${salaryModal.name}`);
      setSalaryModal(null);
    } catch { toast.error("Failed to record salary payment"); }
  }

  async function handleSendNote(e) {
    e.preventDefault();
    if (!noteText.trim()) { toast.error("Please write a note"); return; }
    setSendingNote(true);
    try {
      // Save to noteHistory collection
      await addDoc(collection(db, "noteHistory"), {
        uid: noteModal.id, name: noteModal.name,
        message: noteText.trim(), sentAt: new Date().toISOString(), read: false,
      });
      // Also set pendingNote for popup
      await updateDoc(doc(db, "users", noteModal.id), { pendingNote: noteText.trim(), noteRead: false });
      toast.success(`Note sent to ${noteModal.name}`);
      setNoteModal(null); setNoteText("");
    } catch { toast.error("Failed to send note"); }
    setSendingNote(false);
  }

  function openUpdateModal(u) {
    setUpdateModal(u);
    setUpdateForm({ name: u.name, phone: u.phone || "", cnic: u.cnic || "", role: u.role || "sales", status: u.status || "active", salaryPerDay: u.salaryPerDay || 500 });
  }

  async function handleUpdate(e) {
    e.preventDefault(); setUpdating(true);
    try {
      await updateDoc(doc(db, "users", updateModal.id), {
        name: updateForm.name, phone: updateForm.phone, cnic: updateForm.cnic,
        role: updateForm.role, status: updateForm.status, salaryPerDay: Number(updateForm.salaryPerDay),
      });
      toast.success("Employee updated successfully");
      setUpdateModal(null); fetchUsers();
    } catch { toast.error("Failed to update employee"); }
    setUpdating(false);
  }

  async function handleSoftDelete(u) {
    if (!window.confirm(`Deactivate ${u.name}? They won't be able to login.`)) return;
    try {
      await updateDoc(doc(db, "users", u.id), { status: "inactive" });
      toast.success(`${u.name} deactivated`);
      fetchUsers();
    } catch { toast.error("Failed to deactivate employee"); }
  }

  async function handleActivate(u) {
    try {
      await updateDoc(doc(db, "users", u.id), { status: "active" });
      toast.success(`${u.name} activated`);
      fetchUsers();
    } catch { toast.error("Failed to activate employee"); }
  }

  async function handleHardDelete(u) {
    if (!window.confirm(`Permanently DELETE ${u.name}? All their data will be lost. This cannot be undone.`)) return;
    try {
      await deleteDoc(doc(db, "users", u.id));
      toast.success(`${u.name} permanently deleted`);
      fetchUsers();
    } catch { toast.error("Failed to delete employee"); }
  }

  async function handleReply(e) {
    e.preventDefault(); setSendingReply(true);
    try {
      await updateDoc(doc(db, "reports", replyModal.id), {
        reply: replyText, repliedAt: new Date().toISOString(), status: "resolved",
      });
      toast.success("Reply sent");
      setReplyModal(null); setReplyText(""); fetchReports();
    } catch { toast.error("Failed to send reply"); }
    setSendingReply(false);
  }

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(searchUser.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchUser.toLowerCase()) ||
    u.employeeCode?.includes(searchUser)
  );
  const unreadReports = reports.filter(r => r.status !== "resolved").length;
  const unreadNotifs = adminNotifs.filter(n => !readNotifIds.includes(n.id)).length;

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-brand"><span>🏢</span><span>Admin Panel</span></div>        <nav className="sidebar-nav">
          <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}><span>👥</span> Employees</button>
          <button className={tab === "attendance" ? "active" : ""} onClick={() => setTab("attendance")}><span>📋</span> Attendance</button>
          <button className={tab === "summary" ? "active" : ""} onClick={() => setTab("summary")}><span>📊</span> Summary</button>
          <button className={tab === "reports" ? "active" : ""} onClick={() => setTab("reports")}>
            <span>🚨</span> Reports {unreadReports > 0 && <span className="badge-count">{unreadReports}</span>}
          </button>
          <button className={tab === "leaves" ? "active" : ""} onClick={() => setTab("leaves")}><span>🏖️</span> Leaves</button>
        </nav>
        <div className="sidebar-footer">
          <div className="admin-info">
            <div className="admin-avatar">{userData?.name?.[0]?.toUpperCase()}</div>
            <div><div className="admin-name">{userData?.name}</div><div className="admin-role">Administrator</div></div>
          </div>
          <button className="logout-btn" onClick={() => { signOut(auth); navigate("/admin-login"); }}>🚪 Logout</button>
        </div>
      </aside>

      <main className="admin-main">
        {/* Notification Bell */}
        <div className="admin-topbar">
          <div className="notif-bell-wrap" onClick={(e) => { e.stopPropagation(); setNotifOpen(!notifOpen); }}>
            <button className="notif-bell-btn">
              🔔
              {unreadNotifs > 0 && <span className="notif-bell-badge">{unreadNotifs}</span>}
            </button>
            {notifOpen && (
              <div className="notif-dropdown" onClick={(e) => e.stopPropagation()}>
                <div className="notif-dropdown-header">
                  <h4>Notifications</h4>
                  {unreadNotifs > 0 && <button className="btn-mark-all" onClick={markAllNotifsRead}>Mark all read</button>}
                </div>
                {adminNotifs.length === 0 ? (
                  <div className="notif-empty">No new notifications</div>
                ) : adminNotifs.map((n, i) => (
                  <div key={i} className={`notif-item notif-${n.type} ${readNotifIds.includes(n.id) ? "read" : ""}`}
                    onClick={() => {
                      markNotifRead(n.id);
                      setNotifOpen(false);
                      if (n.type === "report") setTab("reports");
                      else if (n.type === "leave") setTab("leaves");
                      else setTab("users");
                    }}>
                    <p>{n.text}</p>
                    <span>{new Date(n.time).toLocaleDateString("en-US")}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* EMPLOYEES TAB */}
        {tab === "users" && (
          <div>
            <div className="page-header">
              <div><h2>Employees</h2><p>{users.length} total employees registered</p></div>
              <input className="search-input" placeholder="🔍 Search by name, email or code..."
                value={searchUser} onChange={(e) => setSearchUser(e.target.value)} />
            </div>
            {loadingUsers ? (
              <div className="loading-cards">{[1,2,3].map(i => <div key={i} className="skeleton-card" />)}</div>
            ) : filtered.length === 0 ? (
              <div className="empty-state-box"><div className="empty-icon">👥</div><h3>No employees found</h3><p>Employees will appear here once they sign up</p></div>
            ) : (
              <div className="users-grid">
                {filtered.map((u) => (
                  <div key={u.id} className="user-card" onClick={() => navigate(`/admin/user/${u.id}`)}>
                    <div className="user-card-header">
                      <div className="user-avatar">{u.name?.[0]?.toUpperCase()}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div className="user-badge">#{u.employeeCode}</div>
                        <div className="dot-menu-wrap" onClick={(e) => e.stopPropagation()}>
                          <button className="dot-btn" onClick={(e) => { e.stopPropagation(); setMenuOpen(menuOpen === u.id ? null : u.id); }}>⋮</button>
                          {menuOpen === u.id && (
                            <div className="dot-dropdown">
                              <button onClick={(e) => { e.stopPropagation(); setMenuOpen(null); openUpdateModal(u); }}>✏️ Update</button>
                              <button onClick={(e) => { e.stopPropagation(); setMenuOpen(null); setNoteModal(u); setNoteText(""); }}>📝 Send Note</button>
                              {u.status === "inactive" ? (
                                <button onClick={(e) => { e.stopPropagation(); setMenuOpen(null); handleActivate(u); }}>✅ Activate</button>
                              ) : (
                                <button className="delete-opt" onClick={(e) => { e.stopPropagation(); setMenuOpen(null); handleSoftDelete(u); }}>🚫 Deactivate</button>
                              )}
                              <button className="delete-opt" onClick={(e) => { e.stopPropagation(); setMenuOpen(null); handleHardDelete(u); }}>🗑️ Delete Permanently</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="user-card-body">
                      <h3>{u.name}</h3>
                      <p className="user-email">✉️ {u.email}</p>
                      <p className="user-phone">📞 {u.phone}</p>
                      <p className="user-dept">🏷️ {u.role}</p>
                    </div>
                    <div className="user-card-footer">
                      <span className={`status-badge ${u.status === "active" ? "active" : "inactive"}`}>{u.status || "active"}</span>
                      <button className="pay-btn" onClick={(e) => { e.stopPropagation(); openSalaryModal(u); }}>💰 Pay Salary</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SUMMARY TAB */}
        {tab === "summary" && <MonthlySummary users={users} />}

        {/* ATTENDANCE TAB */}
        {tab === "attendance" && (
          <div>
            <div className="page-header">
              <div><h2>Attendance Check-In</h2><p>Enter employee 4-digit code to mark attendance</p></div>
            </div>
            <div className="att-layout">
              <div className="checkin-card">
                <div className="checkin-icon">📲</div>
                <h3>Mark Attendance</h3>
                <p className="checkin-hint">Ask employee for their 4-digit code</p>
                <div className="code-boxes" onClick={() => document.getElementById("codeInput").focus()}>
                  {[0,1,2,3].map(i => (
                    <div key={i} className={`code-box ${attendanceCode[i] ? "filled" : ""} ${attendanceCode.length === i ? "active" : ""}`}>
                      {attendanceCode[i] || ""}
                    </div>
                  ))}
                </div>
                <input id="codeInput" type="tel" inputMode="numeric" maxLength={4} placeholder="Type code here"
                  value={attendanceCode}
                  onChange={(e) => { const val = e.target.value.replace(/\D/g, "").slice(0, 4); setAttendanceCode(val); setAttendanceResult(null); }}
                  className="code-real-input" autoFocus />
                <button className="btn-checkin-full" onClick={handleCheckIn} disabled={checkingIn || attendanceCode.length !== 4}>
                  {checkingIn ? "⏳ Processing..." : "✅ Mark Attendance"}
                </button>
                {attendanceResult && (
                  <div className={`checkin-result ${attendanceResult.alreadyCheckedIn ? "warn" : "ok"}`}>
                    <div className="result-av">{attendanceResult.user.name?.[0]?.toUpperCase()}</div>
                    <div className="result-right">
                      <strong>{attendanceResult.user.name}</strong>
                      <span>{attendanceResult.user.role || "Employee"}</span>
                      <span className="result-time-text">
                        {attendanceResult.alreadyCheckedIn ? `⚠️ Already checked in at ${attendanceResult.time}` : `✅ Checked in at ${attendanceResult.time}`}
                      </span>
                      {!attendanceResult.alreadyCheckedIn && <span className="result-earn">💰 Rs. {SALARY_PER_DAY} earned today</span>}
                    </div>
                  </div>
                )}
              </div>
              <AttendanceLog />
            </div>
          </div>
        )}

        {/* REPORTS TAB */}
        {tab === "reports" && (
          <div>
            <div className="page-header">
              <div><h2>Employee Reports</h2><p>{unreadReports} unresolved reports</p></div>
            </div>
            {reports.length === 0 ? (
              <div className="empty-state-box"><div className="empty-icon">🚨</div><h3>No reports yet</h3><p>Employee reports will appear here</p></div>
            ) : (
              <div className="reports-list">
                {reports.map((r) => (
                  <div key={r.id} className={`report-card ${r.status === "resolved" ? "resolved" : ""}`}>
                    <div className="report-top">
                      <div className="report-user">
                        <div className="report-av">{r.userName?.[0]?.toUpperCase()}</div>
                        <div>
                          <strong>{r.userName}</strong>
                          <span>{new Date(r.createdAt).toLocaleDateString("en-US")}</span>
                        </div>
                      </div>
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
                    {r.status !== "resolved" && (
                      <button className="btn-reply" onClick={() => { setReplyModal(r); setReplyText(""); }}>
                        💬 Reply
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {/* LEAVES TAB */}
        {tab === "leaves" && (
          <div>
            <div className="page-header"><div><h2>Leave Requests</h2><p>Approve or reject employee leave requests</p></div></div>
            {leaves.length === 0 ? (
              <div className="empty-state-box"><div className="empty-icon">🏖️</div><h3>No leave requests</h3></div>
            ) : (
              <div className="reports-list">
                {leaves.map((l) => (
                  <div key={l.id} className={`report-card ${l.status === "approved" ? "resolved" : ""}`}
                    style={{ borderLeftColor: l.status === "approved" ? "var(--success)" : l.status === "rejected" ? "var(--danger)" : "var(--warning)" }}>
                    <div className="report-top">
                      <div className="report-user">
                        <div className="report-av">{l.userName?.[0]?.toUpperCase()}</div>
                        <div><strong>{l.userName}</strong><span>{l.date}</span></div>
                      </div>
                      <span className={`report-status ${l.status === "approved" ? "resolved" : "open"}`}>
                        {l.status === "approved" ? "✅ Approved" : l.status === "rejected" ? "❌ Rejected" : "⏳ Pending"}
                      </span>
                    </div>
                    <p className="report-msg">{l.reason}</p>
                    {l.status === "pending" && (
                      <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn-reply" style={{ background: "#d1fae5", color: "#065f46" }} onClick={() => handleLeaveAction(l.id, "approved")}>✅ Approve</button>
                        <button className="btn-reply" style={{ background: "#fee2e2", color: "#991b1b" }} onClick={() => handleLeaveAction(l.id, "rejected")}>❌ Reject</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ADVANCES TAB */}
        {tab === "advances" && (
          <div>
            <div className="page-header"><div><h2>Advance Requests</h2><p>Approve or reject advance salary requests</p></div></div>
            {advances.length === 0 ? (
              <div className="empty-state-box"><div className="empty-icon">💵</div><h3>No advance requests</h3></div>
            ) : (
              <div className="reports-list">
                {advances.map((a) => (
                  <div key={a.id} className="report-card"
                    style={{ borderLeftColor: a.status === "approved" ? "var(--success)" : a.status === "rejected" ? "var(--danger)" : "var(--warning)" }}>
                    <div className="report-top">
                      <div className="report-user">
                        <div className="report-av">{a.userName?.[0]?.toUpperCase()}</div>
                        <div><strong>{a.userName}</strong><span style={{ color: "var(--success)", fontWeight: 700 }}>Rs. {Number(a.amount).toLocaleString()}</span></div>
                      </div>
                      <span className={`report-status ${a.status === "approved" ? "resolved" : "open"}`}>
                        {a.status === "approved" ? "✅ Approved" : a.status === "rejected" ? "❌ Rejected" : "⏳ Pending"}
                      </span>
                    </div>
                    <p className="report-msg">{a.reason}</p>
                    {a.status === "pending" && (
                      <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn-reply" style={{ background: "#d1fae5", color: "#065f46" }} onClick={() => handleAdvanceAction(a.id, "approved")}>✅ Approve</button>
                        <button className="btn-reply" style={{ background: "#fee2e2", color: "#991b1b" }} onClick={() => handleAdvanceAction(a.id, "rejected")}>❌ Reject</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Salary Modal */}
      {salaryModal && (
        <div className="modal-overlay" onClick={() => setSalaryModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-av">{salaryModal.name?.[0]?.toUpperCase()}</div>
              <div><h3>{salaryModal.name}</h3><p>Record Salary Payment</p></div>
            </div>
            {modalLoading ? <div className="modal-loading">Calculating pending salary...</div> : (
              <div className="modal-pending-info">
                <span>Pending this month</span>
                <span className={`modal-pending-val ${modalPending === 0 ? "zero" : ""}`}>Rs. {modalPending.toLocaleString()}</span>
              </div>
            )}
            {modalPending === 0 && !modalLoading ? (
              <div className="modal-fully-paid">✅ Salary fully paid for this month</div>
            ) : (
              <>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Amount (Rs.) — Max: Rs. {modalPending.toLocaleString()}</label>
                  <input type="number" placeholder={`e.g. ${modalPending}`} value={salaryAmount} max={modalPending} min={1} onChange={(e) => setSalaryAmount(e.target.value)} />
                </div>
                <div className="form-group" style={{ marginTop: 12 }}>
                  <label>Note (optional)</label>
                  <input type="text" placeholder="e.g. May salary" value={salaryNote} onChange={(e) => setSalaryNote(e.target.value)} />
                </div>
                {modalPending > 0 && <button className="btn-autofill-modal" onClick={() => setSalaryAmount(String(modalPending))}>⚡ Fill Full Pending — Rs. {modalPending.toLocaleString()}</button>}
              </>
            )}
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setSalaryModal(null)}>Cancel</button>
              {modalPending > 0 && !modalLoading && <button className="btn-primary" onClick={handlePaySalary}>💰 Pay Now</button>}
            </div>
          </div>
        </div>
      )}

      {/* Send Note Modal */}
      {noteModal && (
        <div className="modal-overlay" onClick={() => setNoteModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-av">{noteModal.name?.[0]?.toUpperCase()}</div>
              <div><h3>Send Note</h3><p>To: {noteModal.name}</p></div>
            </div>
            <form onSubmit={handleSendNote}>
              <div className="form-group" style={{ marginTop: 16 }}>
                <label>Note Message</label>
                <textarea placeholder="Write a note for this employee..." value={noteText}
                  onChange={(e) => setNoteText(e.target.value)} rows={4} required
                  style={{ padding: "10px 12px", border: "1.5px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit", resize: "vertical", width: "100%", background: "var(--bg)" }} />
              </div>
              <p style={{ fontSize: 12, color: "var(--text-light)", marginTop: 8 }}>
                📌 Popup on next login + saved in Notifications tab.
              </p>
              <div className="modal-actions" style={{ marginTop: 16 }}>
                <button type="button" className="btn-cancel" onClick={() => setNoteModal(null)}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={sendingNote}>{sendingNote ? "Sending..." : "📤 Send Note"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {updateModal && (
        <div className="modal-overlay" onClick={() => setUpdateModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-av">{updateModal.name?.[0]?.toUpperCase()}</div>
              <div><h3>Update Employee</h3><p>{updateModal.email}</p></div>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="form-group" style={{ marginTop: 16 }}><label>Full Name</label>
                <input type="text" value={updateForm.name} onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} required /></div>
              <div className="form-group" style={{ marginTop: 12 }}><label>Phone</label>
                <input type="tel" value={updateForm.phone} onChange={(e) => setUpdateForm({ ...updateForm, phone: e.target.value })} /></div>
              <div className="form-group" style={{ marginTop: 12 }}><label>CNIC</label>
                <input type="text" value={updateForm.cnic} onChange={(e) => setUpdateForm({ ...updateForm, cnic: e.target.value })} /></div>
              <div className="form-group" style={{ marginTop: 12 }}><label>Role</label>
                <select value={updateForm.role} onChange={(e) => setUpdateForm({ ...updateForm, role: e.target.value })}>
                  <option value="sales">Sales</option><option value="boosting">Boosting</option>
                </select></div>
              <div className="form-group" style={{ marginTop: 12 }}><label>Salary Per Day (Rs.)</label>
                <input type="number" value={updateForm.salaryPerDay} min={1} onChange={(e) => setUpdateForm({ ...updateForm, salaryPerDay: e.target.value })} /></div>
              <div className="form-group" style={{ marginTop: 12 }}><label>Status</label>
                <select value={updateForm.status} onChange={(e) => setUpdateForm({ ...updateForm, status: e.target.value })}>
                  <option value="active">Active</option><option value="inactive">Inactive</option>
                </select></div>
              <div className="modal-actions" style={{ marginTop: 20 }}>
                <button type="button" className="btn-cancel" onClick={() => setUpdateModal(null)}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={updating}>{updating ? "Saving..." : "✅ Save Changes"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {replyModal && (
        <div className="modal-overlay" onClick={() => setReplyModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-av">{replyModal.userName?.[0]?.toUpperCase()}</div>
              <div><h3>Reply to Report</h3><p>{replyModal.userName}</p></div>
            </div>
            <div className="report-msg" style={{ marginTop: 14, background: "#f8fafc", padding: "10px 14px", borderRadius: 8, fontSize: 13 }}>
              <strong>Issue:</strong> {replyModal.message}
            </div>
            <form onSubmit={handleReply}>
              <div className="form-group" style={{ marginTop: 14 }}><label>Your Reply</label>
                <textarea placeholder="Write your reply..." value={replyText} onChange={(e) => setReplyText(e.target.value)} rows={3} required
                  style={{ padding: "10px 12px", border: "1.5px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit", resize: "vertical", width: "100%", background: "var(--bg)" }} />
              </div>
              <div className="modal-actions" style={{ marginTop: 16 }}>
                <button type="button" className="btn-cancel" onClick={() => setReplyModal(null)}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={sendingReply}>{sendingReply ? "Sending..." : "💬 Send Reply"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Salary Reminder Popup */}
      {salaryReminder && (
        <div className="modal-overlay">
          <div className="modal" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>💰</div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Salary Reminder</h3>
            <p style={{ color: "var(--text-light)", fontSize: 14, marginBottom: 20 }}>
              It's the 1st of the month! Time to review and pay employee salaries.
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={dismissSalaryReminder}>Dismiss</button>
              <button className="btn-primary" onClick={() => { dismissSalaryReminder(); setTab("users"); }}>
                💸 Go to Employees
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AttendanceLog() {
  const [logs, setLogs] = useState([]);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function load() {
      setFetching(true);
      try {
        const q = query(collection(db, "attendance"), where("month", "==", month), orderBy("timestamp", "desc"));
        const snap = await getDocs(q);
        setLogs(snap.docs.map((d) => d.data()));
      } catch {
        try {
          const q2 = query(collection(db, "attendance"), where("month", "==", month));
          const snap2 = await getDocs(q2);
          const data = snap2.docs.map((d) => d.data());
          data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setLogs(data);
        } catch {}
      }
      setFetching(false);
    }
    load();
  }, [month]);

  return (
    <div className="att-log-card">
      <div className="log-header">
        <h3>📋 Attendance Log</h3>
        <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="month-picker" />
      </div>
      <div className="log-table-wrap">
        {fetching ? <div className="log-loading">Loading records...</div> : (
          <table className="log-table">
            <thead><tr><th>Employee</th><th>Code</th><th>Date</th><th>Check-In</th><th>Salary</th></tr></thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i}>
                  <td><strong>{l.name}</strong></td>
                  <td><span className="code-badge">{l.employeeCode}</span></td>
                  <td>{l.date}</td><td>{l.checkInTime}</td>
                  <td className="salary-cell">Rs. {l.salaryEarned}</td>
                </tr>
              ))}
              {logs.length === 0 && <tr><td colSpan={5} className="empty-row">No records for this month</td></tr>}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
