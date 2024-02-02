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
let numberPrompt = Number(prompt("Inserisci un numero intero di 4 cifre"));

// controllo che il valore inserito sia valido
while (numberPrompt < 1000 || numberPrompt > 9999 || isNaN(numberPrompt) || !Number.isInteger(numberPrompt)) {
    numberPrompt = Number(prompt("Hai inserito un valore non valido. Inserisci un numero intero di 4 cifre"));
}

// questa variabile la uso per tenere il valore di numberPrompt salvato in modo da mandarlo in output alla fine
let numberTemp = numberPrompt;

// calcolo le singole cifre dividendole per migliaia, centinaia, decine e unità
let firstDigit = Math.floor(numberTemp / 1000);
console.log(firstDigit);

// sottraggo le migliaia (moltiplicate per la cifra) e calcolo le centinaia
numberTemp = numberTemp - firstDigit * 1000;
let secondDigit = Math.floor(numberTemp / 100);
console.log(secondDigit);

// sottraggo le centinaia (moltiplicate per la cifra) e calcolo le decine
numberTemp = numberTemp - secondDigit * 100;
let thirdDigit = Math.floor(numberTemp / 10);
console.log(thirdDigit);

// sottraggo le decine (moltiplicate per la cifra) e calcolo le unità
numberTemp = numberTemp - thirdDigit * 10;
let fourthDigit = Math.floor(numberTemp);
console.log(fourthDigit);

// Oddio come ho fatto??? Sto amando la programmazione

// calcolo la somma delle cifre
sum = firstDigit + secondDigit + thirdDigit + fourthDigit;

// stampo il risultato
outputSumElement.innerHTML = `Hai inserito: ${numberPrompt}, la somma delle cifre è ${sum}`;