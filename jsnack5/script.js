// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array
// */

let contatore = [];

for(let i = 0; i < 6; i++){
  const userNumber = parseInt(prompt('Inserire un numero'))
  if(isNaN(userNumber)){
    alert('Inserire un numero');
  }

  if(userNumber % 2){
    contatore.push(userNumber);
  }
}

document.getElementById('result').innerHTML = contatore;
console.log(contatore);
