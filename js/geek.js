async function listaProductos(){

    const conexion = await fetch("http://localhost:3002/productos");
    const conexionConvertida = conexion.json();

    //console.log(conexion);
    
    return conexionConvertida;
}

//funcion asincrona para crear un nuevo producto

async function enviarProducto(imagen,nombre,precio) {
    const conexion = await fetch("http://localhost:3002/productos",{
        method:"POST",                                                     //el tipo de metodo al ser post agg nuevos parametros
        headers: {"conten-type":"application/json"},                       //encabezado y le indicamos el tipo de archivo con el que trabajamos
        body: JSON.stringify({                                             // convierte a string
            imagen: imagen,                                                //variables que se agregan de parametro
            nombre: nombre,
            precio: precio

        })
    })

    const conexionConvertida = conexion.json(); //convertimos la conexion al elmento json

    return conexionConvertida;   
}

//funcion  asncrono para agregar el metodo delete y eliminar producto
async function eliminar(id) {
    const conexion = await fetch(`http://localhost:3002/productos/${id}`,{
        method: "DELETE",
    })

    
}

export const conexionApi = {
    listaProductos,enviarProducto,eliminar
}

