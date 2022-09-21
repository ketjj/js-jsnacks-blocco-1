/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let firstNum = parseInt(prompt('Inserisci 1* numero su 2'));
let secondNum = parseInt(prompt('Inserisci 2* numero su 2'));

const res = document.getElementById('result');

//ak vamowmeb, rom momxmarebelma text-i ar sheiyvanos ricxvebis magivrad. parseInt-ricxv strings gadaakcevs number-ad da textis shemtxvevashi mogcems 'Sono uguali' - else conditions
while(isNaN(firstNum)){
  alert('Inserisci colo i numeri');
  firstNum = parseInt(prompt('Inserisci 1* numero su 2'));
}

while(isNaN(secondNum)){
  alert('Inserisci colo i numeri');
  secondNum = parseInt(prompt('Inserisci 2* numero su 2'));
}

if(firstNum > secondNum){
  res.textContent = `${firstNum} è maggiore di ${secondNum}`
} else if(secondNum > firstNum){
  res.textContent = `${secondNum} è maggiore di ${firstNum}`
} else {
  res.textContent = 'Sono uguali'
}