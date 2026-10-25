// Таймер обратного отсчета до 7 ноября 2026 года, 12:00
const targetDate = new Date(2026, 10, 7, 12, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.querySelector('.countdown-container').innerHTML = "<p style='color:#f3e5ab; width:100%; text-align:center;'>Мероприятие уже началось!</p>";
        return;
    }

    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('weeks').innerText = String(weeks).padStart(2, '0');
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Черно-золотой салют на весь экран при клике
const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const goldColors = ['#d4af37', '#f3e5ab', '#e6ca87', '#b8860b', '#ffffff', '#ffd700', '#daa520'];

    (function frame() {
        confetti({
            particleCount: 18,
            angle: 60,
            spread: 360,
            startVelocity: 45,
            origin: { x: Math.random(), y: Math.random() - 0.1 },
            colors: goldColors,
            ticks: 300,
            scalar: 1.4
        });

        confetti({
            particleCount: 18,
            angle: 120,
            spread: 360,
            startVelocity: 45,
            origin: { x: Math.random(), y: Math.random() - 0.1 },
            colors: goldColors,
            ticks: 300,
            scalar: 1.4
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    }());

    celebrateBtn.innerText = "Сизди күтүп жатабыз!";
    celebrateBtn.style.background = "linear-gradient(135deg, #d4af37, #f3e5ab)";
    celebrateBtn.style.color = "#3a2512";
});