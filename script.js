const anim = gsap.timeline();

anim.from('.hero_content', {
    opacity: 0,
    durantion: 1,
    x: -500,
});

anim.from('.hero_img', {
    opacity: 0,
    durantion: 1.5,
    scale: 0.7,
    x: 700,
});

anim.from('.navbar', {
    opacity: 0,
    durantion: 1,
    y: -100,
});

anim.from('.bottom_container', {
    opacity: 0,
    durantion: 1,
    y: 200,
});

//Show Menu

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () =>{
    menu.classList.toggle('show_menu');
})