function getUID() {
    return auth.currentUser ? auth.currentUser.uid : null;
}

// Tarefas
function addTask(text) {
    return db.collection("users").doc(getUID()).collection("tasks").add({
        text,
        createdAt: Date.now()
    });
}

function getTasks(callback) {
    return db.collection("users").doc(getUID()).collection("tasks")
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
            let data = [];
            snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
            callback(data);
        });
}

function deleteTask(id) {
    return db.collection("users").doc(getUID()).collection("tasks").doc(id).delete();
}


// Notas
function saveNotes(text) {
    return db.collection("users").doc(getUID())
        .collection("notes").doc("content")
        .set({ text });
}

function loadNotes(callback) {
    return db.collection("users").doc(getUID())
        .collection("notes").doc("content")
        .onSnapshot(doc => {
            callback(doc.exists ? doc.data().text : "");
        });
}


// Compras
function addShopItem(text) {
    return db.collection("users").doc(getUID())
        .collection("shopping").add({
            text,
            createdAt: Date.now()
        });
}

function getShopItems(callback) {
    return db.collection("users").doc(getUID())
        .collection("shopping")
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
            let data = [];
            snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
            callback(data);
        });
}

function deleteShopItem(id) {
    return db.collection("users").doc(getUID())
        .collection("shopping").doc(id).delete();
}


// Links
function addLink(name, url) {
    return db.collection("users").doc(getUID())
        .collection("links").add({ name, url, createdAt: Date.now() });
}

function getLinks(callback) {
    return db.collection("users").doc(getUID())
        .collection("links")
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
            let data = [];
            snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
            callback(data);
        });
}

function deleteLink(id) {
    return db.collection("users").doc(getUID())
        .collection("links").doc(id).delete();
}


// Eventos
function addEvent(text, date) {
    return db.collection("users").doc(getUID())
        .collection("events").add({
            text,
            date,
            createdAt: Date.now()
        });
}

function getEvents(callback) {
    return db.collection("users").doc(getUID())
        .collection("events")
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
            let data = [];
            snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
            callback(data);
        });
}

function deleteEvent(id) {
    return db.collection("users").doc(getUID())
        .collection("events").doc(id).delete();
}
