

const alltabs = document.querySelectorAll(".mybtn")
const parentOfButtons = document.querySelector(".alltabs")
const parentOfArticles = document.querySelector(".parent-of-article")

alltabs.forEach(   (item, index) => {
    
    item.addEventListener("click", (eo) => {
       

          // toggle between buttons
        parentOfButtons.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
        eo.target.classList.add("active-btn")


        // toggle between articles
        parentOfArticles.getElementsByClassName("active-article")[0].classList.remove("active-article")
        parentOfArticles.getElementsByClassName("fun-facts")[index].classList.add("active-article")
    })
});




 

