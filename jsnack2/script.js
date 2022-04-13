/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt('Inserisci un colore');
const secondaParola = prompt('Inserisci una città');


console.log(primaParola);
console.log(secondaParola);

if(primaParola.length > secondaParola.length) {
  // console.log(secondaParola);
  document.getElementById('result').innerHTML = secondaParola + " " +primaParola;

  
} else if (secondaParola.length > primaParola.length) {
  // console.log(primaParola);
  document.getElementById('result').innerHTML = primaParola + " " + secondaParola;
 
}
