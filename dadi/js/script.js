// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var pcnum = Math.floor(Math.random() * 6 + 1);
alert ("Il numero estratto per il pc è:" + pcnum);
var playernum = Math.floor(Math.random() * 6 + 1);
alert ("Il numero estratto per il giocatore è:" + playernum);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (pcnum > playernum) {
    alert ("Ha vinto il computer! Ricarica la pagina per tirare ancora i dadi.");
}

if (playernum > pcnum) {
    alert ("Ha vinto il giocatore! Ricarica la pagina per tirare ancora i dadi.");
}

if (playernum == pcnum) {
    alert ("Pareggio! Ricarica la pagina per tirare ancora i dadi.");
}