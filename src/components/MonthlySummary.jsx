import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import SalarySlip from "./SalarySlip";

export default function MonthlySummary({ users }) {
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slipData, setSlipData] = useState(null);

  useEffect(() => { if (users.length) loadSummaries(); }, [month, users]);

  async function loadSummaries() {
    setLoading(true);
    const results = [];
    for (const u of users) {
      const attQ = query(collection(db, "attendance"), where("uid", "==", u.id), where("month", "==", month));
      const attSnap = await getDocs(attQ);
      const attendance = attSnap.docs.map(d => d.data());
      const totalEarned = attendance.reduce((s, a) => s + (a.salaryEarned || 0), 0);

      const salQ = query(collection(db, "salaryHistory"), where("uid", "==", u.id));
      const salSnap = await getDocs(salQ);
      const totalPaid = salSnap.docs.map(d => d.data()).filter(s => s.month === month).reduce((s, d) => s + (d.amount || 0), 0);

      results.push({ user: u, attendance, totalEarned, totalPaid, pending: Math.max(0, totalEarned - totalPaid) });
    }
    setSummaries(results);
    setLoading(false);
  }

  const grandEarned = summaries.reduce((s, r) => s + r.totalEarned, 0);
  const grandPaid = summaries.reduce((s, r) => s + r.totalPaid, 0);
  const grandPending = summaries.reduce((s, r) => s + r.pending, 0);

  return (
    <div>
      <div className="page-header">
        <div><h2>Monthly Summary</h2><p>All employees salary overview</p></div>
        <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="month-picker" />
      </div>

      {/* Grand totals */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 20 }}>
        <div className="ud-stat-card blue"><div className="ud-stat-icon">💰</div>
          <div><div className="ud-stat-value">Rs. {grandEarned.toLocaleString()}</div><div className="ud-stat-label">Total Earned (All)</div></div></div>
        <div className="ud-stat-card green"><div className="ud-stat-icon">✅</div>
          <div><div className="ud-stat-value">Rs. {grandPaid.toLocaleString()}</div><div className="ud-stat-label">Total Paid (All)</div></div></div>
        <div className="ud-stat-card orange"><div className="ud-stat-icon">⏳</div>
          <div><div className="ud-stat-value">Rs. {grandPending.toLocaleString()}</div><div className="ud-stat-label">Total Pending (All)</div></div></div>
      </div>

      {loading ? (
        <div className="loading-cards">{[1,2,3].map(i => <div key={i} className="skeleton-card" />)}</div>
      ) : (
        <div className="att-log-card">
          <div className="log-table-wrap">
            <table className="log-table">
              <thead>
                <tr>
                  <th>Employee</th><th>Code</th><th>Days</th>
                  <th>Earned</th><th>Paid</th><th>Pending</th><th>Slip</th>
                </tr>
              </thead>
              <tbody>
                {summaries.map((s, i) => (
                  <tr key={i}>
                    <td><strong>{s.user.name}</strong><br /><span style={{ fontSize: 12, color: "var(--text-light)" }}>{s.user.role}</span></td>
                    <td><span className="code-badge">#{s.user.employeeCode}</span></td>
                    <td>{s.attendance.length}</td>
                    <td className="salary-cell">Rs. {s.totalEarned.toLocaleString()}</td>
                    <td style={{ color: "var(--success)", fontWeight: 600 }}>Rs. {s.totalPaid.toLocaleString()}</td>
                    <td style={{ color: s.pending > 0 ? "var(--warning)" : "var(--success)", fontWeight: 700 }}>
                      Rs. {s.pending.toLocaleString()}
                    </td>
                    <td>
                      <button className="btn-reply" onClick={() => setSlipData(s)}>📄 Slip</button>
                    </td>
                  </tr>
                ))}
                {summaries.length === 0 && <tr><td colSpan={7} className="empty-row">No data for this month</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {slipData && (
        <SalarySlip
          user={slipData.user}
          month={month}
          attendance={slipData.attendance}
          totalEarned={slipData.totalEarned}
          totalPaid={slipData.totalPaid}
          pending={slipData.pending}
          onClose={() => setSlipData(null)}
        />
      )}
    </div>
  );
}
