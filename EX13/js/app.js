
const vetInt = []; //array vuoto
let x; // numero letto da tastiera da aggiungere al vettore

for (let i = 0; i < 10; i++) {  // numero: i è il contatore del for
    // si chiede all'utente un numero
    // Si usa il ciclo do..while per verificare se il valore inserito dall'utente è valido
    // Finchè l'utente non inserisce un numero si continua a chiedere di inserire un dato valido
    do {
       x = parseInt(prompt("Inserisci un numero:")); // numero 
    } while (isNaN(x));
    // Il valore inserito da tastiera viene inserito in coda all'array 
    vetInt.push(x);    //si utilizza la funzione push per aggiungere un elemento in coda al vettore
}
//stampa del vettore
console.log(vetInt);  

//Si usa un for per scandire il vettore e sommare gli elementi dell'array
//Si calcola la media aritmetica dividendo la somma delle componenti del vettore per 10
let somma=0; // somma: variabile accumulatore, rappresenta la somma degli elementi dell'array e viene inizializzata a zero
for (let i = 0; i < 10; i++) {  // numero: i è il contatore del for
          somma= somma + vetInt[i];  //ad ogni iterazione si somma l'i-esimo elemento del vettore
}
console.log('La somma degli elementi del vettore è: ', somma);
const media=somma/10;  // numero: rappresenta la media aritmetica degli elementi del vettore
console.log('La media aritmetica degli elementi del vettore è: ', media);