const form = document.querySelector("form")

form.addEventListener("submit", element => {
    element.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const output = parseInt(document.querySelector("#output").value)

    if (height === "" || height <= 0 || isNaN(height)) {
        output.innerHTML = "ENTER A VALID HEIGHT"
    }
})