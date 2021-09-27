let secondes = 15;
let numberQuitionCoreect = 0;
let numberOfQuestion = 1;
let main = document.getElementsByClassName("main")[0];
let foot = document.getElementsByClassName("foot")[0];
let count = document.getElementById("count");

let showAnwerInfo = document.getElementsByClassName("result")[0];
count.textContent = numberOfQuestion;
let QuitionAnswers = [
  [
    "HighText Machine Language",
    "HyperText and links Markup Language",
    "HyperText Markup Language",
    "None of these",
  ],
  [
    "Head, Title, HTML, body",
    "HTML, Body, Title, Head",
    "HTML, Head, Title, Body",
    "HTML, Head, Title, Body",
  ],
  ["<pre>", "<a>", "<b>", "<br>"],
  ["<h3>", "<h1>", "<h5>", "<h6>"],
  ["<br>", "<a>", "<pre>", "<b>"],
  ["<ul>", "<ol>", "<li>", "<i>"],
  ["\\", "!", "/", "."],
  [
    '<a href = "www.javatpoint.com"> javaTpoint.com </a>',
    '<a url = "www.javatpoint.com" javaTpoint.com /a>',
    '<a link = "www.javatpoint.com"> javaTpoint.com </a>',
    "<a> www.javatpoint.com <javaTpoint.com /a>",
  ],
  ["<ul>", "<ol>", "<li>", "<i>"],
  ["<i>", "<italic>", "<it>", " <pre>"],
];

info = [
  "HyperText Markup Language",
  "HTML, Head, Title, Body",
  "<b>",
  "<h1>",
  "<br>",
  "<ul>",
  "/",
  '<a href = "www.javatpoint.com"> javaTpoint.com </a>',
  "<ol>",
  "<italic>",
];

let quitions = [
  "HTML stands for -",
  "The correct sequence of HTML tags for starting a webpage is -",
  "Which of the following element is responsible for making the text bold in HTML?",
  "Which of the following tag is used for inserting the largest heading in HTML?",
  "Which of the following tag is used to insert a line-break in HTML?",
  "How to create an unordered list (a list with the list items in bullets) in HTML?",
  "Which character is used to represent the closing of a tag in HTML?",
  "How to create a hyperlink in HTML?",
  "How to create an ordered list (a list with the list items in numbers) in HTML?",
  "Which of the following element is responsible for making the text italic in HTML?",
];

function craateQuitionAndAnswer() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  let header2 = document.createElement("h2");
  header2.innerHTML = quitions[numberOfQuestion - 1];
  main.prepend(header2);
  let unOrderList = document.createElement("ul");
  main.append(unOrderList);
  for (let i = 0; i < 4; i++) {
    let list = document.createElement("li");
    list.textContent = QuitionAnswers[numberOfQuestion - 1][i];
    unOrderList.append(list);
  }
}

craateQuitionAndAnswer();

function craateNumberQuition() {
  let unOrderList = document.createElement("ul");
  foot.prepend(unOrderList);
  for (let i = 0; i < quitions.length; i++) {
    let list = document.createElement("li");
    unOrderList.append(list);
  }

  for (let i = 0; i < numberOfQuestion; i++) {
    document.querySelector(".foot ul").children[i].classList.add("finsh");
  }
}

craateNumberQuition();

function countDown(secondes) {
  let sec = secondes % 60;
  if (sec.toString().length == 1) sec = "0" + sec;
  document.getElementById("counter").textContent = "00:" + sec;

  if (sec == 0) {
    btn.click();
  }
}

let clearing = setInterval(() => {
  countDown(secondes);
  secondes--;
}, 1000);

function answer() {
  let answers = document.querySelectorAll(".main ul li");
  let i = 0;
  answers.forEach((e) => {
    e.addEventListener("click", function (el) {
      if (el.target.textContent == info[numberOfQuestion - 1])
        numberQuitionCoreect++;
      answers.forEach((e) => {
        if (e.classList.contains("active")) e.classList.remove("active");
      });
      el.target.classList.add("active");
    });
  });
}

answer();

let btn = document.getElementById("btn");
btn.addEventListener("click", submition);

function submition(el) {
  clearInterval(clearing);
  numberOfQuestion++;

  if (numberOfQuestion <= 10) {
    count.textContent = numberOfQuestion;
    craateQuitionAndAnswer();

    for (let i = 0; i < numberOfQuestion; i++) {
      document.querySelector(".foot ul").children[i].classList.add("finsh");
    }

    answer();
    secondes = 15;
    clearing = setInterval(() => {
      countDown(secondes);
      secondes--;
    }, 1000);
  }

  if (numberOfQuestion > 10) showAnwer();
}

function showAnwer() {
  main.remove();
  foot.remove();
  document.getElementsByClassName("submition")[0].remove();
  showAnwerInfo.style.display = "block";
  if (numberQuitionCoreect == count.textContent)
    showAnwerInfo.innerHTML = `<span style="color:green">Perfect</span>, all answer is correct`;
  else if (numberQuitionCoreect > numberOfQuestion / 2)
    showAnwerInfo.innerHTML = `<span style="color:#008988">Good</span>, ${numberQuitionCoreect} from 10`;
  if (numberQuitionCoreect < numberOfQuestion / 2)
    showAnwerInfo.innerHTML = `<span style="color:red">Bad</span>, ${numberQuitionCoreect} from 10`;
}
