# Attendance & Admin Panel

## Setup Steps

### 1. Firebase Config
Open `src/firebase.js` and replace the placeholder values with your actual Firebase config:
```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  ...
};
```

### 2. Firebase Console Settings
- **Authentication** → Enable **Email/Password** provider
- **Firestore** → Create database in production or test mode
- **Firestore Rules** (paste this):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      allow read: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /attendance/{doc} {
      allow read, write: if request.auth != null;
    }
    match /salaryHistory/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Firestore Indexes
Go to Firebase Console → Firestore → Indexes → Import `firestore.indexes.json`
OR the app will show a link in the console to create them automatically on first query.

### 4. Run the App
```bash
npm run dev
```

---

## How It Works

### Signup
- User fills: Name, Email, Phone, CNIC, Department, Role, Password
- A **4-digit Employee Code** is auto-generated and saved
- Admin role → goes to `/admin`, Employee → goes to `/dashboard`

### Admin Panel
**Employees Tab**
- Shows all employees as cards
- Click any card → Full detail page with attendance + salary history
- "Pay Salary" button → Record a salary payment

**Attendance Tab**
- Enter 4-digit employee code → Check-in recorded with timestamp
- Prevents duplicate check-in on same day
- Monthly log table with filter

### User Dashboard
- Shows employee's own 4-digit code (to show admin)
- Monthly attendance records
- Salary earned vs received vs pending

### Salary Calculation
- Rs. 500 per check-in day
- Admin can record salary payments
- Pending = Total Earned - Total Paid (for that month)
