const burger = document.querySelector('.burger-menu');
const burgerIcon = burger.querySelector('.fa-solid');

const nav = document.querySelector('.nav-wrapper');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    if (burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.classList.remove('fa-bars');
        burgerIcon.classList.add('fa-x');
    } else {
        burgerIcon.classList.add('fa-bars');
        burgerIcon.classList.remove('fa-x');
    }
});