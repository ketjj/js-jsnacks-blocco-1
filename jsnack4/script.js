// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// */


const guestList = ['Ketevan','Silvia','Giada','Simone','Salvatore','Marco','Georgia','Nicolò'];


const guestName = prompt('Inserisci il tuo nome');

const res = document.getElementById('result');

guestList.includes(guestName.trim()) ? res.textContent = `${guestName}, ci sei nella lista! 😊` : res.textContent = 'Mi dispiace, non ci sei nella lista 😥';


