

// my modifier with addEventListener
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;


// player 1
document.querySelectorAll('button')[0].addEventListener('click', displayFirst);
function displayFirst(){
    
    document.querySelectorAll('img')[0].setAttribute('src' , './images/dice'+ randomNumber1 +'.png');
}

// player 2
document.querySelectorAll('button')[1].addEventListener('click', displaySecond);
function displaySecond(){
    
    document.querySelectorAll('img')[1].setAttribute('src' , './images/dice'+ randomNumber2 +'.png');
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = '🚩Player 1 wins!'
    }
    if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 2 wins!🚩'
    }
    if (randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = 'Draw!'
    }
}

