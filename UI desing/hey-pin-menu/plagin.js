let hay_pin = document.querySelector(".hay_pin");

const scaleBypexal = 0.03333;
const translateBypexal = 0.7;
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 8; i++) {
    let hay = document.createElement("div");
    hay.classList.add("hay");

    hay.innerHTML = `<div class="image">
    <img src="alex-knight-2EJCSULRwC8-unsplash.jpg" alt="" />
    </div>
    <div class="des">
    <h4>ahmed masnour</h4>
    <p>description</p>
    </div>`;

    const reverseIndex = 8 - 1 - i;
    hay.style.transform = `scale(${
      1 - reverseIndex * scaleBypexal
    }) translateY(-${reverseIndex * translateBypexal}rem)`;

    hay_pin.append(hay);
  }

  hay_pin.addEventListener("click", function (e) {
    e.stopPropagation();
    let allHay = document.querySelectorAll(".hay");
    allHay.forEach((el, i) => {
      const reverseIndex = allHay.length - 1 - i;
      el.style.transform = `rotate(${reverseIndex * 1.1}deg) translate(-${
        reverseIndex * 0.02
      }rem,-${reverseIndex * 2.5}rem)`;
    });
  });
});

document.addEventListener("click", function () {
  let allHay = document.querySelectorAll(".hay");
  allHay.forEach((el, i) => {
    const reverseIndex = allHay.length - 1 - i;
    el.style.transform = `scale(${
      1 - reverseIndex * scaleBypexal
    }) translateY(-${translateBypexal * reverseIndex}rem)`;
  });
});
