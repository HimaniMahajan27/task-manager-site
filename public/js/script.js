const slides = document.querySelectorAll('.slide');
const contentText = document.querySelector('.content p');
const indicators = document.querySelectorAll('.indicator');
const texts = [
    '"Organize, Prioritize, and Achieve – Your Productivity Starts Here!"',
    '"Stay on Track, Stay Ahead – Manage Your Tasks Effortlessly!"',
    '"Turn Plans into Action – Stay Focused, Stay Productive!"'
];

let currentIndex = 0;

function updateContent() {
    contentText.innerHTML = texts[currentIndex];
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    updateContent();
}

setInterval(nextSlide, 3000); // Har 3 second ke baad slide change hogi

// Initialize the first active state
slides[currentIndex].classList.add('active');
updateContent();
