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

// function mix (card) {
//     let currentIndex= cards.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return cards;
// }
let card1;
let symbol1;
let symbol2;
let click = 0;

cards.forEach(function(card, index) {  //click ans transformation of the card
     card.addEventListener('click', onCardClicked);
});

function onCardClicked(event) {
    const card = event.target;
    console.log('haha');
    if (card.className !== 'card') {
        return;
    }
    card.classList.add("shown-card");
    click++;
    console.log(click);
    if (click % 2 === 0){
        symbol2 = card.children[0].className;
        if (symbol1 === symbol2){
            console.log('trouvé!');
        } else {
            console.log('try again');
            setTimeout(function(){
                card.classList.remove("shown-card");
                card1.classList.remove("shown-card");
            }, 800);
            
        }
    } else {
        symbol1 = card.children[0].className;
        card1 = card;
    }
    // si symbol a une valeur
        // comparer
    // sinon
        // on compare pas
}

// function sameGame() {
//     const open = document.createElement('ul');
//     open.push("i");
//     for (open = 0 ; open.lenght <= 1 ; open ++) {
//         if (open[0] === open[1]){
//             card.style.cssText='opacity:0.5 ; position:absolute;';
//         } else {
//             card.style.cssText
//         }
//     }
// }

// function game (){
//     let click = 0;
//     if (click <= 2) {
//         sameCard();
//     }
// }


// function sameCard (){
// let image1 = document.getElementsByTagName('i'); //mon premier symbol cliqué
// let image2 = document.getElementById('i'); //mon second symbol cliqué


// if (image1 === image2) {
//     console.log('ok');
//     card.style.cssText="opacity:0.5; position:absolute;";
// } else {
//     console.log ('encore un tour');
//     card.style.cssText="font-size"
// }
// }

