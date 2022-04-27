let container = document.querySelector(".images");
let arrImg = [
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
  "https://assets.algoexpert.io/main/prod/g61bd5b79a0-prod/dist/images/google.noinline.png?8ec64f75",
];
let i = 0;
let clear;
clear = setInterval(() => {
  let one = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", arrImg[i % 6]);
  one.prepend(img);
  container.prepend(one);
  i++;
  if (i == arrImg.length) clearInterval(clear);
}, 500);
