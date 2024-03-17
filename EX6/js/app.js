//Si chiede all'utente di inserire un numero reale compreso tra 0 e 10 escluso
let x; 
//Si usa il do..while per verificare se il numero inserito da tastiera è un valore valido e se è compreso tra 0 e 10 escluso
//Nella condizione del do..while si utilizza l'operatore OR per definire la condizione di uscita dal while
//Finchè l'utente inserisce un numero fuori dal range oppure non valido si continua a richiedere l'inserimento di un numero
do{
    x = parseFloat(prompt("Inserisci un numero tra 0 e 10 escluso")); // numero reale
} while (x<0 || x>=10 || isNaN(x));
console.log('Numero inserito dall\'utente: ', x);

//Viene generato casualmente un numero reale compreso tra 0 e 10 escluso
const floatRandom=Math.random()*10;  // numero reale
console.log('Numero casuale: ', floatRandom.toFixed(2));

//Si usa la selezione per verificare se il numero inserito dall'utente coincide con il numero generato casualmente
if (x===floatRandom)
     console.log('Hai vinto');
else console.log('Non hai vinto');    
