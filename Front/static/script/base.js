/* menu display */
const button = document.getElementById('menu-toggler');
function openMenu() {
    document.getElementById('header-banner').classList.toggle('open');
};
button.addEventListener('click', openMenu);

