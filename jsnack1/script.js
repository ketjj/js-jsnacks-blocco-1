/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const firstNumber = parseInt(prompt('Inserisci il primo numero'));
const secondNumber = parseInt(prompt('Inserisci il secondo numero'));

console.log(firstNumber);
console.log(secondNumber);

if(firstNumber > secondNumber){
  document.getElementById('result').innerHTML = firstNumber;
} else {
  document.getElementById('result').innerHTML = secondNumber;
}
