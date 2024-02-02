/*
Snack 6:
Calcola la somma e la media dei primi 10 numeri.
*/

// salvo l'elemento di output del DOM
const outputSumElement = document.querySelector("#output-sum");
const outputAverageElement = document.querySelector("#output-average");

// inizializzo le variabili somma e media
let sum = 0;
let average;

// calcolo la somma dei numeri da 1 a 10
for (let i = 1; i <= 10; i++) {
    sum += i;
}

// calcolo la media dei 10 numeri
average = sum / 10;

// stampa somma e media
outputSumElement.innerHTML = `${sum}`;
outputAverageElement.innerHTML = `${average}`;

