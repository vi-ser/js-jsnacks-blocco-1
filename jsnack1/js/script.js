/*
Snack 1:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// chiedo all'utente di inserire la prima parola
const firstWord = prompt("Inserisci la prima parola");

// chiedo all'utente di inserire la seconda parola
const secondWord = prompt("Inserisci la prima parola");

// salvo l'elemento output del DOM
const outputWordElement = document.querySelector("#output-word");

// confronto la lunghezza delle parole
if (firstWord.length < secondWord.length) {

    // stampo prima la seconda parola e poi la prima
    outputWordElement.innerHTML = `${secondWord} ${firstWord}`;
}

// stampo prima la prima e poi la seconda (anche nel caso in cui siano di lunghezza pari)
else {
    outputWordElement.innerHTML = `${firstWord} ${secondWord}`;
}