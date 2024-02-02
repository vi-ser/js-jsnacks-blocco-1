/*
Snack 2:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// inizializzo la variabile somma
let sum = 0;

// salvo l'elemento di output del DOM
const outputSumElement = document.querySelector("#output-sum");

for (let i = 0; i < 10; i++) {

    // chiedo all'utente di inserire un numero
    const number = Number(prompt("Inserisci un numero"));

    // aggiungo il numero inserito alla somma
    sum += number;

}

// stampo la somma nel DOM
outputSumElement.innerHTML = sum;


