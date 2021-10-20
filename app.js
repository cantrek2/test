const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//close mobile menu when click on menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
};

menuLinks.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);