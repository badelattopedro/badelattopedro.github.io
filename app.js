
function openPage(page) {
    let content = document.getElementById('content');

    if (page === 'dashboard') {
        content.innerHTML = `
            <div class='box'>
                <h2>Dashboard</h2>
                <p>Resumo geral do seu organizador.</p>
            </div>
        `;
    }

    if (page === 'tasks') {
        content.innerHTML = `
            <div class='box'>
                <h2>Tarefas</h2>
                <input id='taskInput' placeholder='Nova tarefa'>
                <button onclick='addTask()'>Adicionar</button>
                <ul id='taskList'></ul>
            </div>
        `;
        loadTasks();
    }

    if (page === 'notes') {
        content.innerHTML = `
            <div class='box'>
                <h2>Anotações</h2>
                <textarea id='notes' rows='8'></textarea>
                <button onclick='saveNotes()'>Salvar</button>
            </div>
        `;
        loadNotes();
    }

    if (page === 'calendar') {
        content.innerHTML = `
            <div class='box'>
                <h2>Agenda</h2>
                <input id='eventText' placeholder='Evento'>
                <input id='eventDate' type='date'>
                <button onclick='addEvent()'>Adicionar</button>
                <ul id='eventList'></ul>
            </div>
        `;
        loadEvents();
    }

    if (page === 'links') {
        content.innerHTML = `
            <div class='box'>
                <h2>Links</h2>
                <input id='linkName' placeholder='Nome do site'>
                <input id='linkUrl' placeholder='URL'>
                <button onclick='addLink()'>Salvar</button>
                <ul id='linkList'></ul>
            </div>
        `;
        loadLinks();
    }

    if (page === 'shopping') {
        content.innerHTML = `
            <div class='box'>
                <h2>Lista de Compras</h2>
                <input id='shopInput' placeholder='Item'>
                <button onclick='addShop()'>Adicionar</button>
                <ul id='shopList'></ul>
            </div>
        `;
        loadShop();
    }
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    let list = document.getElementById("taskList");
    list.innerHTML = tasks.map((t,i)=>`<li>${t} <button onclick='deleteTask(${i})'>X</button></li>`).join('');
}
function addTask() {
    let v = document.getElementById("taskInput").value;
    if (!v) return;
    let tasks = JSON.parse(localStorage.getItem("tasks")||"[]");
    tasks.push(v);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
function deleteTask(i){
    let tasks=JSON.parse(localStorage.getItem("tasks")||"[]");
    tasks.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    loadTasks();
}

function loadNotes(){ document.getElementById("notes").value = localStorage.getItem("notes") || ""; }
function saveNotes(){ localStorage.setItem("notes", document.getElementById("notes").value); }

function loadShop() {
    const items = JSON.parse(localStorage.getItem("shop") || "[]");
    let list = document.getElementById("shopList");
    list.innerHTML = items.map((t,i)=>`<li>${t} <button onclick='deleteShop(${i})'>X</button></li>`).join('');
}
function addShop(){
    let v=document.getElementById("shopInput").value;
    if(!v)return;
    let items=JSON.parse(localStorage.getItem("shop")||"[]");
    items.push(v);
    localStorage.setItem("shop",JSON.stringify(items));
    loadShop();
}
function deleteShop(i){
    let items=JSON.parse(localStorage.getItem("shop")||"[]");
    items.splice(i,1);
    localStorage.setItem("shop",JSON.stringify(items));
    loadShop();
}

function loadLinks(){
    const links = JSON.parse(localStorage.getItem("links") || "[]");
    let list = document.getElementById("linkList");
    list.innerHTML = links.map((l,i)=>`<li><a href='${l.url}' target='_blank'>${l.name}</a>
    <button onclick='deleteLink(${i})'>X</button></li>`).join('');
}
function addLink(){
    let name=document.getElementById("linkName").value;
    let url=document.getElementById("linkUrl").value;
    if(!name||!url)return;
    let links=JSON.parse(localStorage.getItem("links")||"[]");
    links.push({name,url});
    localStorage.setItem("links",JSON.stringify(links));
    loadLinks();
}
function deleteLink(i){
    let links=JSON.parse(localStorage.getItem("links")||"[]");
    links.splice(i,1);
    localStorage.setItem("links",JSON.stringify(links));
    loadLinks();
}

function loadEvents(){
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    let list=document.getElementById("eventList");
    list.innerHTML = events.map((e,i)=>`<li>${e.date} - ${e.text} 
    <button onclick='deleteEvent(${i})'>X</button></li>`).join('');
}
function addEvent(){
    let t=document.getElementById("eventText").value;
    let d=document.getElementById("eventDate").value;
    if(!t||!d)return;
    let events=JSON.parse(localStorage.getItem("events")||"[]");
    events.push({text:t,date:d});
    localStorage.setItem("events",JSON.stringify(events));
    loadEvents();
}
function deleteEvent(i){
    let events=JSON.parse(localStorage.getItem("events")||"[]");
    events.splice(i,1);
    localStorage.setItem("events",JSON.stringify(events));
    loadEvents();
}

openPage('dashboard');
