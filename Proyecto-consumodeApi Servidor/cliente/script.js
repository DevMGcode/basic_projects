// Función para cargar y mostrar los datos desde el archivo JSON
async function cargarDatos() {
    try {

        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block'; // Mostrar el spinner

        // Simular un retraso de 2 segundos (2000 ms)
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Hacer una solicitud para cargar el archivo JSON local
        const response = await fetch('nuevodb.json');
        const jsonData = await response.json();
        const tableBody = document.getElementById('tableBody');

        jsonData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.company.name}</td>
            `;
            tableBody.appendChild(row);
        });
        spinner.style.display = 'none'; // Ocultar el spinner después de cargar los datos
    } catch (error) {
        console.error('Error al cargar los datos desde el archivo JSON:', error);
    }
}

// Llamar a la función para cargar y mostrar los datos
cargarDatos();




