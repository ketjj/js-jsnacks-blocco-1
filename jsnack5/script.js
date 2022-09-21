// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array
// */

const oddNumbers = [];

for(let i = 1; i <= 6; i++){
 let insertNumber = parseInt(prompt(`Inserisci ${i}* numero su 6`));

 while(isNaN(insertNumber)){
  alert('Inserisci solo i numeri');
  insertNumber = prompt(`Inserisci ${i}* numero su 6`);
 }

 if(insertNumber % 2 !== 0){
  oddNumbers.push(insertNumber);
 }
}

document.getElementById('result').textContent = oddNumbers;