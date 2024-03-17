//Si utilizza un while per effettuare la scansione dell'array che contiene i nomi delle persone invitate alla festa

const invitati=['Agostino', 'Caterina', 'Bartolomeo', 'Agata', 'Corrado', 'Eleonora','Girolamo', 'Rita','Cosimo'];  //array<String>
console.log(invitati);
const N=invitati.length;   // numero: lunghezza dell'array, rappresenta il numero degli elementi presenti nel vettore


//La variabile nome contiene il nome inserito da tastiera
const nome = prompt('Inserisci il tuo nome'); // string
console.log(nome);

let i=0; // numero: contatore dell'iterazione
//Nella condizione del while si effettua il controllo degli elementi dell'array
//Si scorre l'array a partire alla prima posizione e si confronta il contenuto dell'array con la stringa inserita da tastiera
//Si verifica se il nome inserito dall'utente è diverso dall'elemento dell'array, in tal caso si proseguire con la scansione del vettore
//La scansione del vettore termina o quando si trova nel vettore il nome dell'utente oppure quando si termina l'analisi di tutti gli elementi dell'array
// Nella condizione del while si usa l'operatore AND per gestire le condizioni di uscita dal while

while (nome!==invitati[i] && i<N-1) i++;  // All'interno del while si incrementa il contatore i per continuare con la scansione dell'elemento successivo dell'array

//Una volta terminato il while si utilizza una selezione per controllare la condizione di uscita dall'iterazione
//Se il nome corrisponde ad un elemento presente nel vettore allora si stampa la posizione dell'elemento nell'array (indice), 
//altrimenti si stampa una frase per avvisare l'utente che il nome non è presente nell'array
if (invitati[i]===nome)
    console.log('nome trovato in posizione: ', i);
else 
    console.log('nome non presente nell\'array');


