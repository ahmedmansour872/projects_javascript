let prev = document.getElementById("prev");
let next = document.getElementById("next");
let allCard = document.querySelectorAll(".slider .card");
let CardShow = document.querySelector(".slider .show");

let prevtranslate = 0;
let nexttranslate = 0;

function ckeckPrevElem() {
  if (allCard[2].classList.contains("show")) {
    prev.setAttribute("disabled", "true");
    prev.classList.add("active");
  } else {
    prev.removeAttribute("disabled");
    prev.classList.remove("active");
  }
}

ckeckPrevElem();

function ckeckNextElem() {
  if (allCard[allCard.length - 1].classList.contains("show")) {
    next.setAttribute("disabled", "true");
    next.classList.add("active");
  } else {
    next.removeAttribute("disabled");
    next.classList.remove("active");
  }
}

window.addEventListener("DOMContentLoaded", (e) => {
  prev.addEventListener("click", function (el) {
    document
      .querySelector(".slider .show")
      .previousElementSibling.classList.add("show");
    document.querySelectorAll(".slider .show")[1].classList.remove("show");

    ckeckPrevElem();
    ckeckNextElem();

    prevtranslate = nexttranslate + 351;
    nexttranslate += 351;
    document.querySelectorAll(".slider .card").forEach((e) => {
      e.style.transform = `translateX(${prevtranslate}px)`;
    });
  });

  next.addEventListener("click", function (el) {
    document
      .querySelector(".slider .show")
      .nextElementSibling.classList.add("show");
    document.querySelectorAll(".slider .show")[0].classList.remove("show");

    ckeckPrevElem();
    ckeckNextElem();

    nexttranslate = prevtranslate - 351;
    prevtranslate -= 351;
    document.querySelectorAll(".slider .card").forEach((e) => {
      e.style.transform = `translateX(${nexttranslate}px)`;
    });
  });
});
