let time = document.getElementsByClassName("time")[0];
let timeGame = 300;
let numImgSHow = 0; //2
let arr = [];
let overllay = document.getElementsByClassName("overllay")[0].firstElementChild;
// let items = document.querySelectorAll(".items");
let nameOfPlayer = document.getElementById("name");
let wrong = 0;
let numOfWorng = document.getElementById("num");
let closeGame;

let arrOfImages = [
  "photo/apple.jpg",
  "photo/apple.jpg",
  "photo/213d99aa-dd00-43c2-8448-b21dcb5c8de4.jpg",
  "photo/213d99aa-dd00-43c2-8448-b21dcb5c8de4.jpg",
  "photo/37fwNOPW_400x400.jpg",
  "photo/37fwNOPW_400x400.jpg",
  "photo/8d67e3a0-38c8-4cfe-a3c2-3528db88c25f.jpg",
  "photo/8d67e3a0-38c8-4cfe-a3c2-3528db88c25f.jpg",
  "photo/alex-knight-2EJCSULRwC8-unsplash.jpg",
  "photo/alex-knight-2EJCSULRwC8-unsplash.jpg",
  "photo/WeCreateExperiences-7-December-launch-survey-reveals-value-of-events-to-businesses_-741x486.webp",
  "photo/WeCreateExperiences-7-December-launch-survey-reveals-value-of-events-to-businesses_-741x486.webp",
  "photo/banana.jpg",
  "photo/banana.jpg",
  "photo/farcc.jpeg",
  "photo/farcc.jpeg",
  "photo/Indian_jujube.jpg",
  "photo/Indian_jujube.jpg",
  "photo/wallpaper.jpg",
  "photo/wallpaper.jpg",
];

// Create Content Elemnt Of Game
function CreateContent(arrOfImages) {
  for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * arrOfImages.length);

    let items = document.createElement("div");
    items.className = "items";

    let face = document.createElement("div");
    face.className = "face";
    face.innerHTML = "&#128525;";

    let back = document.createElement("div");
    back.className = "back";

    let img = document.createElement("img");
    img.src = arrOfImages[randomNum];

    back.append(img);

    items.append(back);
    items.prepend(face);

    document.getElementsByClassName("memory_game")[0].prepend(items);
    arrOfImages.splice(randomNum, 1);
  }
}

// time.classList.contains

overllay.addEventListener("click", function (element) {
  document.body.style.padding = "20px";

  CreateContent(arrOfImages);

  let items = document.querySelectorAll(".items");

  //show all of iamges
  items.forEach((e) => {
    e.style.transform = "rotateY(180deg)";
  });

  //name of palyer
  let name = prompt("what is your name?");
  if (name != null) {
    nameOfPlayer.textContent = name;
    closeGame = setInterval(() => {
      timer(timeGame);
      timeGame--;
    }, 1000);

    //hide all of iamges after three seconde
    setTimeout(() => {
      items.forEach((e) => {
        e.style.transform = "rotateY(0)";
      });
    }, 2500);
  } else createPOPUP("Plase Enter Your Name");

  //remove overllay
  element.target.parentElement.remove();

  //click of the item
  items.forEach((e) => {
    e.addEventListener("click", function (el) {
      el.target.parentElement.style.transform = "rotateY(180deg)";

      numImgSHow++;

      if (!el.target.parentElement.parentElement.classList.contains("active"))
        arr.push(
          el.target.nextElementSibling.firstElementChild.getAttribute("src")
        );

      if (numImgSHow == 2) {
        if (arr[0] == arr[1]) {
          let imageOfSame = document.querySelectorAll(
            `.items .back img[src='${arr[0]}']`
          );
          imageOfSame.forEach((e) => {
            e.parentElement.parentElement.classList.add("active");
          });
          arr = [];
        } else {
          numOfWorng.textContent = ++wrong;
          arr = [];
        }
        numImgSHow = 0;
        setTimeout(() => {
          document.querySelectorAll(".items:not(.active)").forEach((ele) => {
            ele.style.transform = "rotateY(0)";
          });
        }, 500);
        el.target.parentElement.style.transform = "rotateY(180deg)";
      }

      let q = 0;
      items.forEach((item) => {
        if (item.classList.contains("active")) q++;
      });
      if (q == 20) createPOPUP("congratolation");
    });
  });
});

// create pop up
function createPOPUP(content) {
  let gameGover = document.createElement("div");
  gameGover.className = "overllay";
  gameGover.textContent = content;
  gameGover.style.fontSize = "30px";
  gameGover.style.width = "100%";
  gameGover.style.height = "100%";
  gameGover.style.color = "#FFF";
  document.body.prepend(gameGover);
  clearInterval(closeGame);
}

// time of game
function timer(secondes) {
  let min = Math.floor(secondes / 60);
  let sec = secondes % 60;

  if (min.toString().length == 1) min = "0" + min;
  if (sec.toString().length == 1) sec = "0" + sec;

  time.textContent = min + ":" + sec;
  if (secondes == 0) {
    clearInterval(closeGame);
    createPOPUP("Game Over The Is Finshed");
  }
}
