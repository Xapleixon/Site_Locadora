let slideIndex = 0;

function mostrarSlides(index) {
    const slides = document.querySelectorAll('.slide-active');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}

function mudarslide(n) {
    slideIndex += n;
    mostrarSlides(slideIndex);
}

mostrarSlides(slideIndex);
