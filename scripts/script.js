// script.js

// Selecciona la imagen y el menú
document.getElementById("menu-icon1").addEventListener("click", function() {
    var menu = document.getElementById("headermenu"); // Selecciona el menú por su ID

    // Verifica si el menú ya está abierto
    if (menu.classList.contains("open")) {
        menu.classList.remove("open"); // Si está abierto, lo cierra
    } else {
        menu.classList.add("open"); // Si está cerrado, lo abre
    }
});


document.addEventListener('DOMContentLoaded', function() {

    const slides = document.querySelector('.slides'); //buscar todas las tarjetas y meterlas a un arreglo
    console.log(slides);

    //-----//
    
    const slideCount = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    //----->selecciona todos los elementos que vamos a usar (el espacio de las tarjetas, botones de izq. y der.)

    let currentIndex = 0; //índice

    function updateSlidePosition() {
        // Calcula el desplazamiento del slider y aplica la transformación
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        // Mueve al slide anterior si no es el primero
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    nextButton.addEventListener('click', function() {
        // Mueve al siguiente slide si no es el último
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });
});
