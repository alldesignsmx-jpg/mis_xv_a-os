// 1. Inicializar animaciones (AOS)
AOS.init({
    once: true, // La animación solo pasa una vez
    offset: 100, // Empieza un poco antes de llegar al elemento
});

// 2. Configuración de Cuenta Regresiva
// CAMBIAR: POR LA FECHA DE TUS XV
const eventDate = new Date("April 25, 2026 17:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Insertar en el HTML
    document.getElementById("days").innerHTML = days < 10 ? '0'+days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0'+hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0'+minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0'+seconds : seconds;

    // Cuando termina la cuenta regresiva
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "¡ES HOY!";
    }
}, 1000);

// 3. Control de Música
const music = document.getElementById("bg-music");
const musicIcon = document.getElementById("music-icon");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.classList.remove("fa-play");
        musicIcon.classList.add("fa-pause");
    } else {
        music.pause();
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");
    }
}
