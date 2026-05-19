import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import toast from "react-hot-toast";
import "./Auth.css";

function generateCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export default function Signup() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", cnic: "", department: "", password: "", confirm: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast.error("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const employeeCode = generateCode();
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        name: form.name,
        email: form.email,
        phone: form.phone,
        cnic: form.cnic,
        role: "employee",
        department: form.department,
        employeeCode,
        salaryPerDay: 500,
        createdAt: new Date().toISOString(),
        status: "active",
      });
      toast.success(`Account created! Your Employee Code: ${employeeCode}`);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") toast.error("Email is already registered");
      else if (err.code === "auth/network-request-failed") toast.error("Check your internet connection");
      else toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="auth-bg">
      <div className="auth-card auth-card-wide">
        <div className="auth-logo">
          <div className="auth-logo-icon">🏢</div>
          <h1>Create Account</h1>
          <p>Fill in your details to register</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Muhammad Ali" value={form.name} onChange={set("name")} required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="03001234567" value={form.phone} onChange={set("phone")} required />
            </div>
            <div className="form-group">
              <label>CNIC</label>
              <input type="text" placeholder="42101-1234567-1" value={form.cnic} onChange={set("cnic")} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Department</label>
              <input type="text" placeholder="Sales / IT / HR..." value={form.department} onChange={set("department")} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Password *</label>
              <input type="password" placeholder="Min 6 characters" value={form.password} onChange={set("password")} required />
            </div>
            <div className="form-group">
              <label>Confirm Password *</label>
              <input type="password" placeholder="Repeat password" value={form.confirm} onChange={set("confirm")} required />
            </div>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
