let fs = require('fs');

let moduloTareas = { //Creamos un objeto que exportamos para ser requerido en otros archivos
    archivo: './tareas.json', // Propiedad que guarda el nombre del archivo json
    leerJSON : () => { // Método que retorna el json parseado
        let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJSON)
    }, 
    escribirJSON : (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    agregarTarea : (titulo, estado) => {
        let tareasAnteriores = moduloTareas.leerJSON() // Array original
        
        let nuevaTarea = {  // Nuevo objeto para agregar en el array original
            titulo : titulo,
            estado : estado
        }

        tareasAnteriores.push(nuevaTarea) // Agrego al final del array original el nuevo objeto

        moduloTareas.escribirJSON(tareasAnteriores)
    },
    leerPorEstado: function(cualquiera){ //Metodo que nos permite filtrar las tareas por estado
        let tareasAnteriores = moduloTareas.leerJSON()//Llamamos al array original de tareas
        let filtradasPorEstado = tareasAnteriores.filter(tarea => tarea.estado == cualquiera)//Filtramos las tareas por el estado dado arriba
        return filtradasPorEstado;//Retorna la variable en donde almacenamos el nuevo array
    }
    
}

module.exports = moduloTareas



