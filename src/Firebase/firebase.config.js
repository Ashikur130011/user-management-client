// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOq3uk-meBvCsrH7mi8AuUL3UDQYvtiz0",
  authDomain: "user-management-system-962a3.firebaseapp.com",
  projectId: "user-management-system-962a3",
  storageBucket: "user-management-system-962a3.appspot.com",
  messagingSenderId: "372881304545",
  appId: "1:372881304545:web:aef79fe710962c1f7ac0a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app