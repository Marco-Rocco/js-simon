//collegare il countdown
let showCountDown = document.getElementById('countdown');

//collegare la lista di numeri casuali
let numbersList = document.getElementById('numbers-list');

//collegare il form
let answersForm = document.getElementById('answers-form')

//crea funzione
let count = 1;
let countDown = setInterval(function(){
  console.log(count);
  showCountDown.innerText = (count);
  count -- 
  
  if (count === -1){
    showCountDown.innerText = ('prova ad indovinare!!');
    console.log('Prova ad indovinare!!');

    numbersList.className = 'd-none';
    answersForm.className = 'd-block';
    
    clearInterval(countDown);
  }
  
}, 1 * 1000);


showCountDown.innerText = (count);



let randomNumber = function() {
    return Math.floor(Math.random() * 50);
}

let randomNumber1 = randomNumber()
let randomNumber2 = randomNumber()
let randomNumber3 = randomNumber()
let randomNumber4 = randomNumber()
let randomNumber5 = randomNumber()

numbersList.innerHTML = `
<li>${randomNumber1}</li>
<li>${randomNumber2}</li>
<li>${randomNumber3}</li>
<li>${randomNumber4}</li>
<li>${randomNumber5}</li>`

let arr = [
 `${randomNumber1}`,
 `${randomNumber2}`,
 `${randomNumber3}`,
 `${randomNumber4}`,
 `${randomNumber5}`,
  ]

console.log(arr)


///////////////////////////
// collego il bottone

let submitButton = document.querySelector('button')
let message = document.getElementById('message')
console.log(message)

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let solved = 0
    let userGuess = document.getElementsByTagName('input')
    for (let i = 0; i < arr.length; i++) {
      let userGuessValue = userGuess[i].value;

      if (arr.includes(userGuessValue)){
        solved++
      }
    }

    if(solved === 5) {
      message.innerText = 'hai indovinato!!'
    } else{
      message.innerText = 'hai perso'
    }
})
















// //create an array
// let email = [
//   "mongi@mail.com",
//   "marco@mail.com",
//   "luca@mail.com",
//   "pasquale@mail.com",
//   "danilo@mail.com",
//   "alessandra@mail.com",
// ];

// console.log(email);
// //crate a prompt for user to insert an email address
// let itemToFind = prompt ("inserisci un indirizzo email");

// console.log("indirizzo email inserito dall'utente:" + ' ' + itemToFind);

// //create a variable that allows me to keep track of the status
// let found = false;

// //create a for cicle to verify if the inserted email is present inside the array
// for (i = 0; i < email.length; i++) {
//   if (email[i] === itemToFind) {
//       found = true;
//       break;
//   }
// }

// //print the result
// if (found){
//   alert ("la mail è presente nell'array")
// } else {
//   alert ("la tua mail non è presente nell'array" )
// }














//colleghiamo le parti di html a js con "getElemntById"

//age input
// const age = document.getElementById('age-input');
// console.log(age);
// console.log(age.value);

// //km input
// const km = document.getElementById('km-input');
// console.log(km);
// console.log(km.value);

// //submit button
// const infoSub = document.getElementById('submit');
// console.log(infoSub);

// //ho creato un div vuoto per ospitare un messaggio in pagina per l'utente
// const totalDisplay = document.getElementById('total-display')

// //creo una funzione per inviare i dati inseriti dall'utente dopo aver cliccato submit
// infoSub.addEventListener('click', function(event){
//     event.preventDefault();

//     //questa condizione non permette allo user di inviare dati non validi
//     if (isNaN(age.value) || isNaN(km.value) || age.value < 1 || age.value > 120) {
//     alert("uno dei dati non è valido, refresha la pagina e inserisci dei dati validi");
//     } else {

//     //stampo "cick" in concole per verificare il funzionamento del mio tasto submit
//     console.log('click');
    
//     // stampo in console il valore inserito dall'utente nell'input
//     console.log('età del viaggiatore= ' + age.value);
//     console.log('kilometri da percorrere= ' + km.value);

//     // assegno un valore per kilometro
//     let tripProvValue = (km.value * 0.21 );
//     console.log('il valore provvisorio del viaggio è: ' + '€' + tripProvValue.toFixed(2));

//     //creo delle variabili vuote, così da riempirle dopo in base alla condizione presentata
//     let tripTotalValue = ''
//     let tripDiscount = ''
//     let messageToUser = ''

//     if (age.value < 18) {
//             tripTotalValue = (((tripProvValue * 80 ) /100 ).toFixed(2));
//             console.log(`il valore finale del viaggio è €${tripTotalValue}`);

//             tripDiscount = (((tripProvValue * 20 ) /100 ).toFixed(2));
//             console.log(`il valore risparmiato è €${tripDiscount}`);

//             messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}, hai risparmiato € ${tripDiscount}`)

//         }
//          else if (age.value > 65) {
//             tripTotalValue = (((tripProvValue * 60 ) /100 ).toFixed(2));
//             console.log(`il valore finale del viaggio è €${tripTotalValue}`);

//             tripDiscount = (((tripProvValue * 40 ) /100 ).toFixed(2));
//             console.log(`il valore risparmiato è €${tripDiscount}`);
//             messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}, hai risparmiato € ${tripDiscount}`)
//         }
//         else {
//             tripTotalValue = tripProvValue;
//             console.log(`il valore finale del viaggio è ${tripTotalValue}`);

//             messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}`)


//         }

//     //inserisco il contenuto di "messageToUser" nel div che ho creato precedentemente
//     totalDisplay.innerHTML= messageToUser};
// });











