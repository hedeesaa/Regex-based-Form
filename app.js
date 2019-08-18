document.getElementById("username").addEventListener("blur", checkUsername);
document.getElementById("email").addEventListener("blur", checkEmail);
document.getElementById("phone").addEventListener("blur", checkPhone);
document.getElementById("password").addEventListener("blur", checkPass);
document.getElementById("form").addEventListener("submit", checkForm);

function checkUsername() {
  const re = /^[a-zA-z][a-zA-z0-9\.]{7}/;
  const username = document.querySelector("#username");
  const disMessage = document.querySelector("#user-msg");
  if (re.test(username.value)) {
    username.classList.remove("invalid");
    disMessage.style.display = "none";
  } else {
    username.classList.add("invalid");
    disMessage.style.display = "block";
  }
}

function checkEmail() {
  const re = /^[a-zA-z0-9_\.\-]+@[a-zA-z0-9]+\.[a-zA-Z]{2,5}$/;
  const email = document.querySelector("#email");
  const disMessage = document.querySelector("#email-msg");
  if (re.test(email.value)) {
    email.classList.remove("invalid");
    disMessage.style.display = "none";
  } else {
    email.classList.add("invalid");
    disMessage.style.display = "block";
  }
}
function checkPhone() {
  const re = /^(?:\+\d\d|0)[0-9]{10}$/;
  const phone = document.querySelector("#phone");
  const disMessage = document.querySelector("#phone-msg");
  if (re.test(phone.value)) {
    phone.classList.remove("invalid");
    disMessage.style.display = "none";
  } else {
    phone.classList.add("invalid");
    disMessage.style.display = "block";
  }
}
function checkPass() {
  const re = /\S{8}/;
  const pass = document.querySelector("#password");
  const disMessage = document.querySelector("#pass-msg");
  if (re.test(pass.value)) {
    pass.classList.remove("invalid");
    disMessage.style.display = "none";
  } else {
    pass.classList.add("invalid");
    disMessage.style.display = "block";
  }
}

function checkForm(e) {
  const pass = document.querySelector("#password");
  const pass2 = document.querySelector("#password2");
  const disMessage = document.querySelector("#pass2-msg");
  if (pass.value !== pass2.value) {
    pass.classList.add("invalid");
    pass2.classList.add("invalid");
    disMessage.style.display = "block";
  } else {
    pass.classList.remove("invalid");
    pass2.classList.remove("invalid");
    disMessage.style.display = "none";
  }

  e.preventDefault();
}
