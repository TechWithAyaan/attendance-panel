import React, { useRef, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, db } from "../firebase";
import toast from "react-hot-toast";

export default function ProfilePhoto({ uid, photoURL, name, size = 64 }) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { toast.error("Image must be under 2MB"); return; }
    setUploading(true);
    try {
      const storageRef = ref(storage, `avatars/${uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateDoc(doc(db, "users", uid), { photoURL: url });
      toast.success("Profile photo updated!");
    } catch (err) {
      toast.error("Upload failed: " + err.message);
    }
    setUploading(false);
  }

  return (
    <div
      className="profile-photo-wrap"
      style={{ width: size, height: size, position: "relative", cursor: "pointer" }}
      onClick={() => inputRef.current.click()}
      title="Click to change photo"
    >
      {photoURL ? (
        <img
          src={photoURL}
          alt={name}
          style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", border: "3px solid #4f46e5" }}
        />
      ) : (
        <div style={{
          width: size, height: size, borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontSize: size * 0.4, fontWeight: 800,
          border: "3px solid #4f46e5"
        }}>
          {name?.[0]?.toUpperCase()}
        </div>
      )}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        background: "#4f46e5", borderRadius: "50%",
        width: size * 0.35, height: size * 0.35,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.18, border: "2px solid white"
      }}>
        {uploading ? "⏳" : "📷"}
      </div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleUpload} />
    </div>
  );
}
