"use strict"; 

const inputs = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.querySelector(".loginBtn");

const handleInput = function () {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkValue(idValue);
  const isValidPw = checkValue(pwValue);

  if (isValidId && isValidPw) {
    handleBtn(true);
  } else {
    handleBtn(false);
  }
};//함수 표현식

const checkValue = function(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
} //함수 선언식

function handleBtn(btnValid) {
  if (btnValid) {
    // button active
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    loginBtn.style.cursor = "pointer";

    if (window.event.code === "Enter") {
      success();
    }
  } else {
    // button deactive
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.5;
    loginBtn.style.cursor = "default";
  }

  // 3항 연산자
  // loginBtn.disabled = btnValid ? false : true;
  // loginBtn.style.opacity = btnValid ? 1 : 0.5;
  // loginBtn.style.cursor = btnValid ? "pointer" : "default";
}

function success() {
  // e.preventDefault();
  alert("환영합니다!");
  location.href = "http://127.0.0.1:5501/pages/Westa/main/main.html";
  // location.replace("http://127.0.0.1:5501/pages/Westa/main/main.html");
}

inputs.addEventListener("input", handleInput);
inputs.addEventListener("keyup", handleInput);
loginBtn.addEventListener("click", success);
// loginBtn.addEventListener("submit", success);

// function init() {
//   inputs.addEventListener("input", handleInput);
//   inputs.addEventListener("keyup", handleInput);
//   loginBtn.addEventListener("click", success);
//   loginBtn.addEventListener("submit", success);
// }

// init();
