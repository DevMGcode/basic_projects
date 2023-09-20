async function obtenerTodos(){
    try{
            fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
    })
        .then(respuesta=> respuesta.json())
        .then(data=>{
            let CuerpoTabla = document.getElementById('tablaContenido');
            let salida="";
            for(let elemento of data.dispositivos){/* acumulando */
                salida += ` 
                <tr>
                    <td>${elemento.id}</td>
                    <td>${elemento.marca}</td>
                    <td>${elemento.modelo}</td>
                    <td>${elemento.color}</td>
                    <td>${elemento.almacenamiento} GB </td>
                    <td>${elemento.procesador}</td>
                </tr>
                `
            }
            CuerpoTabla.innerHTML= salida
        })
        .catch(error=>{throw new Error ("Error en la solicitud: "+ error)})
}
    catch(error){ console.log(error)}

}

async function consultarUno(){

    try{
        let id = document.getElementById('txtConsulta').value;
        if(id===' '){
            alert('No ha ingresado ningún ID');
            return;
        }

        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+ id)
        .then(respuesta=>{
            let dispositivo =respuesta.data;
            document.getElementById('consultarNombre').value = dispositivo.marca;
            document.getElementById('consultarModelo').value = dispositivo.modelo;
            document.getElementById('consultarColor').value = dispositivo.color;
            document.getElementById('consultarAlmacenamiento').value = dispositivo.almacenamiento;
            document.getElementById('consultarProcesador').value = dispositivo.procesador;
        })
        .catch(error=>{throw new Error ("Error en la solicitud: "+ error)})
    }catch(error){
        console.error(error);
    }
}



async function agregarUno(){

    try{
        let marca = document.getElementById("inputMarca").value;
        let modelo = document.getElementById("inputModelo").value;
        let color = document.getElementById("inputColor").value;
        let almacenamiento = document.getElementById("inputAlmacenamiento").value;
        let procesador = document.getElementById("inputProcesador").value;

        //solo simula las operaciones Post
        
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        })
        .then(respuesta=> respuesta.json())
        .then(data=>{
            //llama la funcion obtenertodos() para actualizar la lista pero la Api Real no se modifica
            obtenerTodos();
            alert(`se ha agregado un nuevo archivo: \n Marca:${data.marca}\nModelo: ${data.modelo}\nColor: ${data.color}\nAlmacenamiento: ${data.almacenamiento}\nProcesador: ${data.procesador}`)
        })
        .catch(error=>{throw new Error ("Error en la solicitud: "+ error)})
    } catch(error){
        console.error(error);
    }
}



async function modificarUno() {        
    try {
        let id = document.getElementById('txtConsulta').value;
        let nombre = document.getElementById('consultarNombre').value;
        let modelo = document.getElementById('consultarModelo').value;
        let color = document.getElementById('consultarColor').value;
        let almacenamiento = document.getElementById('consultarAlmacenamiento').value;
        let procesador = document.getElementById('consultarProcesador').value;
        
        if (nombre === '') {
            alert('El registro a modificar no está completo');
            return;
        }

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                data: {
                    modelo: modelo,
                    color: color,
                    almacenamiento: almacenamiento,
                    procesador: procesador
                }
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n${JSON.stringify(data)}`);
            //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtenerTodos();
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}



async function eliminarUno(){

    try{
            let id= document.getElementById('txtConsulta').value;

            if(id===''){
                alert('No ha ingresado ningun ID');
                return;
            }
        

        axios.delete('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(respuesta=>{
            alert(`Se ha eliminado el archivo ${id}.`);
            document.getElementById('consultarNombre').value = "";
            document.getElementById('consultarModelo').value = "";
            document.getElementById('consultarColor').value = "";
            document.getElementById('consultarAlmacenamiento').value = "";
            document.getElementById('consultarProcesador').value = "";

            //llama la funcion obtenertodos() para actualizar la lista pero la Api Real no se modifica
            obtenerTodos();

        })
    .catch(error=>{throw new Error ("Error en la solicitud: "+ error)})
        } catch(error){
            console.error(error);
        }
}

