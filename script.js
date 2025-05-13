document.addEventListener("DOMContentLoaded", function() {
    console.log("¡Postealo Vos activado!");

    // Animación de entrada de las imágenes
    const imagenes = document.querySelectorAll(".mi-imagen");
    imagenes.forEach(imagen => {
        imagen.classList.add("animar-imagen");
    });

    // Interacción con el botón "Quiero mis diseños"
    const botonWhatsapp = document.querySelector(".boton");
    botonWhatsapp.addEventListener("mouseenter", function() {
        botonWhatsapp.style.backgroundColor = "#76c7c0"; // Cambia color al pasar el mouse
    });
    botonWhatsapp.addEventListener("mouseleave", function() {
        botonWhatsapp.style.backgroundColor = "#00c853"; // Vuelve al color original
    });

    // Mostrar mensaje de contacto al hacer clic en el botón
    const mostrarMensaje = document.getElementById("mostrarMensaje");
    if (mostrarMensaje) {
        mostrarMensaje.addEventListener("click", function() {
            alert("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
        });
    }

    // Validación del formulario de contacto
    const formulario = document.querySelector("#formulario-contacto");
    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault(); // Evita que el formulario se envíe de inmediato

            const nombre = document.querySelector("#nombre").value;
            const correo = document.querySelector("#correo").value;
            if (nombre === "" || correo === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert("¡Formulario enviado correctamente!");
                formulario.reset(); // Limpia el formulario después del envío
            }
        });
    }
});
