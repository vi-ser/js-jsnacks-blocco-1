/*
Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/


// salvo l'elemento di output del DOM
const outputSumElement = document.querySelector("#output-sum");

// inizializzo la variabile somma
let sum = 0;

// chiedo all'utente di inserire un numero di 4 cifre
const number = Number(prompt("Inserisci un numero intero di 4 cifre"));

// calcolo le singole cifre dividendole per migliaia, centinaia e decine
let firstDigit = Math.floor(number / 1000);
console.log(firstDigit);


