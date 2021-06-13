export

interface Macchina{
    name: string,
    color: string,
    marca: string,
    price: number
}

function printCar (Macchina: Macchina){
    console.log(
       ` 
        name: ${Macchina.name}
        color: ${Macchina.color}
        marca: ${Macchina.marca}
        price: ${Macchina.price}
        ` 
    );
}

var Panda : Macchina = {
    name: 'Panda',
    color: 'grey',
    marca: 'Fiat',
    price:  6500
}
  printCar(Panda)

 

interface Bicicletta{
    name: string,
    color: string,
    marca: string,
    price: number
}

function printBike (Bicicletta: Bicicletta){
    console.log(
       ` 
        name:  ${Bicicletta.name}
        color: ${Bicicletta.color}
        marca: ${Bicicletta.marca}
        price: ${Bicicletta.price}
        ` 
    );
}

var BMX : Bicicletta = {
    name: 'BMX',
    color: 'black',
    marca: 'MBM',
    price:  350
}
  printBike(BMX)   


  /*
  1) Node è un framework che serve per scrivere codice javascript come un linguaggio di programmazione, andando così a modificare specifici eventi.
  2) Ajax è un modo per operare in maniera asincrona, così che gli utenti interagiscano direttamente con il sito.
  3) TypeScript è un linguaggio che permette il debugging del codice javascript, facendo così di verificare istantaneamente la correttezza del codice eseguito per poi trasformarlo in un formato JS.
  4) Le Classi sono funzioni che servono a definire le caratteristiche che avranno gli oggetti (consentono di prendere da altri oggetti proprietà e metodi).
   */