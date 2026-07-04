const URL = "http://localhost:3000/productos";

export async function obtenerProductos() {

    const respuesta = await fetch(URL);

    const datos = await respuesta.json();

    return datos;

}