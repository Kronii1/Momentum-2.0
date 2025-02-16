const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function handleLink() {
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLink);
