const firebaseConfig = {
    apiKey: "AIzaSyD6h-zxGtp_6zoc7IX0XTOBwYYqVeYHFeA",
    authDomain: "organizador-b9752.firebaseapp.com",
    projectId: "organizador-b9752",
    storageBucket: "organizador-b9752.firebasestorage.app",
    messagingSenderId: "764845513918",
    appId: "1:764845513918:web:61e17dad54dbf01fbd12ef"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
