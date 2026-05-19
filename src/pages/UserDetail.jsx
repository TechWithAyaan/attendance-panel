import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import "./UserDetail.css";

export default function UserDetail() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [loading, setLoading] = useState(true);
  const [payAmount, setPayAmount] = useState("");
  const [payNote, setPayNote] = useState("");
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    async function load() {
      const snap = await getDoc(doc(db, "users", uid));
      if (snap.exists()) setUser({ id: snap.id, ...snap.data() });
      setLoading(false);
    }
    load();
  }, [uid]);

  useEffect(() => { loadMonthData(); }, [uid, month]);

  async function loadMonthData() {
    try {
      const attQ = query(collection(db, "attendance"), where("uid", "==", uid), where("month", "==", month));
      const attSnap = await getDocs(attQ);
      const attData = attSnap.docs.map((d) => d.data());
      attData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAttendance(attData);

      const salQ = query(collection(db, "salaryHistory"), where("uid", "==", uid));
      const salSnap = await getDocs(salQ);
      const salData = salSnap.docs.map((d) => d.data());
      salData.sort((a, b) => new Date(b.paidAt) - new Date(a.paidAt));
      setSalaryHistory(salData);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handlePaySalary(e) {
    e.preventDefault();
    const amt = Number(payAmount);
    if (!payAmount || isNaN(amt) || amt <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (amt > pending) {
      toast.error(`Cannot exceed pending amount — Max: Rs. ${pending.toLocaleString()}`);
      return;
    }
    setPaying(true);
    try {
      await addDoc(collection(db, "salaryHistory"), {
        uid: user.id,
        name: user.name,
        amount: amt,
        note: payNote,
        paidAt: new Date().toISOString(),
        month,
      });
      toast.success(`Rs. ${amt.toLocaleString()} paid successfully ✅`);
      setPayAmount("");
      setPayNote("");
      await loadMonthData();
    } catch {
      toast.error("Failed to record payment");
    }
    setPaying(false);
  }

  if (loading) return <div className="loading-screen"><div className="spinner" /></div>;
  if (!user) return <div className="ud-error">Employee not found</div>;

  const totalEarned = attendance.reduce((s, a) => s + (a.salaryEarned || 0), 0);
  const totalPaid = salaryHistory.filter((s) => s.month === month).reduce((sum, s) => sum + (s.amount || 0), 0);
  const pending = Math.max(0, totalEarned - totalPaid);

  return (
    <div className="ud-page">
      <div className="ud-topbar">
        <button className="back-btn" onClick={() => navigate("/admin")}>← Back to Admin</button>
      </div>

      <div className="ud-container">

        {/* Hero Profile Card */}
        <div className="ud-hero">
          <div className="ud-hero-top">
            <div className="ud-avatar">{user.name?.[0]?.toUpperCase()}</div>
            <div className="ud-hero-name">
              <h2>{user.name}</h2>
              <span className="ud-code-badge">Code: {user.employeeCode}</span>
            </div>
          </div>
          <div className="ud-hero-body">
            <div className="ud-detail-item">
              <span className="ud-detail-label">📧 Email</span>
              <span>{user.email}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">📞 Phone</span>
              <span>{user.phone || "—"}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">🪪 CNIC</span>
              <span>{user.cnic || "—"}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">🏷️ Department</span>
              <span>{user.department || "—"}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">👤 Role</span>
              <span className="capitalize">{user.role}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">📅 Joined</span>
              <span>{user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US") : "—"}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">💵 Salary / Day</span>
              <span>Rs. {user.salaryPerDay || 500}</span>
            </div>
            <div className="ud-detail-item">
              <span className="ud-detail-label">🔘 Status</span>
              <span className={`status-badge ${user.status === "active" ? "active" : "inactive"}`}>
                {user.status || "active"}
              </span>
            </div>
          </div>
        </div>

        {/* Month Bar */}
        <div className="ud-month-bar">
          <h3>Monthly Overview</h3>
          <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="month-picker" />
        </div>

        {/* Stats */}
        <div className="ud-stats-row">
          <div className="ud-stat-card green">
            <div className="ud-stat-icon">📅</div>
            <div><div className="ud-stat-value">{attendance.length}</div><div className="ud-stat-label">Days Present</div></div>
          </div>
          <div className="ud-stat-card blue">
            <div className="ud-stat-icon">💰</div>
            <div><div className="ud-stat-value">Rs. {totalEarned.toLocaleString()}</div><div className="ud-stat-label">Total Earned</div></div>
          </div>
          <div className="ud-stat-card purple">
            <div className="ud-stat-icon">✅</div>
            <div><div className="ud-stat-value">Rs. {totalPaid.toLocaleString()}</div><div className="ud-stat-label">Salary Paid</div></div>
          </div>
          <div className="ud-stat-card orange">
            <div className="ud-stat-icon">⏳</div>
            <div><div className="ud-stat-value">Rs. {pending.toLocaleString()}</div><div className="ud-stat-label">Pending</div></div>
          </div>
        </div>

        {/* Bottom: Pay Card + Tables */}
        <div className="ud-bottom-row">

          {/* Pay Salary Card */}
          <div className="ud-pay-card">
            <div className="ud-pay-card-header">
              <span>💸</span>
              <div>
                <h3>Pay Salary</h3>
                <p>{month}</p>
              </div>
            </div>
            <div className="ud-pay-summary">
              <div className="ud-pay-row">
                <span>Total Earned</span>
                <span className="earned-val">Rs. {totalEarned.toLocaleString()}</span>
              </div>
              <div className="ud-pay-row">
                <span>Already Paid</span>
                <span className="paid-val">Rs. {totalPaid.toLocaleString()}</span>
              </div>
              <div className="ud-pay-divider" />
              <div className="ud-pay-row pending-row">
                <span>Pending</span>
                <span className="pending-val">Rs. {pending.toLocaleString()}</span>
              </div>
            </div>
            <form onSubmit={handlePaySalary} className="ud-pay-form">
              <div className="ud-pay-input-group">
                <label>Amount (Rs.)</label>
                <input
                  type="number"
                  placeholder={pending > 0 ? `Max: Rs. ${pending}` : "No pending amount"}
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  min="1"
                  max={pending}
                  disabled={pending === 0}
                />
              </div>
              <div className="ud-pay-input-group">
                <label>Note (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. May salary"
                  value={payNote}
                  onChange={(e) => setPayNote(e.target.value)}
                  disabled={pending === 0}
                />
              </div>
              {pending > 0 && (
                <button type="button" className="btn-autofill" onClick={() => setPayAmount(String(pending))}>
                  ⚡ Fill Full Pending — Rs. {pending.toLocaleString()}
                </button>
              )}
              <button type="submit" className="btn-pay-now" disabled={paying || pending === 0}>
                {pending === 0 ? "✅ Fully Paid" : paying ? "Processing..." : "💸 Pay Now"}
              </button>
            </form>
          </div>

          {/* Tables */}
          <div className="ud-tables-col">
            <div className="ud-table-card">
              <h3>📅 Attendance — {month}</h3>
              <div className="table-wrap">
                <table className="ud-table">
                  <thead>
                    <tr><th>#</th><th>Date</th><th>Check-In Time</th><th>Earned</th></tr>
                  </thead>
                  <tbody>
                    {attendance.map((a, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{a.date}</td>
                        <td>{a.checkInTime}</td>
                        <td className="salary-cell">Rs. {a.salaryEarned}</td>
                      </tr>
                    ))}
                    {attendance.length === 0 && (
                      <tr><td colSpan={4} className="empty-row">No attendance records this month</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="ud-table-card">
              <h3>💰 Salary Payment History</h3>
              <div className="table-wrap">
                <table className="ud-table">
                  <thead>
                    <tr><th>Date</th><th>Month</th><th>Amount</th><th>Note</th></tr>
                  </thead>
                  <tbody>
                    {salaryHistory.map((s, i) => (
                      <tr key={i}>
                        <td>{new Date(s.paidAt).toLocaleDateString("en-US")}</td>
                        <td>{s.month}</td>
                        <td className="salary-cell">Rs. {s.amount?.toLocaleString()}</td>
                        <td>{s.note || "—"}</td>
                      </tr>
                    ))}
                    {salaryHistory.length === 0 && (
                      <tr><td colSpan={4} className="empty-row">No salary payments recorded yet</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
