// Acquisizione di due numeri x e y da tastiera

const x = parseInt(prompt('Inserisci il primo numero')) // number
console.log(x);

const y = parseInt(prompt('Inserisci il secondo numero')) // number
console.log(y);

// Verifica sui dati di input: si controlla se i dati inseriti da tastiera sono numeri
if (!isNaN(x) && !isNaN(y)) {

    if (x>y) 
         console.log('Il maggiore è: ', x);
    else 
        if (x<y)
          console.log('Il maggiore è: ', y);
        else 
           console.log('I numeri inseriti sono uguali. Il loro valore è: ', x);

} else {
	// Se i valori inseriti in input non sono numeri viene visualizzata una finestra popup contenente un avviso
	alert('I dati inseriti non sono validi');
}

