const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');

window.addEventListener('load', () => {
    /*Quand le site sera bien chargé*/
    const TL = gsap.timeline({paused:true}); //Notre timeline, sur pause de base pour créer le timeline, puis PLAY 
    /*staggerFrom: Animer des élèments , les uns à la suite des autres, on mets ses méthodes d'nimation à l'intérieur, 
    d'un endroit à sa place définit dans le css*/
    TL
    .staggerFrom(titreSpans, 1,{top:-50, opacity:0, ease: "power2.out"}, 0.3)
    /* Pour les titreSpans ça va durée 1seconde, ça va partir de top -50 à chaque fois, d'opacity 0, ease c'est la 
    manière de l'animation (power2.out:plus long vers la fin), entre chaque animation il y a 0.3seconde
    */
    .staggerFrom(btns, 1,{ opacity:0, ease: "power2.out"}, 0.3, '-=1')
    /* '-=1' : pour eviter qu'il commence après le premier, avec '-=1' il commence avec le premier et se temrine ensemble*/
    .from(l1, 1, {width:0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width:0, ease: "power2.out"}, '-=2')
    .from(logo, 0.6, { transform: "scale(0)", ease: "power2.out"}, '-=2')
    /* from(): c'est juste un élèment à animer
    */
    .staggerFrom(medias, 1,{ right: -200, ease: "power2.out"}, 0.3, '-=2');
    TL.play(); //On lance les animations
})