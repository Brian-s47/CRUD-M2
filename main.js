// Zona de importacion de Modulos
import{find, search, save, edit, remove} from "./api.js";
import{myFormAdd, myTable} from "./components.js";

// Zona de creacion de constantes
    const table = document.querySelector("#myTable")
    const button = document.querySelector("#my__button")
    const dialog = document.querySelector("#my__dialog")
    const close = document.querySelector("#my__dialog_close")

// Zona de Eventos de Escucha
    // Evento de escucha "DOMContentLoaded" para cargar datos de la tabla al inicio
    addEventListener("DOMContentLoaded", async()=>{
        const data = await find();
        // Traer informacion de la API guardado en data:
        const fragTdbody = myTable(data);
        // Constante para fragmento se llama modulo: myTable y se envian datos
        table.append(fragTdbody);
        //Evento para abrir el dialogo al abrir o recargar la pagina
        // button.dispatchEvent(new Event("click")); 
    })
    // Evento de escucha "click" para el boton: Agregar
    button.addEventListener("click", myFormAdd);
    // Evento de escucha "click" para el boton: X de cerrar el cuadro de dialogo
    close.addEventListener("click", ()=>{dialog.close()});//Forma reducida
    // Estrutura del "data"
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

    // Pruebas de Modulos de CRUD-API

    // Prueba de Cargar datos
    // const server = await find ()
    // console.log(server)

    // Prueba de Busqueda datos
    // const data = await search(5)
    // console.log(data)

    // Prueba de Modificar datos    
    // const obj = {
    //     name: "Miguelitooo ",
    //     lastName: "Castro",
    //     age: 43,
    //     email: "email@gmail.com",
    //     rol: ["user", "admin"],
    // }
    // const message = await save(obj);
    // console.log(message);

    // Prueba de Eliminar datos
    // const dataRemove = await remove(15);
    // console.log(dataRemove);



