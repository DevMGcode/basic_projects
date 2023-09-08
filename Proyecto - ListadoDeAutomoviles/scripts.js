function Automovil(marca,modelo,color,anio,titular){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anio=anio;
    this.titular=titular;
}

let automovil1 = new Automovil('Ford','Focus','Rojo',2015,'Matias Estrada');
let automovil2 = new Automovil('Chevrolet','Camara','Amarillo',2018,'Silvia Marquez');
let automovil3 = new Automovil('Toyota','Corolla','Blanco',2021,'Antonio Giraldo');
let automoviles = [automovil1 , automovil2 , automovil3];


Automovil.prototype.venderAutomovil = function(nuevoTitular) {
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function() {
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function() {
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutomoviles() {
    let lista = document.getElementById('listaAutomoviles');

    for(let automovil of automoviles) {
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}