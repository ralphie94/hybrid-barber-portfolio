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

    nav.addEventListener('click', (e) => {
        if (!e.target.matches('a')) return;
    
        console.log(e.target);
    
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        
        navLinks.forEach(link => {
          link.style.animation = '';
        })
    });
}

navSlide();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });