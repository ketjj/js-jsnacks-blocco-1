/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/



  let sumTotal = 0;
  
  for(let i = 0; i < 4; i++){
    
    let insertNumber = prompt('Inserire un numero da 0 a 9');

    while (isNaN(insertNumber)){
      alert('Non ha inserito un numero da 0 a 9... riprova');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero');
    }

    while (insertNumber.length != 1){
      alert('Non ha inserito un numero da 0 a 9... riprova');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero');
    }

    insertNumber = parseInt(insertNumber);

    sumTotal = sumTotal + insertNumber;
    console.log(insertNumber);
  }
  
  document.getElementById('result1').innerHTML = sumTotal;
