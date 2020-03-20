
const navSlide = () => {
    const burger = document.querySelector('.nav__icon');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__item');
    const siteBody = document.querySelector('body');
    const langBtn = 
    document.querySelector('.nav__language-btn');
    const langMenu = document.querySelector('.nav__sublist');
       langBtn.addEventListener('click', () => {

       
        langMenu.classList.toggle('nav__sublist--open'); 
       })
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');                      
 
        
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
        }
    });
        siteBody.classList.toggle('lock-scroll');
        burger.classList.toggle('toggle');
    });
    

    }


navSlide();


var navi = document.querySelector('.nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.innerWidth > 768) {
        if (window.scrollY >= 100) { // Just an example
            navi.style.backgroundColor = 'rgba(62,10,18, 0.92)'; // or default color
            nav.style.backgroundColor = "rgba(62,10,18, 0.92)";
            navi.style.height = "60px"
        } else {
            navi.style.backgroundColor = 'transparent';
            navi.style.height = "150px"
        }
    }

    
});


    



