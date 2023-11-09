"use strict";

// Generazione numero random per il giocatore
const numRandomGiocatore = Math.floor(Math.random(1) * 7);
// stampa in console del numero
console.log("Il numero del giocatore è: ", numRandomGiocatore);

// Generazione numero random per il computer
const numRandomComputer = Math.floor(Math.random(1) * 7);
// stampa in console del numero
console.log("Il numero del computer è: ", numRandomComputer);

// Verifica del punteggio più alto
if (numRandomGiocatore > numRandomComputer) {
  // stampa in console
  console.log("Il vincitore è il giocatore");
} else if (numRandomComputer > numRandomGiocatore) {
  // stampa in console
  console.log("Il vincitore è il computer");
} else {
  // stampa in console
  console.log(
    "Nessun vincitore, entrambi i giocatori hanno lo stesso punteggio"
  );
}
