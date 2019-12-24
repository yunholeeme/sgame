const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input");
    greeting = document.querySelector(".js-greeting");

const NAME_LS = "currentUser";
const SHOWING_CN = "showing";
const date = new Date();
const hours = date.getHours();

function saveCurrentUser(text) {
    localStorage.setItem(NAME_LS, text);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentUser = greetingInput.value;
    paintGreeting(currentUser);
    saveCurrentUser(currentUser);
}

function paintGreeting(text) {
    let greetingTitle = "Hello";
    if (hours < 12) {
        greetingTitle = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greetingTitle = "Good afternoon";
    } else {
        greetingTitle = "Good evening";
    }

    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${greetingTitle}, ${text}`;
}

function askForName() {
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const loadedName = localStorage.getItem(NAME_LS);
    if (loadedName === null) {
        askForName();
    } else {
        paintGreeting(loadedName);
    }
}

function init() {
    loadName();
}

init();