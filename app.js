const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  const username = loginInput.value;
}

// login button click 감지
loginButton.addEventListener("click", handleLoginBtnClick);
