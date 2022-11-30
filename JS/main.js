var elForm = document.querySelector(".form")
var elSelect = document.querySelector(".select")
var dollar = 11203.13;
var euro = 11732.37;
var rub = 184.75;
var h1 = document.querySelector("h1")
var elinput = document.querySelector(".input")

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(elSelect.value);
    if (elSelect.value == "euro") {
        h1.textContent = (elinput.value / euro).toFixed(3)
    } else if (elSelect.value == "usd") {
        h1.textContent = (elinput.value / dollar).toFixed(3)
    } else if (elSelect.value == "rub") {
        h1.textContent = (elinput.value / rub).toFixed(3)
    } else if (isNaN(elinput)) {
        h1.textContent = "Son kiriting"
    } else if (elinput < 0) {
        h1.textContent = "Minus son kiritish munkun emas"
    }
});