let buttons = document.querySelectorAll('button')
let result = document.getElementById('result') 
let calculator = document.getElementById('calculator')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (buttons[i].textContent != "AC" && buttons[i].textContent != "+/-" && buttons[i].textContent != "%" && buttons[i].textContent != "=" &&
            buttons[i].textContent != '_') {
            result.value += buttons[i].textContent
        } else if (buttons[i].textContent == "AC") {
            result.value = "";
        } else if (buttons[i].textContent == "+/-") {
            result.value = "-" + result.value
        } else if (buttons[i].textContent == "%") {
            result.value /= 100;
        } else if (buttons[i].textContent == "=") {
            result.value = eval(result.value)
        } else if (buttons[i].textContent == "_") {
            calculator.style.display = "none"
            convert.style.display = 'block'
         }

        })
    }
