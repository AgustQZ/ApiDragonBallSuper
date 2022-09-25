export default function filtroBusqueda(input, selector) {
    document.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {
            //console.log(e.key);
            //console.log(e.target.value);

            if (e.key === "Escape") {
                e.target.value = "";
            }

            document
                .querySelectorAll(selector)
                .forEach((elemento) =>
                    elemento.textContent.toLowerCase().includes(e.target.value)
                        ? elemento.classList.remove("filtrar")
                        : elemento.classList.add("filtrar")
                );
        }
    });
}
