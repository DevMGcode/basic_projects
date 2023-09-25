//Configurar con ExpressJS el servidor de la app
const express = require("express");
const app = express();

//Guardar al componente MySQL que importamos desde conexion.js
const mySQL = require("./conexion");

app.use(express.json());//enviar como recibir los archivos de tipo json

//Método GET para consultar un estudiante  ->Postman (metodo get: http://localhost:3000/estudiantes/4)
app.get("/estudiantes/:registro", (pedido, respuesta) => {
    mySQL.conexion.query('SELECT * FROM estudiante WHERE registro = ' + pedido.params.registro, function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);        
    });
})

//Método POST para agregar un estudiante ->Postman (metodo post: http://localhost:3000/estudiantes/create)
app.post("/estudiantes/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO estudiante (nombre, email) VALUES ("' + pedido.body.nombre + '", "' + pedido.body.email + '")', function(error, resultados) {
        if (error) throw error;
        respuesta.send('Estudiante registrado: Id ' + resultados.insertId);        
    });
})

//Método POST para agregar una nota    ->Postman (metodo post: http://localhost:3000/notas/create)
app.post("/notas/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO examen (codigo_curso, registro_estudiante, nota, fecha)' + 
                           'VALUES ("' + pedido.body.curso + '", ' + pedido.body.estudiante + ', ' + pedido.body.nota + ', "' + pedido.body.fecha + '")', function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen registrado: Id ' + resultados.insertId);        
    });
})

//Método PUT para actualizar una nota ->Postman (metodo put: http://localhost:3000/notas/3/update)
app.put("/notas/:id/update", (pedido, respuesta) => {
    mySQL.conexion.query('UPDATE examen SET codigo_curso = "' + pedido.body.curso + '"' +
                                           ', registro_estudiante = ' + pedido.body.estudiante +
                                           ', nota = ' + pedido.body.nota + 
                                           ', fecha = "' + pedido.body.fecha + '" ' +
                           'WHERE id = ' + pedido.params.id, function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen modificado');        
    });
})

//Método Delete para eliminar una nota  ->Postman (metodo delete: http://localhost:3000/notas/3/delete)
app.delete("/notas/:id/delete", (pedido, respuesta) => {
    mySQL.conexion.query('DELETE FROM examen WHERE id = ' + pedido.params.id, function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen eliminado');        
    });
})

//Método GET para obtener las notas aprobadas   ->Postman (metodo get: http://localhost:3000/notas/MAT101/aprobados)
app.get("/notas/:codigo/aprobados", (pedido, respuesta) => {
    mySQL.conexion.query('SELECT * FROM examen WHERE codigo_curso = "' + pedido.params.codigo + '" AND nota > 5', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);        
    });
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})