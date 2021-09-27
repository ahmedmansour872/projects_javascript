//  toggle the light & dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}



//  when hover on  HEADER => change-color
{changecolor.addEventListener("mousemove", (eo) => {
  hiddenul.style.display = "block";
});



changecolor.addEventListener("mouseout", (eo) => {
  hiddenul.style.display = "none";
});}



// change HEADER background color when click on "header BG"
headerbg.addEventListener("click", (eo) => {
  const random = Math.round( Math.random() * 360 )
 

  header.style.backgroundColor = `hsl(${random}, 44%, 55%)`


  const websiteTitle = document.querySelector("#header > h1")
  websiteTitle.style.backgroundColor = `hsl(${random}, 44%, 55%)`

  dark.style.backgroundColor = `hsl(${Math.round( Math.random() * 100 )}, 44%, 55%)`
})

 






// change TITLE background color when click on "Title BG"
titlebg.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")
  const random = Math.round( Math.random() * 360 )
  allTitle.forEach(item => {


    item.style.backgroundColor = `hsl(${random}, 44%, 55%)`


  });


})
 





// change TITLE color when click on "Title color"
const changeColor = () => {
  return Math.round( Math.random() * 360 )
}

titlecolor.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")

  allTitle.forEach(item => {
    item.style.color = `hsl(${changeColor()}, 44%, 55%)`
  });
})











 






 









