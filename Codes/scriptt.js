let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

updateCarousel();
