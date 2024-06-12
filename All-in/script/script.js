const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselTrack = document.querySelector('.carousel-track');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselTrack.children.length - 1) {
        currentIndex++;
    }
    updateCarousel();
});

function updateCarousel() {
    const imageWidth = carouselTrack.children[0].getBoundingClientRect().width;
    const newTransformValue = -currentIndex * imageWidth;
    carouselTrack.style.transform = `translateX(${newTransformValue}px)`;
}
function goToProfile() {
    window.location.href = "profile.html";  // Substitua "profile.html" pelo caminho da página de destino
}