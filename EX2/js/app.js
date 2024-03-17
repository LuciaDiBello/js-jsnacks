// Acquisizione di due stringhe da tastiera
const parola1 = prompt('Inserisci la prima parola'); // string
console.log(parola1);

const parola2 = prompt('Inserisci la seconda parola'); // string
console.log(parola2);

//Con la selezione si può verificare qual è la stringa più corta
//Si utilizza la proprietà length che rappresenta la lunghezza di una stringa per confrontare le due parole  
if (parola1.length<parola2.length) {
   console.log(parola1);  // se la condizione è vera viene stampata prima la parola1
   console.log(parola2);
  } else {
    console.log(parola2); // se la condizione è falsa viene stampata prima la parola2
    console.log(parola1);
  }
   