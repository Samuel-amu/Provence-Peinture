const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById("backToTopBtn");

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

window.onscroll = function () {
    const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (currentScroll > 100) backToTopBtn.classList.add("show");
    else backToTopBtn.classList.remove("show");

    if (currentScroll > 50 && navLinks.classList.contains('active')) navLinks.classList.remove('active');
}