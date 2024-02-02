/*
Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array
*/

// creo array vuoto
const oddNumbers = [];

const outputArrayElement = document.querySelector("#output-array");

// salvo l'elemento di output del DOM
const outputSumElement = document.querySelector("#output-sum");

for (let i = 0; i < 6; i++) {

    // chiedo all'utente di inserire un numero
    const number = Number(prompt("Inserisci un numero intero"));

    // controllo che il numero sia dispari
    if (number % 2 != 0) {
        // aggiungo il numero inserito all'array
        oddNumbers.push(number);
    }

}

// stampo gli elementi dell'array
for (let i = 0; i < oddNumbers.length; i++) {
    outputArrayElement.innerHTML += `${oddNumbers[i]} <br>`
}
