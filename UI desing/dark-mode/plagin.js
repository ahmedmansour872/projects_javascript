let star = document.querySelector(".icon");

star.addEventListener("click", function (el) {
  document.querySelector(".dark_mode").classList.toggle("active");
  document.querySelector(".dark_mode h1").classList.toggle("active");
  document.querySelector(".dark_mode p").classList.toggle("active");
  document.querySelector(".dark_mode .prim").classList.toggle("active");
  document.querySelector(".dark_mode .seco").classList.toggle("active");
});
