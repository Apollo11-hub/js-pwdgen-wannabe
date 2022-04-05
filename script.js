/*
1 Chiedere Dati all'utente
2 Creare Password poco sicura

1 Chiedere Nome
  Chiedere Cognome
  Chiedere Colore Preferito
  Chiedere Data di nascita
  Sommare Risposte in un unica riga di testo

*/



const  askName = prompt("Ciao! Qual'è il tuo nome?");
const  askSurname = prompt ("Che nome di merda :C Vediamo il tuo cognome!?");
const askColor = prompt ("Di male in peggio...ma posso capirti,tranquillo! Ora tocca al tuo colore preferito... che sarebbe?");
const  askBirthday = prompt ("In che giorno ti hanno ca...Messo al mondo?");

const generatedPassword = askName + askSurname + askColor + askBirthday ;

const genText =

`
<p class="texto"> La tua password: ${generatedPassword}

`

alert("MI DISPIACE PER LA TUA SICUREZZA");

document.getElementById("password").innerHTML = genText;
