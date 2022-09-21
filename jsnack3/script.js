// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)
// */

// 1.VERSION FOR TODO

//let insertedNumbers =[];
/*let totNums = 0;

for(let i = 1; i<6; i++){
  let insert= parseInt(prompt(`Inserisci ${i}* numero su 5`));

  while(isNaN(insert)){
    alert('Inserisci solo i numeri');
    insert = prompt(`Inserisci ${i}* numero su 5`);
  }
  totNums += insert;
  // insertedNumbers.push(insert);
}
document.getElementById('result1').textContent += totNums;*/


// 2. VERSION WHILE TODO

let c = 1;
let totWhileNums = 0;

while(c < 6){
  let insertNum = parseInt(prompt(`Inserisci ${c}* numero su 5`));

  while(isNaN(insertNum)){
    alert('Inserisci solo i numeri');
    insertNum = prompt(`Inserisci ${c}* numero su 5`);
  }
  totWhileNums += insertNum;
  c++;
}
// console.log(totWhileNums);
document.getElementById('result2').textContent += totWhileNums;