const starIcons = document.querySelectorAll('.star i');


starIcons.forEach(star => {
    star.addEventListener('click', function() {
      
        star.classList.toggle('filled');
    });
});