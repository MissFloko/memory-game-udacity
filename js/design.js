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

const cards = Array.from(document.getElementsByClassName('card'));
let card1;
let symbol1;
let symbol2;
let click = 0;
let move = 0;

cards.forEach(function(card, index) {  //click ans transformation of the card
     card.addEventListener('click', onCardClicked);
});

function onCardClicked(event) {
    const card = event.target;
    if (card.className !== 'card') {
        return;
    }
    card.classList.add("shown-card");
    click++;
    console.log(click);
    maybeMatch(card);
}

function maybeMatch (card) {
    if (click % 2 === 0){
        incrementMove();
        changeScore();
        symbol2 = card.children[0].className;
        if (symbol1 === symbol2){
            console.log('trouvé!');            
        } else {
            console.log('try again');
            setTimeout(function(){
                card.classList.remove("shown-card");
                card1.classList.remove("shown-card");
            }, 700);           
        }
    } else {
        symbol1 = card.children[0].className;
        card1 = card;
    }
}


function incrementMove() {
    move++;
    let movesSpan = document.querySelector('.moves');
    movesSpan.innerHTML = move + " Moves";
}

function changeScore() {
    console.log(move);
    const scoreStar = document.querySelectorAll('ul.stars > li > i');
    if (move === 11) {
        //2 étoiles
        scoreStar[2].classList.remove("fas");
        scoreStar[2].classList.add("far");
    }
    else if (move === 16) {
        //1 étoile
        scoreStar[1].classList.remove("fas");
        scoreStar[1].classList.add("far");
    }
    else if (move === 21) {
        //pas d'étoile
        scoreStar[0].classList.remove("fas");
        scoreStar[0].classList.add("far");
    }
}
