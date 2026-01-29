// Inicializar AOS (Animaciones al hacer scroll)
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true, // Que solo se anime una vez al bajar
    offset: 100 // Distancia antes de activar
});

// CUENTA REGRESIVA
const eventDate = new Date("April 25, 2026 17:00:00").getTime(); // <--- CAMBIAR FECHA AQUÍ

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>¡ES HOY!</h2>";
    }
}, 1000);

// CONTROL DE MÚSICA
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const audio = document.getElementById('bg-music');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
        document.querySelector('.music-label').innerText = "Dale play";
    } else {
        audio.play().catch(e => console.log("Interacción requerida para reproducir audio"));
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
        document.querySelector('.music-label').innerText = "Sonando...";
    }
    isPlaying = !isPlaying;
}
