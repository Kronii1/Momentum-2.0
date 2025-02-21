const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const loginFormDisplay = document.querySelector("#login-form__container");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginFormDisplay.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const checkHour = date.getHours();
  if (checkHour >= 6 && checkHour <= 9) {
    greeting.innerText = `Good morning, ${username}.`;
  } else if (checkHour > 10 && checkHour <= 18) {
    greeting.innerText = `Good afternoon, ${username}.`;
  } else {
    greeting.innerText = `Good evening, ${username}.`;
  }
  loginFormDisplay.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginFormDisplay.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
