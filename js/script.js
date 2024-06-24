// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// destructuring
const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: "Hello Vue!!",
        };
    }
}).mount("#container")