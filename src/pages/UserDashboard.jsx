import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

export default function UserDashboard() {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState([]);
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    if (!user) return;
    async function load() {
      try {
        const attQ = query(
          collection(db, "attendance"),
          where("uid", "==", user.uid),
          where("month", "==", month)
        );
        const attSnap = await getDocs(attQ);
        const attData = attSnap.docs.map((d) => d.data());
        attData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAttendance(attData);

        const salQ = query(collection(db, "salaryHistory"), where("uid", "==", user.uid));
        const salSnap = await getDocs(salQ);
        const salData = salSnap.docs.map((d) => d.data());
        salData.sort((a, b) => new Date(b.paidAt) - new Date(a.paidAt));
        setSalaryHistory(salData);
      } catch (err) {
        console.error("Dashboard error:", err.message);
      }
    }
    load();
  }, [user, month]);

  const totalEarned = attendance.reduce((s, a) => s + (a.salaryEarned || 0), 0);
  const totalPaid = salaryHistory.filter((s) => s.month === month).reduce((sum, s) => sum + (s.amount || 0), 0);
  const pending = Math.max(0, totalEarned - totalPaid);

  return (
    <div className="dash-page">
      <header className="dash-header">
        <div className="dash-header-left">
          <div className="dash-logo">🏢</div>
          <div>
            <h1>My Dashboard</h1>
            <p>Welcome back, {userData?.name}</p>
          </div>
        </div>
        <button className="dash-logout" onClick={() => { signOut(auth); navigate("/login"); }}>
          🚪 Sign Out
        </button>
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
              {userData?.department && <span>🏷️ {userData?.department}</span>}
            </div>
          </div>
          <div className="dash-emp-code">
            <div className="code-label">Your Employee Code</div>
            <div className="code-value">{userData?.employeeCode}</div>
            <div className="code-hint">Show this to admin for check-in</div>
          </div>
        </div>

        {/* Month Selector */}
        <div className="dash-month-bar">
          <h3>Monthly Summary</h3>
          <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="month-picker" />
        </div>

        {/* Stats */}
        <div className="dash-stats">
          <div className="dash-stat green">
            <div className="stat-icon">📅</div>
            <div className="stat-val">{attendance.length}</div>
            <div className="stat-lbl">Days Present</div>
          </div>
          <div className="dash-stat blue">
            <div className="stat-icon">💰</div>
            <div className="stat-val">Rs. {totalEarned.toLocaleString()}</div>
            <div className="stat-lbl">Total Earned</div>
          </div>
          <div className="dash-stat purple">
            <div className="stat-icon">✅</div>
            <div className="stat-val">Rs. {totalPaid.toLocaleString()}</div>
            <div className="stat-lbl">Salary Received</div>
          </div>
          <div className="dash-stat orange">
            <div className="stat-icon">⏳</div>
            <div className="stat-val">Rs. {pending.toLocaleString()}</div>
            <div className="stat-lbl">Pending</div>
          </div>
        </div>

        <div className="dash-tables">
          <div className="dash-table-card">
            <h3>Attendance — {month}</h3>
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

          <div className="dash-table-card">
            <h3>Salary Payment History</h3>
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
                    <tr><td colSpan={4} className="empty-row">No salary payments yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
