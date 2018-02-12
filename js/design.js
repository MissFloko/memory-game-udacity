// FICHER JS MEMORY GAME

//preparation of the beggining of the game
function shuffleCards(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
}

function prepareGame() {
    let mixImages = shuffleCards(imageToShuffle);
    let eachI = Array.from(document.querySelectorAll('ul.deck > li > i.fas'));
    eachI.forEach(function(i, index) {
        let oneSymbol = mixImages[index];
        i.className = "fas " + oneSymbol;;
    })
}

// list of all the variables needed in the general scope
const imageToShuffle = ["fa-hand-spock", "fa-hand-spock", "fa-space-shuttle", "fa-space-shuttle", "fa-film", "fa-film", "fa-globe", "fa-globe", "fa-map", "fa-map", "fa-eject", "fa-eject", "fa-paper-plane", "fa-paper-plane", "fa-star", "fa-star"];
const cards = Array.from(document.getElementsByClassName('card'));
let firstCard;
let symbol1;
let symbol2;
let click = 0;
let move = 0;
let startingTime;
const game = document.querySelector('.container');
const popUp = document.querySelector('.alert');
let preventClick = false;

// at the load of the game page
prepareGame();

// determine what happen for each card clicked
cards.forEach(function(card, index) {
     card.addEventListener('click', onCardClicked);
     startingTime = performance.now();
});

const playAgain = document.querySelector('button');
const restart = document.querySelector('.restart');
restart.addEventListener('click', function(){
    console.log('restart game');
    location.reload();
})
playAgain.addEventListener('click', function() {
    console.log('want to play again');
    setTimeout( function() {
        location.reload();
    }, 200);
})

function onCardClicked(event) {
    const card = event.target;
    if (card.className !== 'card') {
        return;
    }
    if (preventClick) {
        return;
    }
    card.classList.add("shown-card");
    click++;
    maybeMatch(card);
}

//does the cards match ?
function maybeMatch (card) {
    if (click % 2 === 0){
        incrementMove();
        changeScore();
        symbol2 = card.children[0].className;
        if (symbol1 === symbol2){
            console.log('you find it');
            maybeEndGame(card);          
        } else {
            preventClick = true;
            console.log('try again');
            setTimeout(function(){
                card.classList.remove("shown-card");
                firstCard.classList.remove("shown-card");
                preventClick = false;
            }, 700);           
        }
    } else {
        symbol1 = card.children[0].className;
        firstCard = card;
    }
}

// count of the number of player's moves
function incrementMove() {
    move++;
    let movesSpan = document.querySelector('.moves');
    movesSpan.innerHTML = move + " Moves";
}

// change of the stars score depending of the moves
function changeScore() {
    const scoreStar = document.querySelectorAll('div.score > ul.stars > li > i');
    applyStarNumber(scoreStar);
}

function applyStarNumber (starElements) { 
    if (move > 14 && starElements[2].classList.contains("fas")) {
        //2 étoiles
        starElements[2].classList.remove("fas");
        starElements[2].classList.add("far");
    }
    if (move > 19 && starElements[1].classList.contains("fas")) {
        //1 étoile
        starElements[1].classList.remove("fas");
        starElements[1].classList.add("far");
    }
    if (move > 24 && starElements[0].classList.contains("fas")) {
        //pas d'étoile
        starElements[0].classList.remove("fas");
        starElements[0].classList.add("far");
    }
}

// popup of end game
function maybeEndGame(card) {
    let faceCard = document.getElementsByClassName('shown-card');
    setTimeout(function(){
       if (faceCard.length === 4) {
        const endingTime = performance.now();
        let gameTimer = ("It took you " + ((endingTime - startingTime)/1000).toFixed(0) + "s to finish the game.");
        let timer = document.querySelector('.timer');
        const endGameStars = document.querySelectorAll('div.alert > ul.stars >li >i');
        applyStarNumber(endGameStars);
        timer.textContent = gameTimer;
        popUp.classList.add("win-game");
        game.classList.add('background-win');  
    }}, 1050);    
}