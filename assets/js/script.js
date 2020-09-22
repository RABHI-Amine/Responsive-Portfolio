const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation-links');
    const navLinks = document.querySelectorAll('.navigation-bar li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //links animation
        navLinks.forEach((link ,index) => {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
                 else
            {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
            }
        });
    });
}
 navSlide(); 
// smoth scroll
var scroll = new SmoothScroll('a[href*="#"]',{
    speed : 800,
    speedAsDuration: true
});
//AOS
AOS.init();


//jquery code :
