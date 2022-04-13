// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)
// */


//For
const forCircle = document.getElementById('result1');

forCircle.addEventListener('click' , function(){
  let sumTotal= 0;
  
  for(let i = 0; i < 5; i++){
    
    let insertNumber= parseInt(prompt('Inserire numero'));

    if (isNaN(insertNumber)){
      alert('Inserisci il numero');
    }
    sumTotal = parseInt(sumTotal + insertNumber);
    console.log(insertNumber);
  }
  
  document.getElementById('result1').innerHTML = sumTotal;
})


// While
const forWhile = document.getElementById('result2');

forWhile.addEventListener('click' , function(){

  let sumTotal = 0;
  let contatore = 0;
  
  while(contatore < 5){ 
    contatore++;

    let insertNumber = parseInt(prompt('Inserire numero'));

    if (isNaN(insertNumber)){
      alert('Inserisci il numero');
    }

    sumTotal = parseInt(sumTotal + insertNumber);
    console.log(insertNumber);
  }
  
  document.getElementById('result2').innerHTML = sumTotal;
})