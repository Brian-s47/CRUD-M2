const key = `67d2f8198bca322cc268a81b`

//Modulo para carga de datos de la API
export const find = async()=>{
    const url = new URL(`https://${key}.mockapi.io/`);
    url.pathname += "informacion";
    const response = await fetch(url.toString(), {method: "get"});
    return await response.json()   
}
//Modulo para Busqueda de datos de la API
export const search = async(id)=>{
    const url = new URL(`https://${key}.mockapi.io/`);
    url.pathname += `informacion/${id}`;
    const response = await fetch(url.toString(), {method: "get"});
    return await response.json()   
}
//Modulo para guardar datos de la API
export const save = async(data)=>{
    const url = new URL(`https://${key}.mockapi.io/`);
    const headers = new Headers();
    headers.set("Content-Type", "application/json")
    url.pathname += "informacion";

    const config = {
        method: "post",
        headers,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(), config);
    return await response.json()
    
}
//Modulo para editar de datos de la API
export const edit = async(data)=>{ 
    const {id} = data;
    if(typeof id === "undefined") return "No se envio el id";
    data.updateAT = Math.floor(Date.now()/1000);
    delete data.id;
    const url = new URL(`https://${key}.mockapi.io/`);
    const headers = new Headers();
    headers.set("Content-Type", "application/json")
    url.pathname += `informacion/${id}`;
    const config = {
        method: "put",
        headers,
        body: JSON.stringify(data)
    }
    const response = await (await fetch(url.toString(), config)).json();
    response.updateAt = new Date(response.updateAt*1000);
    // const x = await response.json();
    // x.createdAt = new Date(x.createdAt * 1000);
    // x.updateAt = new Date(x.updateAT * 1000);
    return response;
}
//Modulo para eliminar de datos de la API
export const remove = async(id)=>{
    const url = new URL(`https://${key}.mockapi.io/`);
    url.pathname += `informacion/${id}`;
    const response = await fetch(url.toString(), {method: "delete"});
    return await response.json()  
}