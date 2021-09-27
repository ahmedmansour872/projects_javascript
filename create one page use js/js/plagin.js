let header = document.createElement("header");

document.body.style.margin = "0";
document.body.style.padding = "0";

header.className = "header";
header.style.height = "50px";
header.style.padding = "10px";
header.style.display = "flex";
header.style.justifyContent = "space-between";

let nav = document.createElement("nav");

nav.className = "logo";
nav.innerHTML = "Elzero";
nav.style.color = "green";
nav.style.fontSize = "25px";
nav.style.fontWeight = "600";
nav.style.color = "green";
nav.style.paddingTop = "10px";

header.prepend(nav);

let ul = document.createElement("ul");

ul.className = "menu";
ul.style.listStyle = "none";

let li = document.createElement("li");

li.className = "listStyle";
li.innerHTML = "Home";
li.style.display = "inline-block";
li.style.fontSize = "20px";
li.style.fontWeight = "600";
li.style.marginRight = "15px";
li.style.color = "rgb(119 130 130)";

let li2 = li.cloneNode(true);
li2.innerHTML = "About";
let li3 = li.cloneNode(true);
li3.innerHTML = "Services";
let li4 = li.cloneNode(true);
li4.innerHTML = "Contect";

ul.append(li);
ul.append(li2);
ul.append(li3);
ul.append(li4);

header.append(ul);

let content = document.createElement("div");

content.className = "content";
content.style.backgroundColor = "#EEE";
content.style.padding = "20px";
content.style.paddingBottom = "40px";

for (let i = 0; i < 12; i++) {
  let peoduct = document.createElement("div");

  peoduct.className = "product";
  peoduct.textContent = "Product";
  peoduct.style.backgroundColor = "#FFF";
  peoduct.style.width = "30%";
  peoduct.style.marginLeft = "1.5%";
  peoduct.style.marginRight = "1.5%";
  peoduct.style.textAlign = "center";
  peoduct.style.marginTop = "20px";
  peoduct.style.display = "inline-block";
  peoduct.style.padding = "20px 0";

  let span = document.createElement("span");

  span.className = "product";
  span.textContent = i + 1;
  span.style.textAlign = "center";
  span.style.fontSize = "30px";
  span.style.fontWeight = "600";
  span.style.display = "block";
  span.style.color = "red";

  peoduct.prepend(span);

  content.append(peoduct);
}

let footer = document.createElement("footer");

footer.className = "footer";
footer.textContent = "copyright 2021";
footer.style.backgroundColor = "green";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "30px 0";
footer.style.opacity = "0.5";
footer.style.fontSize = "20px";
footer.style.fontWeight = "600";

document.body.prepend(footer);

document.body.prepend(content);

document.body.prepend(header);
