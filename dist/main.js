const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.desktop-menu');

function toogleMenu(){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

menuBtn.addEventListener('click', toogleMenu);
menuBtn.addEventListener('touchstart', toogleMenu);
