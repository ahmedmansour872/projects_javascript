let char = document.querySelectorAll(".container .char div");
let hangman = document.querySelector(".hangman");
let numberOfInput = document.querySelector(".VlaueOFWord");

let name = prompt("Please Enter Your Name");
if (name != null) document.getElementById("name").innerHTML = name;
else document.getElementById("name").innerHTML = "noKnow";
let words = {
  programming: [
    "php",
    "javasript",
    "go",
    "scale",
    "C",
    "java",
    "python",
    "sql",
    "mongoose",
    "mysql",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstallar",
    "whiplash",
    "up",
    "coco",
    "memeento",
  ],
  people: [
    "ahmed",
    "mohamed",
    "mostafa",
    "mansour",
    "esraa",
    "shahd",
    "ali",
    "mona",
    "albert",
    "hossam",
  ],
  countries: [
    "egypt",
    "franch",
    "germany",
    "prazil",
    "portgal",
    "england",
    "iraq",
    "syria",
    "palestine",
    "bahrain",
    "qatar",
  ],
};

let wordValue = createInput();

let i = 0;
let finshedGame = 0;
char.forEach((e) => {
  e.addEventListener("click", function (el) {
    if (wordValue.indexOf(el.target.textContent) >= 0) {
      nasadsame(el.target);
    } else {
      hangman.children[i].style.display = "block";
      i++;
    }
    el.target.classList.add("active");
    if (i == 8) {
      createOverlay("THe Paly Is Finshed And You Are Loss");
    }
    if (finshedGame == numberOfInput.childElementCount) {
      createOverlay("THe Paly Is Finshed And You Are Win");
    }
  });
});

// create Element ovetlay to win or loss
function createOverlay(chrachter) {
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = chrachter;
  document.body.prepend(overlay);
}

// create number Element input fild

function createInput() {
  let randomKey = Math.floor(Math.random() * Object.keys(words).length);
  let randomWords = Math.floor(
    Math.random() * words[Object.keys(words)[randomKey]].length
  );
  let word = words[Object.keys(words)[randomKey]][randomWords].toUpperCase();
  let wordCatogry = Object.keys(words)[randomKey];

  document.getElementById("catogra").innerHTML = "categories: " + wordCatogry;
  console.log(word, wordCatogry);

  // number of input
  for (let i = 0; i < word.length; i++) {
    let input = document.createElement("input");
    input.type = "text";
    input.maxlength = 1;
    numberOfInput.append(input);
  }
  return word;
}

// fall input fild with char
function nasadsame(ele) {
  for (let i = 0; i < wordValue.length; i++) {
    if (wordValue[i] == ele.textContent)
      numberOfInput.children[i].value = ele.textContent;
  }
  finshedGame = 0;
  for (let i = 0; i < numberOfInput.childElementCount; i++) {
    if (numberOfInput.children[i].value.length > 0) finshedGame++;
  }
}
