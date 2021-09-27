let arr = [
  "photo/alex-knight-2EJCSULRwC8-unsplash.jpg",
  "photo/37fwNOPW_400x400.jpg",
  "photo/WhatsApp Image 2021-06-28 at 10.41.55 AM.jpeg",
  "photo/WhatsApp Image 2021-06-28 at 10.54.15 AM.jpeg",
  "photo/WhatsApp Image 2021-06-28 at 11.08.15 AM.jpeg",
];

let images = document.querySelectorAll(".slider ul li");
let img = document.querySelector(".slider .images img");
let count = document.querySelector(".slider .images span");
let prev = document.querySelector(".slider .counter .prev");
let next = document.querySelector(".slider .counter .next");

images.forEach((e) => {
  e.addEventListener("click", function (el) {
    images.forEach((e) => {
      e.classList.remove("activation");
    });
    el.target.className = "activation";
    img.src = arr[el.target.textContent - 1];
    count.textContent = el.target.textContent + " of 5";
    checkDisablesPrev(el.target);

    checkDisablesNext(el.target);
  });
});

prev.addEventListener("click", prevElem);

function prevElem() {
  let cout = document.querySelector(
    ".slider ul li.activation"
  ).previousElementSibling;
  checkDisablesPrev(cout);
  images.forEach((e) => {
    e.classList.remove("activation");
  });
  cout.classList.add("activation");
  img.src = arr[cout.textContent - 1];
  count.textContent = cout.textContent + " of 5";

  checkDisablesNext(cout);
}

next.addEventListener("click", nextElm);

function nextElm() {
  let cout = document.querySelector(
    ".slider ul li.activation"
  ).nextElementSibling;
  checkDisablesNext(cout);
  images.forEach((e) => {
    e.classList.remove("activation");
  });
  cout.classList.add("activation");
  img.src = arr[cout.textContent - 1];

  count.textContent = cout.textContent + " of 5";
  checkDisablesPrev(cout);
}

function checkDisablesPrev(el) {
  if (el.textContent == 1) {
    prev.classList.add("disabled");
    prev.setAttribute("disabled", "true");
  } else {
    prev.classList.remove("disabled");
    prev.removeAttribute("disabled");
  }
}

function checkDisablesNext(el) {
  if (el.textContent == arr.length) {
    next.classList.add("disabled");
    next.setAttribute("disabled", "true");
  } else {
    next.classList.remove("disabled");
    next.removeAttribute("disabled");
  }
}
