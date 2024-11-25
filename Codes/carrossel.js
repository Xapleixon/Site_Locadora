let slideIndex = 0;

function mostrar(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'flex' : 'none'; 
    });
}

function mudar(n) {
    slideIndex += n;
    mostrar(slideIndex);
}


mostrar(slideIndex);
