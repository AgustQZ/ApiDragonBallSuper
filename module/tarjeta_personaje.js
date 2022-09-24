export default function tarjetaPersonaje(JSONdatos) {
    let personajes = document.getElementById("personajes"),
        fragmento = document.createDocumentFragment();
    JSONdatos.forEach((dato) => {
        //console.log(dato.name);
        let nombre = document.createElement("h3"),
            foto = document.createElement("img"),
            rol = document.createElement("p"),
            tarjeta = document.createElement("div");

        foto.src = dato.imageUrl;
        nombre.textContent = dato.name;
        rol.textContent = dato.role;

        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(rol);

        tarjeta.classList.add("tarjeta");

        fragmento.appendChild(tarjeta);
    });
    personajes.appendChild(fragmento);
}
