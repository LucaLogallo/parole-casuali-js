/* 
Ci viene chiesto di creare e stampare in console una frase contenente N parole (dove il valore di N è definito in una costante) sfruttando una API e che genera parole casuali.

Per poter affrontare l'esercizio è necessario conoscere: JS in particolare variabili, array, ciclo for, functions, console.log e la libreria axios.js (per le chiamate API).

### Step 1

Per prima cosa analizza l'API per vedere il tipo di risposta:

[https://flynn.boolean.careers/exercises/api/random/word](https://flynn.boolean.careers/exercises/api/random/word)

L'endpoint restituisce *una sola parola per chiamata*, quindi per generare la lista dovremo fare N chiamate. Rivedi la [documentazione di axios.js](https://github.com/axios/axios) e i metodi per effettuare una chiamata http. 

Ricorda che è buona pratica definire all'inizio del tuo script le variabili che utilizzerai nel codice (ad es. potresti salvare il numero di parole richieste in una costante, inizializzare l'array di parole vuoto etc.)

Attenzione: non fidarti mai di una API esterna; ricorda di gestire possibili errori (ad es. errori 5xx o 4xx oppure il formato della risposta o se mancano dati).

### Step 2

Accumula tutte le parole ottenute in un array chiamando N volte l'API e infine crea la frase concatenando la lista di parole ottenute.

Dovrai effettuare N chiamate; quale buona occasione per sfruttare i cicli!!

Una volta riempito l'array trova un modo per concatenare le parole in un'unica frase; conosci qualche metodo degli array utile? 

risoluzione:
  -prendo il numero inserito dall'utente e faccio in modo che sia !0 e >=1
  -una volta fatto questo farò un ciclo che girerà tante volte quant è il numero inserito dall'utente facendo un push nell'array che conterrà le parole 
  -controllare che la chiamata api sia fatta correttamente infatti il risultato della chiamata api è una cosa del genere {"success":true,"response":"libero"} quindi attento che success sia uguale a true e solo se success = true far inserire il response nell'array della frase con un push
  -stampare il risultato nel tag p in html che ha id result tramite document.getElementByid

*/

/* const axios = require('axios'); */

$(function () {
  /*  const axios = require('axios'); */
  //importo axios una volta che l'ho installato con npm install axios. nel const ho il default e il nome axios in modo tale che poi potrò richiamare axios semplicemente scrivendo axios.{metodo}
  /*  const axios = require('axios').default; */

  var arrParole = [];
  var c = 'ciao';
  $('#numeroParole').click(function () {
    let n = $('#np').val();

    if (n <= 0) {
      printOutput("ERRORE: il numero dev'essere maggiore di 0", '#result');
    } else {
      for (let i = 0; i < n; i++) {
      arrParole.push(c);
      console.log(arrParole); 
    }}
    let a = arrParole.join(" ");
    arrParole = [];
    printOutput(a, '#result');
    a = '';

    /* printOutput('','#np');

     */
  })


  /* funzioni */
  function printOutput(text, target) {
    $(target).text(text);
  }

})





