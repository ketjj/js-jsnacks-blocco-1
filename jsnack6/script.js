/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const n = parseInt(prompt('Inserisci un numero')); 
const limit = 9;

let result;
for(i = 1; i <= 9; i++){
  result = Math.pow(n, 3);
  console.log (result);
}

document.getElementById('result').innerHTML = result;