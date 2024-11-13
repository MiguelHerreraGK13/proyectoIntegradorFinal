let currentIndex = 0;
const slides = document.querySelectorAll("#carousel img");
const indicators = document.querySelectorAll(".indicator");

function updateCarousel() {
    document.getElementById("carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("bg-white", index === currentIndex);
        indicator.classList.toggle("bg-gray-300", index !== currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Selecciona todas las imágenes dentro del carrusel
const carouselImages = document.querySelectorAll('#carousel img');

// Agrega un event listener a cada imagen
carouselImages.forEach((img) => {
    img.addEventListener('click', () => {
        const url = img.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank'); // Abre la URL en una nueva pestaña
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Cargar los datos desde localStorage
    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));

    // Comprobar si hay datos almacenados
    if (datosUsuario && datosUsuario.nombre) {
        // Asignar el nombre de usuario al elemento correspondiente
        document.getElementById("usernameLink").textContent = datosUsuario.nombre;
    }
});



