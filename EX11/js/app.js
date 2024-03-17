// Si chiede un numero all'utente
N = parseInt(prompt("Inserisci un numero intero")); // numero intero
let cubo; // numero intero: rappresenta il cubo dei primi N numeri interi

if (!isNaN(N)) {
//Si calcola e si stampa il cubo dei primi N numeri interi
    for (let i=0; i<N; i++) {  // numero: i è il contatore del for
        cubo=(i+1)**3;   // si calcola il cubo di (i+1) che varia da 1 a N
        console.log(cubo);
    }
} else {
	//Si visualizza una finestra popup con un avviso 
	alert('Il  dato inserito non è valido');
}