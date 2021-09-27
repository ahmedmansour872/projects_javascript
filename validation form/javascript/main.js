let mybutton = document.getElementsByClassName("mybutton")[0];
let valid = document.getElementById("valid");
let form = document.querySelector("#valid .styleing");
let close = document.querySelector(".styleing .incon");

let username = document.querySelector("[type=text]");
let email = document.querySelector("[type=email]");
let password = document.getElementById("password");
let confirming = document.getElementById("confirm");

let regbtn = document.querySelector(".styleing form button");

const activeReg = () => {
  if (
    username.classList.contains("suc") &&
    email.classList.contains("suc") &&
    password.classList.contains("suc") &&
    confirming.classList.contains("suc")
  ) {
    regbtn.removeAttribute("disabled");
  } else {
    regbtn.setAttribute("disabled", "disabled");
  }
};

regbtn.addEventListener("click", function () {
  alert("you now is user");
});

mybutton.addEventListener("click", (eo) => {
  valid.style.display = "flex";

  setTimeout(() => {
    form.style.transform = "scale(1)";
  }, 100);
});

close.addEventListener("click", (eo) => {
  form.style.transform = "scale(0)";

  setTimeout(() => {
    valid.style.display = "none";
  }, 400);
});

username.oninput = function () {
  this.classList.remove("error");
  if (this.value.length > 10) {
    this.classList.add("suc");
    document.getElementById("usermessage").style.display = "none";
    this.nextElementSibling.style.opacity = 1;
  } else {
    this.classList.add("error");
    document.getElementById("usermessage").style.display = "block";
    this.nextElementSibling.style.opacity = "0";
  }
  activeReg();
};

email.oninput = function () {
  this.classList.remove("error");
  if (this.value.length > 10) {
    this.classList.add("suc");
    document.getElementById("emailmessage").style.display = "none";
    this.nextElementSibling.style.opacity = 1;
  } else {
    this.classList.add("error");
    document.getElementById("emailmessage").style.display = "block";
    this.nextElementSibling.style.opacity = "0";
  }
  activeReg();
};

password.oninput = function () {
  this.classList.remove("error");
  if (this.value.length > 10) {
    this.classList.add("suc");
    document.getElementById("pswmessage").style.display = "none";
    this.nextElementSibling.style.opacity = 1;
  } else {
    this.classList.add("error");
    document.getElementById("pswmessage").style.display = "block";
    this.nextElementSibling.style.opacity = "0";
  }
  activeReg();
};

confirming.oninput = function () {
  this.classList.remove("error");
  if (this.value == password.value) {
    this.classList.add("suc");
    document.getElementById("repeatmessage").style.display = "none";
    this.nextElementSibling.style.opacity = "1";
  } else {
    this.classList.add("error");
    document.getElementById("repeatmessage").style.display = "block";
    this.nextElementSibling.style.opacity = "0";
  }
  activeReg();
};
