/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let n = prompt('Inserisci un numero'); 
const limit = 1;
let result;

while (isNaN(n)){
  alert('Non ha inserito un numero... riprova');
  n = prompt('Inserire numero');
}

for(i = 1; i <= limit; i++){
  result = Math.pow(n, 3);
  console.log (result);
}

document.getElementById('result').innerHTML = result;