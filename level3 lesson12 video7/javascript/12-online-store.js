const shoeItems = document.createElement("div");
const allBuyBtns = document.querySelectorAll(".btn-primary");

const updateTotalPrice = () => {
  const allProductsInBlackScreen = document.querySelectorAll(".item-container");

  let total = 0;

  allProductsInBlackScreen.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );
    total = total + price * quantity;
  });

  totalPrice.innerText = `    ${total}    $`;
};

blackScreen.addEventListener("change", (eo) => {
  updateTotalPrice();
});

blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    updateTotalPrice();

    const nameOfDeletedProduct =
      eo.target.parentElement.getElementsByClassName("product-name")[0]
        .innerText;

    const allCardsInGallary = document.querySelectorAll(".card");

    allCardsInGallary.forEach((item) => {
      const nameOfProductInGalary =
        item.getElementsByClassName("card-title")[0].innerText;

      if (nameOfDeletedProduct == nameOfProductInGalary) {
        const doneButton = item.getElementsByClassName("btn-success")[0];
        doneButton.removeAttribute("disabled");
        doneButton.classList.remove("btn-success");
        doneButton.classList.add("btn-primary");
        doneButton.innerText = "buy";
      }
    });
  }
});

allBuyBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    {
      // Change button from "buy" to "Done"

      item.setAttribute("disabled", "");
      item.classList.remove("btn-primary");
      item.classList.add("btn-success");
      item.innerHTML = "&#10004; Done";
    }

    {
      //  show mabrooook popup
      const popUp = document.createElement("div");
      body.append(popUp);
      popUp.classList.add("done-pop-up");
      popUp.innerHTML = "&#128525;      مبروووووووك";

      setTimeout(() => {
        popUp.style.transform = "translateX(-60vw)";
      }, 1500);

      setTimeout(() => {
        popUp.remove();
      }, 4000);
    }

    {
      //  create "عرض المُشتريات"  div

      body.append(shoeItems);
      shoeItems.classList.add("show-items");
      shoeItems.innerHTML = "   عرض المُشتريات    ";
    }

    const card = item.parentElement.parentElement.parentElement;
    const imgSrc = card
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");

    const itemName = card.getElementsByClassName("card-title")[0].innerText;
    const itemPrice = card.getElementsByClassName("price")[0].innerText;

    const addedProduct = `

        <div dir="rtl" class="item-container">

            <div class="img-title-parent">
                <img src="${imgSrc}" alt="">
                <p class="product-name">${itemName}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <input type="number" value="1" min="1"  class="input-quantity" dir="ltr" id="input-quantity" >
                <p >الكمية</p>
            </div>
            <div class="price">
                ${itemPrice}
            </div>
            <div class="btn btn-secondary">
                حذف
            </div>
        </div>

        `;

    allProducts.innerHTML += addedProduct;

    updateTotalPrice();
  });
});

const close = document.getElementById("close");
close.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-110vw)";
});

shoeItems.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});
