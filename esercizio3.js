"use strict";
exports.__esModule = true;
function printCar(Macchina) {
    console.log(" \n        name: " + Macchina.name + "\n        color: " + Macchina.color + "\n        marca: " + Macchina.marca + "\n        price: " + Macchina.price + "\n        ");
}
var Panda = {
    name: 'Panda',
    color: 'grey',
    marca: 'Fiat',
    price: 6500
};
printCar(Panda);
function printBike(Bicicletta) {
    console.log(" \n        name: " + Bicicletta.name + "\n        color: " + Bicicletta.color + "\n        marca: " + Bicicletta.marca + "\n        price: " + Bicicletta.price + "\n        ");
}
var BMX = {
    name: 'BMX',
    color: 'black',
    marca: 'MBM',
    price: 350
};
printBike(BMX);
