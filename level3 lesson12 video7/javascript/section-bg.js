// change SECTION-BG when click on "section Bg"
// using array & i++
// level 3 lesson2 video #4
// const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
// let i = 0;

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");

//   allSections.forEach((item) => {
//     console.log(i);
//     item.style.backgroundColor = arrColors[i];

//   });

//   i < arrColors.length - 1 ? i++ : i = 0;
// });

// change SECTION-BG when click on "section Bg"
// using array & Math.random()
// level3 lesson2 video #5
// const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");
//   const random = Math.floor(  Math.random() * arrColors.length    );

//   allSections.forEach((item) => {
//     item.style.backgroundColor = arrColors[random];
//   });

//   console.log(random)

// });

// change SECTION-BG when click on "section Bg"
// using rgb & Math.random() & return function
// level3 lesson2 video #6

// const random255 = () => {
//   return Math.round(Math.random() * 255);
// };

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");

//   const rgb1 = random255();
//   const rgb2 = random255();
//   const rgb3 = random255();

//   allSections.forEach((item) => {
//     item.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//   });
// });

// change SECTION-BG when click on "section Bg"
// using  hex
// level3 lesson2 video #7

// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");
//   const hex = randomhex();

//     allSections.forEach((item) => {
//     item.style.backgroundColor = hex;

//   });
// });

// change SECTION-BG when click on "section Bg"
// using  hex & NOT using forEach method
// level3 lesson2 video #8

// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");
//   const hex = randomhex();

// for (let i = 0; i < allSections.length; i++) {

//   const item = allSections[i];
//   item.style.backgroundColor = hex;
// }

// });


















// change SECTION-BG when click on "section Bg"
// using  hex & NOT using forEach method or for loop
// level3 lesson2 video #9

const randomhex = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

sectionbg.addEventListener("click", (eo) => {
  const allSections = document.querySelectorAll("section");
  const hex = randomhex();










  // for (const i in allSections) {
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  // }









  // for (const i of allSections) {
  //   const item = i;
  //   item.style.backgroundColor = hex;
  // }













  // let i = 0;
  // while (i < allSections.length) {
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  //   i++;
  // }










  // let i = 0;

  // do {
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  //   i++;
  // } while (i < allSections.length);








  // let i = 0;
  // for (;;) {
  //   2 < 2;
  //   if (i < allSections.length) {
  //     const item = allSections[i];
  //     item.style.backgroundColor = hex;
  //     i++;
  //   } else {
  //     break;
  //   }
  // }

 
});
