/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let firstNumber = prompt('Inserisci il primo numero');

console.log(firstNumber);
// console.log(secondNumber);

  while (isNaN(firstNumber)) {
    alert('Non hai inserito un numero');
    firstNumber = prompt('Inserisci il primo numero');
  }
  firstNumber = parseInt(firstNumber);
  
  let secondNumber = prompt('Inserisci il secondo numero');
  
  while (isNaN(secondNumber)) {
  alert('Non hai inserito un numero');
  secondNumber = prompt('Inserisci il secondo numero');
}

secondNumber = parseInt(secondNumber);

if(firstNumber > secondNumber){
 document.getElementById('result').innerHTML = firstNumber;
 } else {
 document.getElementById('result').innerHTML = secondNumber;
}