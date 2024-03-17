//Si usa un do..while per verificare che il numero inserito dall'utente sia composto da 4 cifre
let num; // stringa: sequenza di quattro cifre
do{
    num = prompt("Inserisci un numero di quattro cifre"); // stringa
} while (num.length!=4 || isNaN(num));
console.log('numero inserito:', num);

//si usa il metodo split per dividere la stringa letta in input in un array di sottostringhe
const arraySplit=num.split('');  //array<String>, il vettore arraySplit contiene le singole cifre del numero 
console.log('Vettore arraySplit che contiene le sottostringhe di num: ', arraySplit);

const arrayInt=[];  //array vuoto
//Si usa la funzione parseInt per convertire gli elementi del vettore arraySplit in numeri
for (let i = 0; i < 4; i++) {  // numero: i è il contatore del for
    arrayInt.push(parseInt(arraySplit[i]));  //si genera un array<Number> che contiene le cifre del numero
}
console.log('Vettore arrayInt che contiene le quattro cifre del numero: ', arrayInt);

//Si usa un for per scandire il vettore arrayInt e sommare i suoi elementi (cifre del numero)
let somma=0;  //numero: variabile accumulatore, contiene la somma di tutte le cifre del numero inserito in input
for (let i=0; i<4; i++) {  //numero: i è il contatore del for
    somma=somma+arrayInt[i];   //si sommano le cifre del numero inserito da tastiera
 }
 console.log('La somma delle cifre del numero è: ', somma);