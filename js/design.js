// FICHER JS MEMORY GAME

// 1- mélange random des li au chargement de la page
// 2- remise à zéro au click du bouton restart + mélange random
// 3- selection de la case cliquée + flip + affichage du symbol + reste face
// 4- selectiond d'une seconde case + flip + affichage du sybole
//             - true : animation + les deux case restent face mais estompées
//             - false : animation + re-flip des cases
// 5- maximum de true = 8
// 6- décompte du temps de jeu (start à la première case cliquée)
// 7- décempte du nb de mouvement et classement
//             - 8 à 10 mouvements = 3 étoiles
//             - 11 à 15 mouvements = 2 étoiles
//             - 16 à 20 mouvements = 1
//             - plus de 20 = 0 étoiles
// 6- quand true = 8 apparition d'une pop-up
//             - felicitations
//             - temps de jeu
//             - score (nb de mouvement + nb étoiles)
//             - rejouer ?

const cards = Array.from(document.getElementsByClassName('card'));

cards.forEach(function(card, index) {
     card.addEventListener('click', function(){
         console.log('haha');
         card.style.cssText="color:white; background-color:blue; font-size:2.5em"
     });
});