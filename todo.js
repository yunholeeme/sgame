const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos(text) {
    localStorage.setItem(TODOS_LS, JSON.stringify(text));
}

function handleDelete() {
    const button = event.target;
    const li = button.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (x) {
        if (parseInt(li.id) !== x.id)
        {
            return x;
        }
    });
    toDos = cleanToDos;
    saveToDos(toDos);
}

function paintToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    const span = document.createElement("span");
    li.id = newId;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelete);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    toDoObj = {
        text:text,
        id: newId,
    };
    toDos.push(toDoObj);
    saveToDos(toDos);
}

function handleToDos(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (todo) {
            paintToDos(todo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleToDos);
}

init();