const menu = document.querySelector('.mobile-menu');
const hamburger = document.getElementById('hamburger');
const btnClose = document.getElementById('btn-close');

hamburger.addEventListener('click', showMenu);
btnClose.addEventListener('click', showMenu)

function showMenu() {
    menu.classList.toggle('menu-hide');
    hamburger.classList.toggle('hamburger-hide');
    btnClose.classList.toggle('btn-close-hide')
}