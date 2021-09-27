const allPlus = document.querySelectorAll(".plus");

allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];

    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      content.style.height = `   ${content.scrollHeight}px   `;
    } else {
      content.style.height = ` 0  `;
    }

    //  + & -
    item.classList.toggle("hide-plus");
    if (item.classList.contains("hide-plus")) {
      item.innerText = "ــ";
      item.style.transform = "translateY(-11px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0)";
    }

    //
  });
});
