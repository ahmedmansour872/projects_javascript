const allcopybtns = document.querySelectorAll(".copy");

allcopybtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const copied = item.nextElementSibling.innerText;
    navigator.clipboard.writeText(copied);

    item.innerText = "copied!";

    setTimeout(() => {
      item.innerText = "copy";
    }, 1000);
  });
});
