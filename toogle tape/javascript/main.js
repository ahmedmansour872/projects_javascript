let btns = document.querySelectorAll(".toggle .btn button");
let des = document.querySelectorAll(".desc .fun-facts");

btns.forEach((e, i) => {
  // e.addEventListener("click", function (el) {
  //   el.target.classList.add("active");
  //   des.forEach((element) => {
  //     element.classList.remove("active-article");
  //   });
  //   btns.forEach((ele) => {
  //     ele.classList.remove("active");
  //   });
  //   des[i].classList.add("active-article");
  // });

  // another way to solve problem
  e.addEventListener("click", function (el) {
    btns.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.target.classList.add("active");

    des.forEach((ele) => {
      ele.classList.remove("active-article");
    });

    let a = document.querySelector(".desc ." + el.target.getAttribute("mark"));
    a.classList.add("active-article");
  });
});
