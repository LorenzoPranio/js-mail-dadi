//Creare un ARREY vuoto
//[0]giocatore [1]computer

const numberz = []

//Creare un CICLO FOR per riempire l'array con il math random

for (let i = 1; i <= 2; i++){
    numberz.push(Math.floor(Math.random() * 6 + 1))
}

console.log(numberz);

//Creo un CICLO FOR per confrontare i numeri all'interno dell'ARRAY

if (numberz[0] > numberz[1]){
   console.log('Giocatore Win')
}
else if (numberz[0]< numberz[1]){
    console.log('Computer Win')
}
else {
    console.log('Pareggio')
}

