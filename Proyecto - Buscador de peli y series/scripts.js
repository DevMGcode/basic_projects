

//Variables
let selector = document.getElementById('miSelector')
let input = document.getElementById('miInput')
let boton = document.getElementById('miBoton')
let lista = document.getElementById('miListado')


let archivo ='peliculas.json';


//Escuchadores de Eventos
//-----------------------------------------------------
selector.addEventListener('change',cambiarArchivo);
selector.addEventListener('cambioModo',mensajeModo)
//Este atento para el cambio y la alerta
//-----------------------------------------------------
input.addEventListener('keydown',verificarInput);
//-----------------------------------------------------
boton.addEventListener('click',buscar);



//Funciones
//----------------------------------------------------------
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo(){
    alert('El archivo de busqueda ahora es ' + selector.value)
}
//para el cambio y la alerta
//------------------------------------------------------------

function verificarInput(evento){
    if((evento.key<65|| evento.key>90)&& evento.key !=32 && evento.key !=8){ // a-z

        evento.preventDefault()//nose imprime en pantalla
    }
}
//-------------------------------------------------------------

function buscar(){
    lista.innerHTML= "";

    fetch(archivo)
    .then(respuesta=> respuesta.json())
    .then(salida =>{

        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                let p = document.createElement('p')
                p.id=item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display='none';

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover',()=>{
                    let p = document.getElementById(item.nombre)
                    p.style.display = 'block';
                })

                li.addEventListener('mouseout',()=>{
                    let p = document.getElementById(item.nombre)
                    p.style.display = 'none';
                })

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(error=>{
        console.log(error);
    })
}
