"use strict";

// richiedere mail tramite promt e salvare in una variabile
const mailUtente = prompt("Inserisci la tua mail");

// dichiariamo / assegniamo array di mail
const listaMail = [
  "mario.ascione@gmail.com",
  "davide.rossi@gmail.com",
  "luca.incerti@gmail.com",
  "simona.morandi@gmail.com",
];

// messaggio predefinito
let messaggio = "- Non puoi accedere";

// ciclo per scorrere le mail
for (let i = 0; i < listaMail.length; i++) {
  // condizione per controllare le mail
  if (listaMail[i] === mailUtente) {
    messaggio = "- Puoi accedere";
    break;
  }
}
// stampa in console
console.log(mailUtente, messaggio);
