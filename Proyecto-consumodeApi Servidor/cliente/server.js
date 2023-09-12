const fs = require('fs');
const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const ruta  = 'nuevodb.json';

// Hacer una solicitud a la API
axios.get(apiUrl)
  .then(response => {
    const data = response.data;
    const jsonData = JSON.stringify(data, null, 2);

    // Guardar los datos en el archivo JSON local
    fs.writeFile(ruta , jsonData, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Datos guardados en ' + ruta );
      }
    });
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });
