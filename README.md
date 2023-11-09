# Mail - Dadi

## Descrizione - Esercizio uno

L'obbiettivo del primo esercizio è creare un programm che, inserita la mail dell'utente, controlli se il dato è presente nella lista. Inoltre il programma deve restituire un messaggio appropriato in base al controllo.

### Risoluzione in linguaggio naturale

1. Richiedere la mail dell'utente tramite prompt e salvare il dato in una variabile
2. Creare un array di mail
3. Attraverso un ciclo for, scorrere le liste di mail e confrontare con quella inserita dall'utente
4. Creare una condizione per il quale venga stampato un messaggio appropriato in base al risultato

## Descrizione - Esercizio due

L'obbiettivo del secondo esercizio è creare un programma che generi un numero random da 1 a 6 per 2 utenti (giocatore, computer), il vincitore è stabilito in base al punteggio più alto.

### Risouzione in linguaggio naturale

1. Generare il numero random da 1 a 6 (Math.random) per il **giocatore** e salvare il dato in una variabile
2. Generare il numero random da 1 a 6 (Math.random) per il **computer** e salvare il dato in una variabile
3. Attraverso una condizione stabilire chi è il vincitore

```js
if (numeroGiocatore > numeroComputer) {
  console.log("Il vincitore è il giocatore");
} else if (numeroComputer > numeroGiocatore) {
  console.log("Il vincitore è il computer");
} else {
  console.log(
    "Nussun vincitore, entrambi i giocatori hanno lo stesso punteggio"
  );
}
```
