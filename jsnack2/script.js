/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt('Inserisci la prima parola');
const seconsWord = prompt('Inserisci la seconda parola');

const res = document.getElementById('result');

if(firstWord.length > seconsWord.length || firstWord.length == seconsWord.length){
  res.innerHTML = firstWord +' '+ seconsWord;
} else{
  res.innerHTML = seconsWord +' '+ firstWord;
}