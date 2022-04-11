let funcionesDeTareas = require('./funcionesDeTareas')
let process = require('process')


let instruccion = process.argv[2]

if(instruccion == undefined){
    console.log("Atención - Tienes que pasar una acción.")
}else{
    switch (instruccion.toLowerCase()) {
    case "listar":
        let tareas = funcionesDeTareas.leerJSON() // contiene la base de datos de tareas
        if(tareas.length === 0){ // Si el array de tareas está vacío
            console.log("La lista de tareas está vacia")
        }else{ // Si en el array de tareas hay por lo menos una
            console.log("-----------------")
            console.log("LISTADO DE TAREAS")
            console.log("-----------------")
            tareas.forEach(function(tarea, index){
                console.log(`Titulo: ${tareas[index].titulo} - Estado: ${tareas[index].estado}`)
            })
        }
        break;
    case "agregar":
        let titulo = process.argv[3]
        let estado = "Pendiente"
        funcionesDeTareas.agregarTarea(titulo, estado)
        break;
    case 'filtrar':
        let estadoTareas = process.argv[3]
        let porEstado = funcionesDeTareas.leerPorEstado(estadoTareas)
        console.log(porEstado)
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    break;
}
}
