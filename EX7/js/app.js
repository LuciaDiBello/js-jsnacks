
//const lastResult=1000;  //numero: rappresenta l'ultimo numero stampato della tabellina del 2

const lastResult = parseInt(prompt("Inserisci l'ultimo valore della tabellina del 2")); // numero intero

//Il numero inserito da tastiera potrebbe essere sia pari che dispari
//Si esegue la divisione per 2 e poi si arrotonda il valore all'intero vicino più piccolo per ottenere N (numero di iterazioni)
const N=Math.floor(lastResult/2);   //numero: rappresenta il numero delle iterazioni necessarie per stampare i valori della tabellina fino a lastResult

let t;  //numero: rappresenta i valori della tabellina
for (let i=0; i<N; i++) {  // numero: i è il contatore del for
   t=2*(i+1);   // i valori della tabellina del due si ottengono moltiplicando i+1 per 2 per i che varia tra 0 e N escluso
   console.log(t); 
}  
