import { conexionFetch } from "./module/conexion_fetch.js";
import filtroBusqueda from "./module/filtro_busqueda.js";

//si conexionFetch usara un evento se meteria dentro de este addEventListener.

document.addEventListener("DOMContentLoaded", (e) => {
    conexionFetch();
    filtroBusqueda(".filtro-cartas", ".tarjeta");
});
