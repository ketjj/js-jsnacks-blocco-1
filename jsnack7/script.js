/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

let listP = [];

for(let i = 0; i < 1000; i++){
  let p = Math.pow(i, 2);
  listP.push(p);
}
console.log(listP)


//document.getElementById('result').textContent = listP;