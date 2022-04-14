/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

let totNumbers = 10;
totNumbers = Math.ceil(Math.random() * 10) +1;
console.log(totNumbers);

let totSm = 0;
let media = 0;

for(let i = 1; i <= totNumbers; i++){
  console.log('Numeri: 1 a 10', i);
  totSm += i
  console.log('Numeri sommati', totSm);
}

media = totSm / totNumbers;
console.log('Numeri divisi', media);

document.getElementById('result').innerHTML = 
`
La somma dei primi 10 numeri random &egrave; ${totSm}, mentre la media &egrave; ${media}.
`;
