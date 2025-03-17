// Zona de importacion de Modulos
import{find, search, save, edit, remove} from "./api.js";
import{myTable, myFormAdd} from "./components.js";


// Zona de creacion de constantes
    const data = await find(); 
    // Traer informacion de la API guardado en data:
    //[
    //  {
    //     "createdAt": 1741887923,
    //     "UpdateAt": 1741887923,
    //     "Name": "Brian",
    //     "lastName": "Suarez",
    //     "age": 33,
    //     "email": "briansuarez@gmail.com",
    //     "rol": [
    //     "user",
    //     "admin"
    //     ],
    //     "id": "1"
    //  },
    //]

// Constante para fragmento se llama modulo: myTable y se envian datos
    const fragTdbody = myTable(data);

    const table = document.querySelector("#myTable")
    const button = document.querySelector("#my__button")
    const dialog = document.querySelector("#my__dialog")
    const close = document.querySelector("my__dialog-close")

// Zona de Eventos de Escucha
    // Evento de escucha "DOMContentLoaded" para cargar datos de la tabla al inicio
    addEventListener("DOMContentLoaded", async()=>{
        const data = await find();
        const fragTdbody = myTable(data);
        table.append(fragTdbody);
        //Evento para abrir el dialogo al abrir o recargar la pagina
        button.dispatchEvent(new Event("click")); 
    })
    // Evento de escucha "click" para el boton: Agregar
    button.addEventListener("click", (e)=>myFormAdd)
    // Evento de escucha "click" para el boton: X de cerrar el cuadro de dialogo
    close.addEventListener("click", (e)=> dialog.close() //Forma reducida
    )
// Zona de Ejecucion de Codigo




