const form = document.querySelector("form")

form.addEventListener("submit", event => {
    event.preventDefault()

    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (height === "" || height <= 0 || isNaN(height) || weight === "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "ENTER A VALID HEIGHT & WEIGHT";
    } else {
        let BMI = (weight / (height * height));
        result.innerHTML = BMI
    }
});