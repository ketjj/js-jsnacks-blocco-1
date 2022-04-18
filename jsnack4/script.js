// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// */


const guestList = ['Ketevan','Silvia','Chiara','Simone','Salvatore','Marco','Georgia','Nicolò'];
console.log(guestList);

let guestName;
let invitation = false;

  guestName = prompt('Inserisci il nome');

  for(let i = 0; i < guestList.length; i++){
    if(guestName === guestList[i]){
      invitation = true;
    }
  }

  if(invitation === false){
    alert('Ci spiace, non è nella lista degli invitati');
  } else {
    document.getElementById('result').innerHTML = `Congratulazioni, può procedere!`;
  }


