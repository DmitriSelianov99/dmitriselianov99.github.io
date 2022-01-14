const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu_item');
const hamburger = document.querySelector('.hamburger');

menuItem.forEach(item => item.addEventListener('click', menuHandler));
hamburger.addEventListener('click', menuHandler);

function menuHandler(){
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
}




