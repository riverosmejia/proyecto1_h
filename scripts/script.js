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


