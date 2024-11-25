const plusIcons = document.querySelectorAll('.plus i');

plusIcons.forEach(plus =>{
    plus.addEventListener('click', function(){

        plus.classList.toggle('filled');
    });


});
