//collegare il countdown
let countDown = document.getElementById('countdown')
countDown.innerText = ('devasto seee')

//collegare la lista di numeri casuali
let numbersList = document.getElementById('numbers-list')

let randomNumber = function() {
    return Math.floor(Math.random() * 99);
}

numbersList.innerHTML = `
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>`





















