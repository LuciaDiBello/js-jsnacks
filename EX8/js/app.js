
//Si chiede all'utente di inserire un numero reale compreso tra 0 e 10 escluso
let x; 
//Si usa il do..while per verificare se il numero inserito da tastiera è valido e se è compreso tra 0 e 10 escluso 
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
if (x===floatRandom)    //se la condizione dell'if è vera allora il numero scelto dall'utente coincide con il numero generato casualmente e l'utente ha vinto
     console.log('Hai vinto');  
else {
    console.log('Non hai vinto');
    alert('Non hai vinto. Fai altri tentativi'); 
    //se l'utente non ha vinto si fanno altri 10 tentativi
    //Si utilizza un while per leggere al più altri 10 numeri da tastiera e verificare se sono uguali al numero generato casualmente
    //Nella condizione si utilizza l'operatore logico AND per definire la condizione di uscita dal while
    //Si ripete il while finchè l'utente non indovina oppure finchè non terminano i tentativi a disposizione
    let i=0; //numero: conta le iterazioni 
    while (x!==floatRandom && i<10) {   //si leggono altri numeri finchè l'utente non indovina il numero estratto oppure terminano i tentativi
        do{
             x = parseFloat(prompt("Inserisci un numero tra 0 e 10 escluso")); // numero reale
        } while (x<0 || x>=10 || isNaN(x));
        console.log('Numero inserito dall\'utente: ', x);
        i++;
    }
    //Si verifica la condizione di uscita dal while
    //se il numero scelto dall'utente concide con quello generato casualmente si stampa la frase 'hai vinto'
    //altrimenti si stampa la frase 'Tentativi terminati, non hai vinto'
    if (x===floatRandom)
       console.log('Hai vinto')
    else
       console.log('Tentativi terminati, non hai vinto');
}

   
