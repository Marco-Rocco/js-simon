//collegare il countdown
let showCountDown = document.getElementById('countdown');

let count = 10;
let countDown = setInterval(function(){
  console.log(count);
  showCountDown.innerText = (count);
  count -- 
  
  if (count === -1){
    showCountDown.innerText = ('prova ad indovinare!!');
    console.log('Prova ad indovinare!!');
    
    clearInterval(countDown);
  }
  
}, 1 * 1000);


showCountDown.innerText = (count);

//collegare la lista di numeri casuali
let numbersList = document.getElementById('numbers-list');

let randomNumber = function() {
    return Math.floor(Math.random() * 99);
}

numbersList.innerHTML = `
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>
<li>${randomNumber()}</li>`




// let count = 10
// let countDown = setInterval(function(){
//   console.log(count);
//   count -- ;
  
//   if (count == 0){
//     console.log('Prova ad indovinare!!');
//     clearInterval(countDown);
//   }
  
// }, 1 * 1000)


















