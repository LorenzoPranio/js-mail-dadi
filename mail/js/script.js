//Creare un prompt per la richiesta della mail dell'utente 

let email = prompt('Inserisci la tua mail');

console.log(email);

//Creo una FLAG impostata su FALSE

let found_email = false;

//Creare un ARREY con la lista delle mail

const authorized_email = ["jacksparrow@gmail.com", "davyjones@gmail.com", "turnerwill@gmail.com",]


//Ciclo l'ARRAY e confronto l'elemento che sto ciclando con la mail inserita nel prompt

//Mostro il messaggio corrispondente a seconda della FLAG