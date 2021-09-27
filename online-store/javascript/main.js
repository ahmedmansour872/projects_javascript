let card = document.querySelectorAll(".card .btn");
let blackScreen = document.getElementById("blackScreen");
let close = document.getElementById("close");
let allProducts = document.getElementById("allProducts");
let sum = 0;
let totalPrice = document.getElementById("totalPrice");

card.forEach((e) => {
  e.addEventListener("click", function (el) {
    el.target.setAttribute("disabled", "true");
    el.target.textContent = "done";
    el.target.style.opacity = ".5";
    el.target.style.cursor = "not-allowed";

    // create element becuse show to product clicked

    showPopUp();

    // create element to show product

    let x = showProducts();

    calc(el);

    totalPrice.textContent = sum + "$";

    //display blackScreen in window
    x.addEventListener("click", function () {
      blackScreen.style.transform = "translateX(0)";
    });
  });
});

// show product in the blackScreen to pay and create elements

function calc(ele) {
  let srcImage =
    ele.target.parentElement.parentElement.previousElementSibling.getAttribute(
      "src"
    );

  let Sal = ele.target.nextElementSibling.textContent;
  sum += Number(Sal.slice(1));

  let title =
    ele.target.parentElement.parentElement.firstElementChild.textContent;

  let item = document.createElement("div");
  item.className = "item-container";

  allProducts.append(item);

  let img_title = document.createElement("div");
  img_title.className = "img-title-parent";

  item.prepend(img_title);

  let img = document.createElement("img");
  img.src = srcImage;
  img_title.prepend(img);

  let product_name = document.createElement("p");
  product_name.textContent = title;
  img_title.append(product_name);

  let productSalary = document.createElement("div");
  productSalary.className = "salary";
  item.append(productSalary);

  let cuantity = document.createElement("input");
  cuantity.setAttribute("type", "number");
  cuantity.setAttribute("value", "1");
  cuantity.setAttribute("min", "1");
  cuantity.setAttribute("class", "input-quantity");
  let prevSum = 0;

  calcSalaryOnInput(cuantity);

  productSalary.prepend(cuantity);

  let quan = document.createElement("p");
  quan.textContent = "الكمية";
  productSalary.append(quan);

  let price = document.createElement("div");
  price.className = "price";
  price.textContent = Sal;
  item.append(price);

  let butt = document.createElement("div");
  butt.className = "btn";
  butt.textContent = "حذف";
  item.append(butt);

  removeProduct(butt, cuantity, ele);
}

// remove blackScreen
close.addEventListener("click", function (el) {
  blackScreen.style.transform = "translateX(100%)";
});

// remove product
function removeProduct(butt, cuantity, ele) {
  butt.addEventListener("click", function () {
    this.parentElement.remove();
    ele.target.removeAttribute("disabled");
    ele.target.textContent = "buy";
    ele.target.style.opacity = "1";
    ele.target.style.cursor = "pointer";

    sum -=
      Number(cuantity.value) * this.previousElementSibling.textContent.slice(1);
    totalPrice.textContent = sum + "$";
  });
}

// create element becuse show to product clicked
function showPopUp() {
  let popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = "congratulation &#128525;";

  document.body.append(popup);
  setTimeout(() => {
    popup.style.transform = "translateX(-100vw)";
  }, 1000);

  setTimeout(() => {
    popup.remove();
  }, 2000);
}

// create element to show product
function showProducts() {
  let show = document.createElement("div");
  show.className = "show-items";
  show.innerHTML = "Show Products";

  document.body.append(show);
  return show;
}

// amount of salary for products
function calcSalaryOnInput(elements) {
  elements.onfocus = function () {
    prevSum =
      Number(this.value) *
      Number(this.parentElement.nextElementSibling.textContent.slice(1));
  };

  elements.onblur = function () {
    let salaryItem =
      Number(this.value) *
      Number(this.parentElement.nextElementSibling.textContent.slice(1));
    sum += salaryItem;
    sum -= prevSum;
    totalPrice.textContent = sum + "$";
  };
}
