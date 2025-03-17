// Carga de datos en la tabla
export const myTable = (data)=> {
    const tdbody = document.createElement("tbody");
    // Creacion de Elemento: 
        // <tbody>

        // </tbody>
    data.forEach(element => {
        const tr = document.createElement("tr");
        // Creacion de Elemento: 
            // <tr>

            // </tr>
        const tdId = document.createElement("td");
        tdId.textContent = element.id;
                // Creacion de Elemento: 
                    // <td>

                    // </td>
        const tdName = document.createElement("td");
        tdName.textContent = element.name;

        const tdLastName = document.createElement("td");
        tdLastName.textContent = element.lastName;

        const tdAge = document.createElement("td");
        tdAge.textContent = element.age;

        const tdEmail = document.createElement("td");
        tdEmail.textContent = element.email;

        const tdRol = document.createElement("td");
        tdRol.textContent = element.rol;

        const tdCreate = document.createElement("td");
        tdCreate.textContent = new Date(element.createdAt *1000);
        //Convercion de dato de Fecha a legible
        const tdUpdate = document.createElement("td");
        tdUpdate.textContent = new Date(element.updateAt *1000);

        // Creacion de Botones para edision y borrar
        const tdActions = document.createElement("td")
        const btEdit = document.createElement("button")
        btEdit.textContent = "Edit";
        const btDelete = document.createElement("button")
        btDelete.textContent = "Delete";
        tdActions.append (btEdit, btDelete)
        
        tr.append(tdId, tdName, tdLastName, tdAge, tdEmail, tdRol, tdCreate, tdUpdate, tdActions)
        // Agregar lo elementos creados el Elemento "tr" creado de primero
        tdbody.append(tr)
        // Agregar el elemento "tr" el elemento "tbody" creado de primero
    });
    return(tdbody);
}
//Construccion de un formulario
export const myFormAdd = (e)=>{
    const dialog = document.querySelector("#my__dialog")
    dialog.showModal();
    const my_form = document.createElement("form");
    my_form.action="/informacion";
    my_form.method="post";

    console.log(my_form);
    
};
