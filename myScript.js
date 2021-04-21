/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

var LENGHT_ARRAY_RANDOM = 5;
var listaNRandom = [];
var numeroMassimo = 50;
var nRandom

for (var i = 0; i < LENGHT_ARRAY_RANDOM; i++) {
    nRandom = Math.floor(Math.random() * numeroMassimo) + 1
    listaNRandom.push(nRandom);

}
console.log(listaNRandom);

alert("memorizza questi 5 numeri: " + listaNRandom.join("-"))

setTimeout(on30sec, 5000)

function on30sec() {
    var numeriIndovinati = [];
    var numeriNonIndovinati = [];
    var numeriRispostaUtente = [];


    for (var j = 0; j < LENGHT_ARRAY_RANDOM; j++) {

        var rispostaUtente = parseInt(prompt("inserisci, uno alla volta, i numeri che hai visto precedentemente"));
        //validazione dati
        //  numero ripetuto
        
        if(numeriRispostaUtente.indexOf(rispostaUtente) === -1 ) {
            numeriRispostaUtente.push(rispostaUtente)

            //se il numero scritto dell'utente non è nella lista di numeri generati dal pc allora push numeri NON indovinati 
            if (listaNRandom.indexOf(rispostaUtente) === -1) {
                numeriNonIndovinati.push(rispostaUtente)
            } else {
                numeriIndovinati.push(rispostaUtente)
            }
        } else {
            alert("numero già scritto")
            j--
        }

        
        
    }
    var numCorretti = document.getElementById("numeriIndovinati")
    numCorretti.innerHTML = "I numeri che hai indovinato sono i seguenti: " + numeriIndovinati + ". (" + numeriIndovinati.length + ") "
}



