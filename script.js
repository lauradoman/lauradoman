// Inicio Script para hacer la animacion typing
    document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Engineer Software >", "Backend >", "AWS Specialist >"];
    const typingElement = document.getElementById("typing");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const speed = isDeleting ? 90 : 100; // Velocidad de borrado y escritura

        if (!isDeleting && charIndex < currentText.length) {
            // Añadir carácter
            typingElement.textContent += currentText[charIndex];
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            // Borrar carácter
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else if (!isDeleting && charIndex === currentText.length) {
            // Pausa al final de la palabra
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        } else if (isDeleting && charIndex === 0) {
            // Cambiar a la siguiente palabra
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, speed);
    }

    type();
    });
// Fin del Script para hacer la animacion typing 
