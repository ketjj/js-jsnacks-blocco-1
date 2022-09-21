/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/



 const insertedNum = prompt('Inserisci un numero di 4 cifre');

  while(insertedNum.length !== 4){
    alert('Inserisci un numero con solo 4 cifre');
    insertedNum = prompt('Inserisci un numero di 4 cifre');
  }
  //console.log(insertedNum);

  const slicedNum = Array.from(String(insertedNum), Number);
  document.querySelector('.insert').textContent += slicedNum;
  //console.log(slicedNum);
  
  let total = 0;
  for(let i = 0; i < slicedNum.length; i++){
   total += slicedNum[i];
  }
  
  document.getElementById('result').innerHTML += total;
  //console.log(total);