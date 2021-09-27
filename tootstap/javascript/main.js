let copy = document.querySelectorAll(".allcodes .copy");

copy.forEach((e) => {
  e.addEventListener("click", function (el) {
    let coped = e.nextElementSibling.innerHTML;
    navigator.clipboard.writeText(coped);

    e.textContent = "coped!";
    setTimeout(() => {
      e.textContent = "copy";
    }, 1000);
  });
});
