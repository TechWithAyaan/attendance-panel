import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, where, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
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
  const [salaryModal, setSalaryModal] = useState(null);
  const [salaryAmount, setSalaryAmount] = useState("");
  const [salaryNote, setSalaryNote] = useState("");
  const [modalPending, setModalPending] = useState(0);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => { fetchUsers(); }, []);

  async function fetchUsers() {
    setLoadingUsers(true);
    try {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setUsers(list.filter((u) => u.role !== "admin"));
    } catch {
      toast.error("Failed to load employees");
    }
    setLoadingUsers(false);
  }

  async function handleCheckIn() {
    if (!attendanceCode || attendanceCode.length !== 4) {
      toast.error("Please enter a valid 4-digit code");
      return;
    }
    setCheckingIn(true);
    try {
      const q = query(collection(db, "users"), where("employeeCode", "==", attendanceCode));
      const snap = await getDocs(q);
      if (snap.empty) {
        toast.error("No employee found with this code");
        setAttendanceResult(null);
        setCheckingIn(false);
        return;
      }
      const userDoc = snap.docs[0];
      const user = { id: userDoc.id, ...userDoc.data() };
      const today = new Date().toISOString().split("T")[0];

      const attQ = query(
        collection(db, "attendance"),
        where("uid", "==", user.id),
        where("date", "==", today)
      );
      const attSnap = await getDocs(attQ);

      if (!attSnap.empty) {
        const existing = attSnap.docs[0].data();
        setAttendanceResult({ user, alreadyCheckedIn: true, time: existing.checkInTime });
        toast("Already checked in today", { icon: "ℹ️" });
      } else {
        const now = new Date();
        const checkInTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        await addDoc(collection(db, "attendance"), {
          uid: user.id,
          name: user.name,
          employeeCode: user.employeeCode,
          date: today,
          month: today.slice(0, 7),
          checkInTime,
          timestamp: now.toISOString(),
          salaryEarned: SALARY_PER_DAY,
        });
        setAttendanceResult({ user, alreadyCheckedIn: false, time: checkInTime });
        toast.success(`Check-in recorded for ${user.name}`);
        setAttendanceCode("");
      }
    } catch (err) {
      toast.error("Error: " + err.message);
    }
    setCheckingIn(false);
  }

  async function openSalaryModal(u) {
    setSalaryModal(u);
    setSalaryAmount("");
    setSalaryNote("");
    setModalPending(0);
    setModalLoading(true);
    try {
      const currentMonth = new Date().toISOString().slice(0, 7);

      // Get attendance for current month
      const attQ = query(
        collection(db, "attendance"),
        where("uid", "==", u.id),
        where("month", "==", currentMonth)
      );
      const attSnap = await getDocs(attQ);
      const totalEarned = attSnap.docs.reduce((s, d) => s + (d.data().salaryEarned || 0), 0);

      // Get salary paid this month
      const salQ = query(
        collection(db, "salaryHistory"),
        where("uid", "==", u.id)
      );
      const salSnap = await getDocs(salQ);
      const totalPaid = salSnap.docs
        .map(d => d.data())
        .filter(s => s.month === currentMonth)
        .reduce((s, d) => s + (d.amount || 0), 0);

      const pending = Math.max(0, totalEarned - totalPaid);
      setModalPending(pending);
    } catch (err) {
      console.error(err);
    }
    setModalLoading(false);
  }

  async function handlePaySalary() {
    if (!salaryAmount || isNaN(salaryAmount)) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (Number(salaryAmount) > modalPending) {
      toast.error(`Cannot exceed pending amount — Max: Rs. ${modalPending.toLocaleString()}`);
      return;
    }
    try {
      await addDoc(collection(db, "salaryHistory"), {
        uid: salaryModal.id,
        name: salaryModal.name,
        amount: Number(salaryAmount),
        note: salaryNote,
        paidAt: new Date().toISOString(),
        month: new Date().toISOString().slice(0, 7),
      });
      toast.success(`Rs. ${Number(salaryAmount).toLocaleString()} paid to ${salaryModal.name}`);
      setSalaryModal(null);
      setSalaryAmount("");
      setSalaryNote("");
    } catch {
      toast.error("Failed to record salary payment");
    }
  }

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.employeeCode?.includes(searchUser)
  );

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span>🏢</span>
          <span>Admin Panel</span>
        </div>
        <nav className="sidebar-nav">
          <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>
            <span>👥</span> Employees
          </button>
          <button className={tab === "attendance" ? "active" : ""} onClick={() => setTab("attendance")}>
            <span>📋</span> Attendance
          </button>
        </nav>
        <div className="sidebar-footer">
          <div className="admin-info">
            <div className="admin-avatar">{userData?.name?.[0]?.toUpperCase()}</div>
            <div>
              <div className="admin-name">{userData?.name}</div>
              <div className="admin-role">Administrator</div>
            </div>
          </div>
          <button className="logout-btn" onClick={() => { signOut(auth); navigate("/admin-login"); }}>
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">

        {/* EMPLOYEES TAB */}
        {tab === "users" && (
          <div>
            <div className="page-header">
              <div>
                <h2>Employees</h2>
                <p>{users.length} total employees registered</p>
              </div>
              <input
                className="search-input"
                placeholder="🔍 Search by name, email or code..."
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
              />
            </div>

            {loadingUsers ? (
              <div className="loading-cards">
                {[1,2,3].map(i => <div key={i} className="skeleton-card" />)}
              </div>
            ) : filtered.length === 0 ? (
              <div className="empty-state-box">
                <div className="empty-icon">👥</div>
                <h3>No employees found</h3>
                <p>Employees will appear here once they sign up</p>
              </div>
            ) : (
              <div className="users-grid">
                {filtered.map((u) => (
                  <div key={u.id} className="user-card" onClick={() => navigate(`/admin/user/${u.id}`)}>
                    <div className="user-card-header">
                      <div className="user-avatar">{u.name?.[0]?.toUpperCase()}</div>
                      <div className="user-badge">#{u.employeeCode}</div>
                    </div>
                    <div className="user-card-body">
                      <h3>{u.name}</h3>
                      <p className="user-email">✉️ {u.email}</p>
                      <p className="user-phone">📞 {u.phone}</p>
                      {u.department && <p className="user-dept">🏷️ {u.department}</p>}
                    </div>
                    <div className="user-card-footer">
                      <span className={`status-badge ${u.status === "active" ? "active" : "inactive"}`}>
                        {u.status || "active"}
                      </span>
                      <button className="pay-btn" onClick={(e) => { e.stopPropagation(); openSalaryModal(u); }}>
                        💰 Pay Salary
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ATTENDANCE TAB */}
        {tab === "attendance" && (
          <div>
            <div className="page-header">
              <div>
                <h2>Attendance Check-In</h2>
                <p>Enter employee 4-digit code to mark attendance</p>
              </div>
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

                <input
                  id="codeInput"
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="Type code here"
                  value={attendanceCode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
                    setAttendanceCode(val);
                    setAttendanceResult(null);
                  }}
                  className="code-real-input"
                  autoFocus
                />

                <button
                  className="btn-checkin-full"
                  onClick={handleCheckIn}
                  disabled={checkingIn || attendanceCode.length !== 4}
                >
                  {checkingIn ? "⏳ Processing..." : "✅ Mark Attendance"}
                </button>

                {attendanceResult && (
                  <div className={`checkin-result ${attendanceResult.alreadyCheckedIn ? "warn" : "ok"}`}>
                    <div className="result-av">{attendanceResult.user.name?.[0]?.toUpperCase()}</div>
                    <div className="result-right">
                      <strong>{attendanceResult.user.name}</strong>
                      <span>{attendanceResult.user.department || "Employee"}</span>
                      <span className="result-time-text">
                        {attendanceResult.alreadyCheckedIn
                          ? `⚠️ Already checked in at ${attendanceResult.time}`
                          : `✅ Checked in at ${attendanceResult.time}`}
                      </span>
                      {!attendanceResult.alreadyCheckedIn && (
                        <span className="result-earn">💰 Rs. {SALARY_PER_DAY} earned today</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <AttendanceLog />
            </div>
          </div>
        )}
      </main>

      {/* Salary Modal */}
      {salaryModal && (
        <div className="modal-overlay" onClick={() => setSalaryModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-av">{salaryModal.name?.[0]?.toUpperCase()}</div>
              <div>
                <h3>{salaryModal.name}</h3>
                <p>Record Salary Payment</p>
              </div>
            </div>

            {modalLoading ? (
              <div className="modal-loading">Calculating pending salary...</div>
            ) : (
              <div className="modal-pending-info">
                <span>Pending this month</span>
                <span className={`modal-pending-val ${modalPending === 0 ? "zero" : ""}`}>
                  Rs. {modalPending.toLocaleString()}
                </span>
              </div>
            )}

            {modalPending === 0 && !modalLoading ? (
              <div className="modal-fully-paid">
                ✅ Salary fully paid for this month
              </div>
            ) : (
              <>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Amount (Rs.) — Max: Rs. {modalPending.toLocaleString()}</label>
                  <input
                    type="number"
                    placeholder={`e.g. ${modalPending}`}
                    value={salaryAmount}
                    max={modalPending}
                    min={1}
                    onChange={(e) => setSalaryAmount(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 12 }}>
                  <label>Note (optional)</label>
                  <input type="text" placeholder="e.g. May salary" value={salaryNote}
                    onChange={(e) => setSalaryNote(e.target.value)} />
                </div>
                {modalPending > 0 && (
                  <button
                    className="btn-autofill-modal"
                    onClick={() => setSalaryAmount(String(modalPending))}
                  >
                    ⚡ Fill Full Pending — Rs. {modalPending.toLocaleString()}
                  </button>
                )}
              </>
            )}

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setSalaryModal(null)}>Cancel</button>
              {modalPending > 0 && !modalLoading && (
                <button className="btn-primary" onClick={handlePaySalary}>💰 Pay Now</button>
              )}
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
        const q = query(
          collection(db, "attendance"),
          where("month", "==", month),
          orderBy("timestamp", "desc")
        );
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
        {fetching ? (
          <div className="log-loading">Loading records...</div>
        ) : (
          <table className="log-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Code</th>
                <th>Date</th>
                <th>Check-In</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i}>
                  <td><strong>{l.name}</strong></td>
                  <td><span className="code-badge">{l.employeeCode}</span></td>
                  <td>{l.date}</td>
                  <td>{l.checkInTime}</td>
                  <td className="salary-cell">Rs. {l.salaryEarned}</td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr><td colSpan={5} className="empty-row">No records for this month</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
