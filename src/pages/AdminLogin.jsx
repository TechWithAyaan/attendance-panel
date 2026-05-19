import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import toast from "react-hot-toast";
import "./Auth.css";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, form.email, form.password);
      const snap = await getDoc(doc(db, "users", cred.user.uid));
      const data = snap.data();

      if (data?.role !== "admin") {
        toast.error("Access denied — Admin only");
        await auth.signOut();
        setLoading(false);
        return;
      }

      toast.success(`Welcome, ${data?.name}!`);
      navigate("/admin");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg admin-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-icon">🔐</div>
          <h1>Admin Login</h1>
          <p>Only authorized admins can access</p>
        </div>

        <div className="admin-login-badge">
          🛡️ Restricted Area
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn-primary btn-admin" disabled={loading}>
            {loading ? "Verifying..." : "🔐 Admin Sign In"}
          </button>
        </form>

        <p className="auth-footer">
          Employee? <a href="/login">Go to Employee Login</a>
        </p>
      </div>
    </div>
  );
}
