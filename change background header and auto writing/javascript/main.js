//  toggle the light & dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

//  when hover on  HEADER => change-color
{
  changecolor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
  });

  changecolor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
  });
}

// change background of header and the first title in header

let headerbg = document.getElementById("headerbg");
let myheader = document.getElementsByClassName("myheader")[0];
let myTitle = document.querySelector(".myheader > h1");

headerbg.onclick = function () {
  let num = Math.ceil(Math.random() * 360);
  myheader.style.backgroundColor = `hsl(${num},75%,50%)`;
  myTitle.style.backgroundColor = `hsl(${num},75%,50%)`;
};

// change background of all header h1 not first header in header

let myAllTitle = document.querySelectorAll("#body h1:not(.myheader > h1)");
let titlebg = document.getElementById("titlebg");

titlebg.addEventListener("click", function (e) {
  let num = Math.ceil(Math.random() * 360);
  myAllTitle.forEach((e) => {
    e.style.backgroundColor = `hsl(${num},75%,50%)`;
  });
});

// change color of all header h1 not first header in header

let titlecolor = document.getElementById("titlecolor");

titlecolor.addEventListener("click", function (e) {
  let num = Math.ceil(Math.random() * 360);
  myAllTitle.forEach((e) => {
    e.style.color = `hsl(${num},75%,50%)`;
  });
});

// change background color  of all section in body

let sectionbg = document.getElementById("sectionbg");
let allSection = document.querySelectorAll("section");

sectionbg.addEventListener("click", function (e) {
  let num = Math.ceil(Math.random() * 360);
  allSection.forEach((e) => {
    e.style.backgroundColor = `hsl(${num},75%,50%)`;
  });
});

// auto writing in first h1 element in header

let firstHeader = document.querySelector("header > h1");
window.onload = function () {
  let i = 0;
  let sum = firstHeader.textContent;
  firstHeader.textContent = "";
  setInterval(() => {
    if (i < sum.length) {
      firstHeader.textContent += sum[i];
      i++;
    } else {
      i = 0;
      firstHeader.textContent = "";
    }
  }, 300);
};
