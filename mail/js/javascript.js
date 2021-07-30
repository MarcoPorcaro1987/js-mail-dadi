// 1) Crea un archivio email
var archivio = ["porcaromarco@live.it", "pinco@pallo.it", "pallo@pinco.com", "pingu@pongo.org"];
// 2) Chiedi l'email dell'utente
var email = prompt("inserisci la tua email");
// 3) Verifica la presenza della mail nell'archivio
var check=false;
for (var i = 0; i < archivio.length; i++) {
    if (email == archivio[i]){
        check=true;
        alert("Accesso completato");
    } 
}
// 4. Comunico accesso fallito
if (check==false) {
        alert ("Non esistono account collegati a questa email. Ricarica la pagina e inserisci un'email corretta");
    } 


