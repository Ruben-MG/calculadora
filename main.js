const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        //Boton para borrar el contenido de la pantalla
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        //Boton para resolver equaciones de la pantalla
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);

            } catch (error) {
                pantalla.textContent = "Error!"
            }
            return;
        }
        //Boton para borrar la ultima posicion de la pantalla
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //Boton para agregar numero a la pantalla
        if (pantalla.textContent === "0" || pantalla.textContent ==="Error!") {
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado
        }

    })
});