

function crearTiendas(contenerdorID,min,cantidadTiendas){
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenerdorID)
    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas;  conteoTiendas++){
        // crear el texto de label para poder llamar a la funcion
        let textoEtiqueta ="Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafotienda(textoEtiqueta,min);

        //agregar parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}


function crearParrafotienda(textoLabel,valorMin){
    //crear las etiquetas de parrafo <p>
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": "

    //conectar con input
    elementoEtiqueta.setAttribute("for",textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    // Establecer atributos de input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value",0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devovler el parrafo completo
    return elementoParrafo;

}

function extraerNumeroDesdeElemento(elemento){
    // let miElemento = document.getElementById(elemento); se realiza ya que accede directamente linea66 al hijo
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}


function calcular() {

    let ventas =[];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){

        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas +1 ; 
    }

    // ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    // ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    // ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    // ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    // ventas[4]= extraerNumeroDesdeElemento("ventasTienda5");
    // ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas) ;
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);//es local

        item.children[1].className ="menuNeutro";


        if(valorVenta==ventaMayor){
            item.children[1].className = "menuInputMayor";
        }

        if(valorVenta==ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = "Total ventas: " + totalVentas + 
                        " /Venta mayor : " + ventaMayor+ 
                        " / Venta menor : " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent= mensajeSalida;

    function sumarTotal(array){
        let total = 0;

        for(let venta of array){
            total= total+venta;
        }

        return total
    }

    function calcularMayor(array){
        let maximo = array[0];

        for(let venta of array){
            if(venta>maximo){
                maximo=venta;
            }
        }
        return maximo
    }

    function calcularMenor(array){
        let menor = array[0];

        for( let venta of array){
            if(venta<menor){
                menor = venta;
            }
        }

        return menor;
    }

}