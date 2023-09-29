const boxes = document.querySelectorAll(".box")
const body = document.querySelector("body")

boxes.forEach(element => {
    element.addEventListener("click", select => {
        if (select.target.id === "box1") {
            body.style.background = "aliceblue"
        }
        if (select.target.id === "box2") {
            body.style.background = "azure"
        }
        if (select.target.id === "box3") {
            body.style.background = "antiquewhite"
        }
        if (select.target.id === "box4") {
            body.style.background = "blanchedalmond"
        }
        if (select.target.id === "box5") {
            body.style.background = "beige"
        }
        if (select.target.id === "box6") {
            body.style.background = "cornsilk"
        }
        if (select.target.id === "box7") {
            body.style.background = "bisque"
        }
        if (select.target.id === "box8") {
            body.style.background = "burlywood"
        }
        if (select.target.id === "box9") {
            body.style.background = "aquamarine"
        }
        if (select.target.id === "box10") {
            body.style.background = "chartreuse"
        }
        if (select.target.id === "box11") {
            body.style.background = "cornflowerblue"
        }
        if (select.target.id === "box12") {
            body.style.background = "violet"
        }
        if (select.target.id === "box13") {
            body.style.background = "aqua"
        }
        if (select.target.id === "box14") {
            body.style.background = "darkcyan"
        }
        if (select.target.id === "box15") {
            body.style.background = "darkblue"
        }
        if (select.target.id === "box16") {
            body.style.background = "magenta"
        }
    })
})
