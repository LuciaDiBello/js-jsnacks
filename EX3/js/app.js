//Si utilizza un for per sommare 10 numeri letti da tastiera
//La variabile somma deve essere inizializza a zero fuori dal for

const N=10;   // numero: lunghezza della sequenza di valori letti in input
let somma=0;  // numero: variabile accumulatore, contiene la somma dei numeri inseriti dall'utente

//Il for viene ripetuto 10 volte
//Ad ogni iterazione si legge un nuovo valore che si aggiunge alla variabile somma
for (let i=0; i<N; i++) {  //numero: i è il contatore del for
   const x = parseFloat(prompt('Inserisci l\'elemento della sequenza')); // numero reale
   console.log(x);
   if (!isNaN(x))   // verifica sul dato di input: si controlla se il dato inserito è valido, se non è un numero non contribuisce al calcolo 
        somma=somma+x;
}
console.log('La somma è: ', somma);
