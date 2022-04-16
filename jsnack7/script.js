/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

let listP = [];
let numberP = 2;
let startNumber = 2;

while(startNumber < 1000) {
  listP.push(startNumber);
  startNumber = startNumber * numberP;
  console.log(startNumber);
}

document.getElementById('result').innerHTML = "La potenza di 2 sono: " + listP;