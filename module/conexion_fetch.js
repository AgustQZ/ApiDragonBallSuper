import tarjetaPersonaje from "./tarjeta_personaje.js";

export function conexionFetch() {
    // "https://dragon-ball-super-api.herokuapp.com/api/characters"
    const url = "https://dragon-ball-super-api.herokuapp.com/api/characters";
    let personajes = document.getElementById("personajes");

    fetch(url)
        //si la respuesta es correcta entonces convertir datos a json.
        .then((respuesta) => {
            console.log("Respuesta Original", respuesta);
            //validar la respuesta para ejecutar then o catch
            if (respuesta.ok === true) {
                return respuesta.json();
            } else {
                return Promise.reject(respuesta);
            }
            // con operador ternario
            //return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
        })
        .then((rJson) => {
            console.log("Respuesta convertida a Json", rJson);
            tarjetaPersonaje(rJson);
        })
        //si la respuesta es erronea entonces envia este mensaje.
        .catch((err) => {
            let mensaje = document.createElement("p");
            mensaje.textContent =
                "Error, inspeccione la consola para conocer mas detalles";
            personajes.appendChild(mensaje);

            console.log(err);
        });
}
