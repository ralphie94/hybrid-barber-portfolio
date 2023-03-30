const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu a");

    burger.addEventListener("click", () => {
        //Toggle nav
        nav.classList.toggle("nav-active");

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();

const navClose = () => {
    const nav = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu a");

    navLinks.addEventListener("click", () => {
        navLinks.classList.toggle("nav");
    })
}

navClose();