// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkWXdv4x_Ds4R7Ih8vcZbVpwFdbb2v_xI",
  authDomain: "snapshare-2448f.firebaseapp.com",
  projectId: "snapshare-2448f",
  storageBucket: "snapshare-2448f.appspot.com",
  messagingSenderId: "201381371721",
  appId: "1:201381371721:web:34e059d84788ab66b08498",
  measurementId: "G-KR7HKP92CR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);