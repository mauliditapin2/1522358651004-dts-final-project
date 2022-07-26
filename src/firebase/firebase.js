// Di sini kita akan import beberapa fungsi dari package firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Di sini kita akan import beberapa fungsi dari package firebase/auth
// Firebase ini sebenarnya memungkinkan kita untuk bisa login dengan banyak sekali
// Provider (Google, Github, Meta, dsb).

// Tapi pada pembelajaran ini kita akan menggunakannya via Email saja yah
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIah_SnDssnJMiQeWSDlgYjntwZndFMQY",
  authDomain: "berita-4bb59.firebaseapp.com",
  projectId: "berita-4bb59",
  storageBucket: "berita-4bb59.appspot.com",
  messagingSenderId: "776294728142",
  appId: "1:776294728142:web:1716670caf4bf2b1ad6b9f",
  databaseURL: "https://1522358651004-dts-final-project.netlify.app"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ---
// DALAM PEMBELAJARAN INI NAMA FUNGSI DITULIS DALAM BAHASA INDONESIA UNTUK MEMUDAHKAN PEMBELAJARAN
// PADA REAL CASE, MOHON GUNAKAN BAHASA INGGRIS DEMI KEMUDAHAN MEMBACA SECARA UNIVERSAL
// ---

// Fungsi untuk Register
// Kita gunakan versi async / await untuk memudahkan yah
const registerDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Pada aturan firebase authentication
    // Setelah user selesai registrasi, maka secara otomatis akan melakukan Sign In
    // sehingga kita bisa mengecek apakah seseorang sudah berhasil masuk atau belum

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);

    // Sebenarnya di dalam err dari Firebase ini (dalam bentuk Object)
    // ada 2 property yang penting:
    // - code: error code dari firebase authentication ketika terjadi error
    // - message: error message dari firebase authentication ketika terjadi error
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )


    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    // Sama dengan register
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
  // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

// Fungsi untuk sign out
const keluarDariApps = async () => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Export seluruh fungsi yang dibuat + auth
export {
  auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
  db
};