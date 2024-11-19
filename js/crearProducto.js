import { conexionApi } from "./geek.js";

let formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {

    evento.preventDefault(); //para evitar que no se ejecute si el evento submit
    const imagen = document.querySelector("[data-imagen]").value;
    const containerImagen = document.getElementById("imagen-container")

    const nombre = document.querySelector("[data-nombre]").value;
    const containerName = document.getElementById("nombre-container")
    const precio = document.querySelector("[data-precio]").value;
    const containerPrecio = document.getElementById("precio-container")

    try{ 
        
        if (imagen === "" && !document.getElementById("nombre-label") ) {
           
            containerImagen.innerHTML += `<label id="nombre-label"class="campo__etiqueta" for="nombre">introducce una Imagen</label>`
            
        }

        if (nombre === "" && !document.getElementById("precio-label")) {
                    
            containerName.innerHTML += `<label id="precio-label" class="campo__etiqueta" for="precio">Introduce un nombre</label>`
            
            
            
        }

        if (precio === "" && !document.getElementById("imagen-label")) {
                    
            containerPrecio.innerHTML += `<label id="imagen-label" class="campo__etiqueta" for="imagen">Introduce un precio</label>`
            
            
        }
        

        if (imagen != "" && nombre != "" && precio != "") {
            
            await conexionApi.enviarProducto(imagen,nombre,precio);
            alert("Se agrego con exito el producto");
            
        }

    }catch(e){

        alert(e)
    }

}

formulario = addEventListener("submit", evento => crearProducto(evento));


//funcionn que elimina un producto
let productoEliminado = document.querySelector("[data-lista]");

async function eliminarProducto(evento){
    
    const boton = evento.target.closest("[data-boton-eliminar]"); // Detecta el botón clicado
    if (boton) {                                                //verificacion 
        const tarjeta = boton.closest("[data-id]"); // Encuentra el elemento li padre, Se utiliza para encontrar la tarjeta completa asociada al botón que se presionó
        const id = tarjeta.getAttribute("data-id"); // Obtiene el ID del producto
        try{
            await conexionApi.eliminar(id);
        }catch(e){

            alert(e)

        }
    } 
        
    
    
}

productoEliminado = addEventListener("click", evento => eliminarProducto(evento));