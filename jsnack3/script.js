// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)
// */


//For
const forLoop = document.getElementById('result1');

forLoop.addEventListener('click' , function(){
  let sumTotal = 0;
  
  for(let i = 0; i < 5; i++){
    
    let insertNumber = prompt('Inserire ' + (i+1) + '° numero');

    while (isNaN(insertNumber)){
      alert('Non ha inserito un numero... riprova');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero');
    }

    insertNumber = parseInt(insertNumber);

    sumTotal = sumTotal + insertNumber;
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
    
    let insertNumber = prompt('Inserire ' + (contatore + 1) + ' numero');
    
    while(isNaN(insertNumber)){
      alert('Non ha inserito un numero... riprova');
      insertNumber = prompt ( 'Inserire ' + (contatore + 1) + ' numero')
    }
    insertNumber = parsint(insertNumber);
    
    sumTotal = sumTotal + insertNumber;
    contatore++;
  }
  
  document.getElementById('result2').innerHTML = sumTotal;
})