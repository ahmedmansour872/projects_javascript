
const arrimg = [

    `<img src="/img/1.png" class="img-slider">`,
    `<img src="/img/2.png" class="img-slider">`,
   ` <img src="/img/3.png" class="img-slider">`,
    `<img src="/img/4.png" class="img-slider">`,
   ` <img src="/img/5.png" class="img-slider">`,
 
]

let i = 0
slidercontainer.innerHTML += arrimg[i]
pre.setAttribute("disabled",  "disabled"  )
slidercontainer.innerHTML += `  <p>slide #${i+1} of ${arrimg.length}</p>  `




next.addEventListener("click", (eo) => {
  

    pre.removeAttribute("disabled"   )

    i++
    slidercontainer.innerHTML += arrimg[i]
    slidercontainer.innerHTML += `  <p>slide #${i+1} of ${arrimg.length}</p>  `
    

if (i+1   == arrimg.length) {
    next.setAttribute("disabled",  "disabled"  )
}

parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")

})



pre.addEventListener("click", (eo) => {
    next.removeAttribute("disabled"   )
    i--

    slidercontainer.innerHTML += arrimg[i]
    slidercontainer.innerHTML += `  <p>slide #${i+1} of ${arrimg.length}</p>  `

if (i == 0) {
    pre.setAttribute("disabled",  "disabled"  )
}  


parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")

})



const allButtons = document.querySelectorAll(".mynumber")
const parentNumbers = document.getElementsByClassName("numbers")[0]



allButtons.forEach(  (item, index) => {
    
    item.addEventListener("click", (eo) => {

        // remove the current "active-num" => add "active-num" to target element
       parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
        item.classList.add("active-num")




        slidercontainer.innerHTML += arrimg[index]
        slidercontainer.innerHTML += `  <p>slide #${index+1} of ${arrimg.length}</p>  `

i = index


    // last index
if (index == arrimg.length-1) {
    next.setAttribute("disabled",  "disabled"  )
    pre.removeAttribute("disabled"   )

     // first index
} else if (index == 0){
    next.removeAttribute("disabled"   )
    pre.setAttribute("disabled",  "disabled"  )
} else {
    next.removeAttribute("disabled"   )
    pre.removeAttribute("disabled"   )
}

    })
});

