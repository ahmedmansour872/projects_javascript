let upload = document.querySelector(".fa-upload");
let container = document.getElementById("container");

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash-alt"))
    e.target.parentElement.parentElement.remove();
  else if (e.target.classList.contains("fa-frown")) {
    e.target.classList.toggle("fa-frown");
    e.target.classList.toggle("fa-heart");
    e.target.parentElement.previousElementSibling.classList.add("love");
  } else if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("fa-frown");
    e.target.classList.toggle("fa-heart");
    e.target.parentElement.previousElementSibling.classList.remove("love");
  } else if (e.target.classList.contains("fa-star")) {
    if (e.target.classList.contains("active"))
      e.target.classList.toggle("active");
    else {
      e.target.classList.toggle("active");
      let taskStrctur = e.target.parentElement.cloneNode(true);
      e.target.parentElement.remove();
      container.prepend(taskStrctur);
    }
  }
});

upload.addEventListener("click", function (e) {
  let text = document.forms[0][0].value;

  let task = document.createElement("div");

  task.className = "task";

  let iconStar = document.createElement("i");
  iconStar.className = "fas fa-star";

  let pragrapg = document.createElement("p");

  pragrapg.textContent = text;

  let iconStrcture = document.createElement("div");
  iconStrcture.className = "icon";

  let iconDel = document.createElement("i");
  iconDel.className = "fas fa-trash-alt";

  let frown = document.createElement("i");
  frown.className = "fas fa-frown";

  iconStrcture.prepend(iconDel);
  iconStrcture.append(frown);

  task.prepend(iconStrcture);
  task.prepend(pragrapg);
  task.prepend(iconStar);

  container.append(task);
});
