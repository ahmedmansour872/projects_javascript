// video
let randomvideo = document.getElementById("randomvideo");
let containeriframe = document.getElementById("containeriframe");

let arrvideo = [
  "https://www.youtube.com/embed/Cbk980jV7Ao",
  "https://www.youtube.com/embed/_BRGc6NJup4",
  "https://www.youtube.com/embed/1bsX6T3onhg",
  "https://www.youtube.com/embed/bI4bylssXYY",
  "https://www.youtube.com/embed/G3w8ALFOTcE",
];
randomvideo.addEventListener("click", function (el) {
  let num = Math.floor(Math.random() * arrvideo.length);
  containeriframe.innerHTML = `<iframe
  class="myiframe"
    width="560"
    height="315"
    src=${arrvideo[num]}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`;
});

// blockquote
let randomquote = document.getElementById("randomquote");
let parentquote = document.getElementById("parentquote");

let arrquote = [
  " أمقت ما تكتب، لكنني مستعد لدفع حياتي كي تواصل الكتابة.",
  " الحرية خير يمكننا من التمتع بسائر الخيرات.",
  " الحرية هي الحق في أن تعمل ما يبيحه القانون.",
  " الحرية هي الحق في أن تعمل ما يبيحه القانون.",
  " حيث تكون الحرية يكون الوطن.",
  " الحرية من غير قانون ليست سوى سيل مدمر.",
  " العقل روح الحرية.",
  " أن تموت جوعاً وأنت حر خير من أن تعيش عبداً وأنت سمين.",
];
randomquote.addEventListener("click", function (el) {
  let num = Math.floor(Math.random() * arrquote.length);
  parentquote.innerHTML = ` <blockquote lang="ar" dir="rtl" class="sidekick">
  ${arrquote[num]}
  <br />

  <cite> على حسن </cite>
</blockquote>`;
});

// animation hearts

let randomhearts = document.getElementById("randomhearts");
let containerheart = document.getElementById("containerheart");

randomhearts.addEventListener("click", function (el) {
  randomHeards();
});

function randomHeards() {
  let moreHearts = setInterval(() => {
    let num = (Math.random() * 100).toFixed(2);
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "&#128526;";
    heart.style.left = num + "%";
    containerheart.append(heart);
  }, 50);

  setTimeout(() => {
    clearInterval(moreHearts);
  }, 3000);

  setTimeout(() => {
    var len = containerheart.childElementCount;
    for (let i = 0; i < len; i++) {
      containerheart.removeChild(containerheart.firstElementChild);
    }
  }, 4000);
}
