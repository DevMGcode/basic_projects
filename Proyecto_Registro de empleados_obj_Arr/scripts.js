
let empleados =[];


function Empleado(fichero,nombre,apellido,nacimiento,cargo){
    this.fichero = fichero;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    //captura la info de los inputs
    let fichero = document.getElementById('txtFichero').value;
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let nacimiento = document.getElementById('txtNacimiento').value;
    let cargo = document.getElementById('txtCargo').value;

    let empleado = new Empleado(fichero,nombre,apellido,nacimiento,cargo)

    empleados.push(empleado)
    // se llama la lista empleados y se agrega el objeto empleados
    alert('Empleado ha sido agregado');
    limpiarCampos();
    
}

function mostrarEmpleados(){
    let listado = '';

    for(empleado of empleados){
        for(let prop in empleado){
            //se asigna al listado + cara en mayus + valor
            listado = listado + prop.toUpperCase()+ ": "+ empleado[prop] + ","
        }
        listado = listado + "\n";
    }

    alert(listado);
}

function limpiarCampos(){
    document.getElementById('txtFichero').value="";
    document.getElementById('txtNombre').value="";
    document.getElementById('txtApellido').value="";
    document.getElementById('txtNacimiento').value="";
    document.getElementById('txtCargo').value="";
}