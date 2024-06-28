Esercizio di oggi(28/06/24):
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes


|SOLUZIONE|

1>Creare un prompt per la richiesta della mail dell'utente 
1.1>Recupero il valore inserito nel prompt

2.Creo una FLAG impostata su FALSE

3.>Creare un ARREY con la lista delle mail
3.1>Ciclo l'ARRAY e confronto l'elemento che sto ciclando con la mail inserita nel prompt
3.2>IF la mail inserita è presente 
3.2.1>Imposto la FLAG su TRUE

4.Mostro il messaggio corrispondente a seconda della FLAG
4.1> IF è true "Mail trovata"
4.2> ELSE "Mail non trovata"
