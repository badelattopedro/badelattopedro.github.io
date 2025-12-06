function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => window.location.href = "dashboard.html")
        .catch(e => alert(e.message));
}

function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(e => alert(e.message));
}

function register() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, pass)
        .then(() => window.location.href = "index.html")
        .catch(e => alert(e.message));
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}
