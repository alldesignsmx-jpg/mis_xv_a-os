document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = 'auto'; // Habilitar scroll
            }, 500);
        });
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll mientras carga
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Countdown Timer
    const eventDate = new Date("April 25, 2026 17:00:00").getTime(); // <--- CAMBIA ESTA FECHA

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerHTML = days < 10 ? "0" + days : days;
        if (hoursEl) hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(timer);
            const timerContainer = document.getElementById("timer");
            if (timerContainer) {
                timerContainer.innerHTML = "<div class='time-box reveal-item'><span>¡ES HOY!</span></div>";
            }
        }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call once immediately to avoid initial delay

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elTop < windowHeight - 100) { // Adjust offset as needed
                el.classList.add('active');
            } else {
                // Optionally remove 'active' class when scrolling back up
                // el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on load to reveal elements already in view

    // Parallax Effect
    const parallaxSections = document.querySelectorAll('.parallax-bg');

    const updateParallax = () => {
        parallaxSections.forEach(section => {
            const speed = parseFloat(section.dataset.parallaxSpeed) || 0.5;
            const yPos = -(window.scrollY - section.offsetTop) * speed;
            section.style.backgroundPositionY = `${yPos}px`;
        });
    };

    window.addEventListener('scroll', updateParallax);
    updateParallax(); // Run on load
});