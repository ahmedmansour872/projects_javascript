const activeReg = () => {
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    psw.classList.contains("success") &&
    pswrepeat.classList.contains("success")
  ) {
    regbtn.removeAttribute("disabled");
  } else {
    regbtn.setAttribute("disabled", "disabled");
  }
};

username.addEventListener("keyup", (eo) => {
  username.classList.add("error");
  usermessage.style.display = "block";

  if (username.value.length > 2) {
    username.classList.add("success");
    usermessage.style.display = "none";
    username.nextElementSibling.style.opacity = "1";
  } else {
    username.classList.remove("success");
    usermessage.style.display = "block";
    username.nextElementSibling.style.opacity = "0";
  }

  activeReg();
});

email.addEventListener("keyup", (eo) => {
  email.classList.add("error");
  emailmessage.style.display = "block";
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(email.value)) {
    email.classList.add("success");
    emailmessage.style.display = "none";
    email.nextElementSibling.style.opacity = "1";
  } else {
    email.classList.remove("success");
    emailmessage.style.display = "block";
    email.nextElementSibling.style.opacity = "0";
  }

  activeReg();
});

// ali@gmail.com

psw.addEventListener("keyup", (eo) => {
  psw.classList.add("error");
  pswmessage.style.display = "block";
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPassword.test(psw.value)) {
    psw.classList.add("success");
    pswmessage.style.display = "none";
    psw.nextElementSibling.style.opacity = "1";
  } else {
    psw.classList.remove("success");
    pswmessage.style.display = "block";
    psw.nextElementSibling.style.opacity = "0";
  }

  activeReg();
});

// aaA888888@

pswrepeat.addEventListener("keyup", (eo) => {
  pswrepeat.classList.add("error");
  repeatmessage.style.display = "block";

  if (pswrepeat.value === psw.value) {
    pswrepeat.classList.add("success");
    repeatmessage.style.display = "none";
    pswrepeat.nextElementSibling.style.opacity = "1";
  } else {
    pswrepeat.classList.remove("success");
    repeatmessage.style.display = "block";
    pswrepeat.nextElementSibling.style.opacity = "0";
  }

  activeReg();
});

// zoom effect

createAccount.addEventListener("click", (eo) => {
  papaForm.style.display = "flex";

  setTimeout(() => {
    form.style.transform = "scale(1)";
  }, 100);
});

const close = document.getElementById("close");
close.addEventListener("click", (eo) => {
  form.style.transform = "scale(0)";

  setTimeout(() => {
    papaForm.style.display = "none";
  }, 400);
});
