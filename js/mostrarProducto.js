import { conexionApi } from "./geek.js";

const lista = document.querySelector("[data-lista]");   //llamar el identificador, elemento padre
//console.log("Contenido actual de [data-lista]:", lista.innerHTML);


//funcion que creara los elementos li//

function crearCard(id,imagen,nombre,precio) {
    const producto = document.createElement("li");  //se crea un elemento 'li' //
     producto.className ="crear__card";
     producto.setAttribute("data-id", id);
     producto.innerHTML =  //estructura que formara la tarjeta del prodcuto//
                    ` <img class="producto" src="${imagen}" alt="${nombre}">
                    <h3>${nombre}</h3>
                    <div class="contenedor__precio_producto"> 
                        <p> ${precio} Lps. </p>
                        <button class="boton__borrar" type="submit" data-boton-eliminar>
                            <span class="iconify" data-icon="akar-icons:trash-can" data-inline="false"></span>
                        </button>
                    </div>`;


   // console.log(producto);

return producto; //retornaremos la tarjeta del prodcuto, cada vez que se llame la funcion

}


//funcion asincrona que obtiene el listado del archivo db.json

async function listaDeProductos() {
   // try{
        const listaApi = await conexionApi.listaProductos()
        listaApi.forEach(producto => lista.appendChild(crearCard(producto.id,producto.imagen,producto.nombre,producto.precio))); // recorrido del foreach
       
   // }catch{

    //}
}

listaDeProductos()

