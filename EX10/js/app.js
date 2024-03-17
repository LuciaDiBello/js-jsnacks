// Si chiede all'utente di inserire due numeri e si verifica se sono uguali
// Si ripete fino a quando l'utente inserisce due numeri uguali oppure dopo 10 tentativi

let x;  //numero
let y;  //numero
let i=0;  //numero: i è il contatore del do...while
//nel do..while vengono inseriti due numeri interi
//nella condizione si usa l'operatore logico AND per verificare se i due numeri sono uguali o se il numero di tentativi è terminato
do{
    do{  //si chiede un numero e si verifica se viene inserito un valore valido
        x = parseInt(prompt("Inserisci un numero")); // numero 
    } while (isNaN(x));
    do{
        y = parseInt(prompt("Inserisci un numero")); // numero 
    } while (isNaN(x));
    console.log('I numeri scelti sono: ', x, y);
    i++;   //incremento del contatore
} while (x!==y && i<10);
//terminato il do..while si verifica la condizione di uscita
if (x===y) 
   console.log('Gli ultimi due numeri inseriti sono uguali. Il loro valore è: ', x);
else 
    console.log('numero di tentativi terminati');

