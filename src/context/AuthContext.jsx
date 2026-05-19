import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext(null);
const SESSION_TIMEOUT = 8 * 60 * 60 * 1000; // 8 hours

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const unsubUserRef = useRef(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (firebaseUser) => {
      // Clean up previous Firestore listener if any
      if (unsubUserRef.current) {
        unsubUserRef.current();
        unsubUserRef.current = null;
      }

      setUser(firebaseUser);

      if (firebaseUser) {
        // Session timeout check
        const loginTime = localStorage.getItem("loginTime");
        if (loginTime && Date.now() - Number(loginTime) > SESSION_TIMEOUT) {
          signOut(auth);
          localStorage.removeItem("loginTime");
          setLoading(false);
          return;
        }
        if (!loginTime) localStorage.setItem("loginTime", Date.now().toString());

        // Real-time listener on user document — updates userData whenever Firestore changes
        unsubUserRef.current = onSnapshot(
          doc(db, "users", firebaseUser.uid),
          (snap) => {
            const data = snap.exists() ? snap.data() : null;
            setUserData(data);
            setLoading(false);
          },
          () => {
            setUserData(null);
            setLoading(false);
          }
        );
      } else {
        setUserData(null);
        localStorage.removeItem("loginTime");
        setLoading(false);
      }
    });

    return () => {
      unsubAuth();
      if (unsubUserRef.current) unsubUserRef.current();
    };
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
