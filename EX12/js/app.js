//Si dichiara un vettore di numeri interi
const vetInt=[9, 5, 8, 90, 85, 95, 19, 18, 59, 80];  //array<Number>
console.log(vetInt);
//La variabile somma viene inizializzata a zero 
let somma=0;  // numero intero: variabile accumulatore, contiene la somma degli elementi dell'array

const N=vetInt.length;  //numero: N rappresenta la lunghezza del vettore
//Il for viene ripetuto N volte per scandire il vettore
//Ad ogni iterazione si aggiunge alla variabile somma un altro elemento dell'array 
for (let i=0; i<N; i++) {  //numero: i è il contatore del for
        somma=somma+vetInt[i];   //somma parziale, ad ogni iterazione si somma l'elemento del vettore di posto i 
}
//stampa la somma totale
console.log('La somma è: ', somma);

