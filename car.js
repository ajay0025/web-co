let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa');
    mynav.classList.toggle('active');
};