// ===============================
// Firebase Imports (V9 Modular)
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { 
    getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ===================================
// CONFIGURAÇÃO DO FIREBASE
// ===================================
const firebaseConfig = {
    apiKey: "AIzaSyD6h-zxGtp_6zoc7IX0XTOBwYYqVeYHFeA",
    authDomain: "organizador-b9752.firebaseapp.com",
    projectId: "organizador-b9752",
    storageBucket: "organizador-b9752.firebasestorage.app",
    messagingSenderId: "764845513918",
    appId: "1:764845513918:web:61e17dad54dbf01fbd12ef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// =====================================
// LOGIN GOOGLE
// =====================================
window.loginGoogle = function loginGoogle() {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login efetuado!");
            window.location.href = "dashboard.html";
        })
        .catch(err => alert(err.message));
};

// =====================================
// LOGOUT
// =====================================
window.logout = function logout() {
    signOut(auth).then(() => {
        alert("Você saiu da conta.");
        window.location.href = "index.html";
    });
};

// =====================================
// AUTORIZAÇÃO
// =====================================
onAuthStateChanged(auth, user => {
    if (!user && window.location.pathname.includes("dashboard")) {
        window.location.href = "index.html";
    }
});

// =====================================
// FUNÇÕES DAS TAREFAS
// =====================================
window.addTask = async function addTask() {
    const input = document.getElementById("taskInput");
    if (!i
