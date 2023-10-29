const body = document.querySelector("body")
const boxes = document.querySelectorAll(".box")

boxes.forEach(element => {
    element.addEventListener("click", select => {
        body.style.background = window.getComputedStyle(select.target).getPropertyValue("background-color");
    })
})