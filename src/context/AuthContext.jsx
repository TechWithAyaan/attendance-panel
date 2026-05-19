import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext(null);
const SESSION_TIMEOUT = 8 * 60 * 60 * 1000; // 8 hours

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const snap = await getDoc(doc(db, "users", firebaseUser.uid));
        setUserData(snap.exists() ? snap.data() : null);
        // Session timeout
        const loginTime = localStorage.getItem("loginTime");
        if (loginTime && Date.now() - Number(loginTime) > SESSION_TIMEOUT) {
          await signOut(auth);
          localStorage.removeItem("loginTime");
          return;
        }
        if (!loginTime) localStorage.setItem("loginTime", Date.now().toString());
      } else {
        setUserData(null);
        localStorage.removeItem("loginTime");
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
