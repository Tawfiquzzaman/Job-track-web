// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6RzYEbGbBz_NT17CNaj4pqDx4WE5nsg",
  authDomain: "job-track-web.firebaseapp.com",
  projectId: "job-track-web",
  storageBucket: "job-track-web.firebasestorage.app",
  messagingSenderId: "620176321225",
  appId: "1:620176321225:web:cd63e4cc2ec688accb7b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
