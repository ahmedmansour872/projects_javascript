const ticket = document.getElementById("ticket");
const { x, y, width, height } = ticket.getBoundingClientRect();

console.log(ticket);

window.addEventListener("mousemove", function (el) {
  const centerPoint = { x: x + width / 2, y: y + height / 2 };
  const degreeX = (el.clientX - centerPoint.x) * 0.07;
  const degreeY = (el.clientY - centerPoint.y) * 0.07;

  ticket.style.transform = `rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
});
