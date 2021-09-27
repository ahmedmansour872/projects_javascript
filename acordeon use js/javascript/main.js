let plus = document.querySelector(".container-of-qa");
console.log(plus);

plus.addEventListener("click", function (el) {
  let elem = el.target.parentElement.nextElementSibling;
  if (el.target.classList.contains("show")) {
    el.target.textContent = "+";
    elem.classList.remove("active");
    el.target.classList.remove("show");
  } else {
    el.target.textContent = "-";
    elem.classList.add("active");
    el.target.classList.add("show");
  }
});
