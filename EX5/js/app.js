// Dichiarazione di un vettore vuoto
const vetInt = []; //array<Numeri>

for (let i = 0; i < 6; i++) {  // numero: i è il contatore del for
    // si chiede all'utente di inserire l'(i+1)-esimo numero da tastiera
    const x = parseInt(prompt("Inserisci un numero:")); // numero letto da tastiera
    console.log(x);

    //si usa la funzione push per inserire i numeri in coda all'array 
    //si usa una selezione per verificare se il numero inserito dall'utente è dispari
    //la condizione dell'if permette anche di escludere gli eventuali valori non validi inseriti da tastiera 
    if (x%2==1)  // se il resto della divisione di x per 2 è 1 allora il numero è dispari e viene inserito nel vettore
       vetInt.push(x); //nel vettore sono inseriti solo i numeri dispari della sequenza di input
}
//stampa gli elementi del vettore
console.log(vetInt);