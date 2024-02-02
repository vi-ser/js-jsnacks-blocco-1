/*
Snack 5:
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente.
*/

// salvo l'elemento di output del DOM
const introTextElement = document.querySelector("#intro-text");
const outputCubeElement = document.querySelector("#output-cube");

// chiedo all'utente di inserire un numero intero
let number = Number(prompt("Inserisci un numero intero"));

// controllo che il valore inserito sia valido
while (isNaN(number) || !Number.isInteger(number)) {
    number = Number(prompt("Hai inserito un valore non valido. Inserisci un numero intero"));
}

// stampo l'intro
introTextElement.innerHTML += `Il cubo dei numeri da 1 a ${number} sono:`;


// ripeto l'operazione per N volte
for (let i = 1; i <= number; i++) {

    // calcolo e stampa cubo
    outputCubeElement.innerHTML += `${i * i * i} <br>`;
}
