
const randomHearts = () => {
  const parentHeart = document.createElement("div");
  containerheart.append(parentHeart);

  const createRandomHeart = setInterval(() => {
    // const heart = ` <div class="heart">&#129505;</div>`;
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#129505;";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;

    // ( 0  +0.5)         => 0.5            *1.5   => 0.75
    //  (0.9999999 +0.5)  => 1.4999999999   *1.5  => 2.25

    const heart2 = document.createElement("div");
    heart2.classList.add("heart");
    heart2.innerHTML = " &#128156;";
    heart2.style.left = `${Math.random() * 100}%`;
    heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;

    parentHeart.append(heart);
    parentHeart.append(heart2);
  }, 50);

  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 2000);

  setTimeout(() => {
    parentHeart.remove();
  }, 5000);
}





randomhearts.addEventListener("click", (eo) => {
  randomHearts()
});
