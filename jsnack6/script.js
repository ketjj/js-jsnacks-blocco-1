/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

// TODO VER.1
// let powNumbers = [];

/*let insertedNumber = parseInt(prompt('Inserisci un numero'));

while(isNaN(insertedNumber)){
  alert('Inserisci solo un numero');
  insertedNumber = parseInt(prompt('Inserisci un numero'));
}

const poweredNum = Math.pow(insertedNumber, 3);

document.getElementById('result').innerHTML = poweredNum;*/

//TODO 

const numbersList = [];

let insertedNumber = parseInt(prompt('Inserisci un numero'));

while(isNaN(insertedNumber)){
  alert('Inserisci solo un numero');
  insertedNumber = parseInt(prompt('Inserisci un numero'));
}

for (let i = 1; i <= insertedNumber; i++) {
  pow = Math.pow(i, 3);
  numbersList.push(pow); 
}

document.getElementById('result').textContent = numbersList;


