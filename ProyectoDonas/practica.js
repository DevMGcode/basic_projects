
let sumaTotal = 0;

function automatizarSuma() {

    let contenedor = document.getElementById('contenido')

    for(let item of contenedor.children){
        sumaTotal += Number(item.children[0].value);
    }
}



