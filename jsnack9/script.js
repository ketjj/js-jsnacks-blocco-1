/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

let numbers = [];
let c = 0;
let avrg = 0;
let totSum=0

while(c<10){
  //numbers.push;
  let randomNum = (Math.floor(Math.random() * 10) + 1);
  numbers.push(randomNum);
  //dublicate
  
  /*while(!numbers.includes(randomNum)){
    numbers.push(randomNum);
  }*/
  totSum += randomNum;
  c++;
}
avrg = totSum / c;
console.log(numbers);
console.log(totSum);

document.querySelector('.insert').textContent += numbers;
document.getElementById('result1').textContent += totSum;
document.getElementById('result2').textContent += avrg;