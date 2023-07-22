// Array for PC choice
const array  = ["rock", "paper", "scissors"]

// Container variables for displayable screens
const mainContainer = document.querySelector('.main-container');
const startToPlayContainer = document.querySelector('.start-play-container');
const resultsContainer = document.querySelector('.results-container');
const gameContainer = document.querySelector('.game-container');
const makeChoice = document.querySelector('.make.choice');
const makeGo = document.querySelector('.make.go');
const chosenPara = document.querySelector('.chosen-text-para');
console.log(makeChoice)

// Variables for buttons
const goBtn = document.querySelector('.btn-go');
const playBtn = document.querySelector('.play-btn');
const playAgainBtn = document.querySelector('.play-btn.again');
const resultTogleGo = document.querySelector('.go-btn');
const btns = document.querySelectorAll('.btn');

// Variables for dynamic texts and values
const resultText = document.querySelector('.result-text-para');
const chosenValues = document.querySelector('.chosen-text-para');
const chosenOne = document.querySelector('.sp.one');
const chosenTwo = document.querySelector('.sp.two');
const scspOne = document.querySelector('#one');
const scspTwo = document.querySelector('#two');
const endGameInfo = document.querySelector('.info-container >p')
const yourFinalCsore = document.querySelector('.redScore')
const pcFinalCsore = document.querySelector('redScore.pc')


// Random variables
var playerscore = 0;
var pcscore = 0;
var playerSelect = ''

playBtn.addEventListener('click', function() {
    chosenOne.innerText = ''
    chosenTwo.innerText = ''

    playerscore = 0;
    pcscore = 0;
    scspOne.innerText = playerscore;
    scspTwo.innerText = pcscore;
    gameContainer.style.display = 'flex';
    startToPlayContainer.style.display = 'none';
    mainContainer.style.backgroundColor = 'rgba(0,0, 0, 0.4)';
    return playerscore, pcscore;
});
goBtn.addEventListener('click', function(computerSelection, playerSelection) {
    btns.forEach(btn => btn.style.display = 'flex')

    makeChoice.innerText = 'Make your choice';
    computerSelection = getComputerChoice(array);
    playerSelection  = getPlayerSelection(playerSelect);
    chosenValues.style.display = 'flex';
    resultText.style.display = 'flex';
    playRound(computerSelection, playerSelection);
        btns.forEach(btn => btn.setAttribute('class', 'btn'));
        startToPlayContainer.style.display = 'none';
        goBtn.style.display = "none"
            if (pcscore === 5 || playerscore === 5) {
                if(pcscore===5){
                    endGameInfo.innerText = 'You Loose!'
                } else if (playerscore === 5) {
                    endGameInfo.innerText = 'You Win!'
                }
                gameContainer.style.display = 'none';
                resultsContainer.style.display = 'flex';
}});

playAgainBtn.addEventListener('click', function() {
    goBtn.style.display = "none"
    resultText.style.display = "none";
    chosenPara.style.display = "none";
    startToPlayContainer.style.display = 'flex';
    gameContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    mainContainer.style.backgroundColor = 'rgba(0,0,0,0)';
})

btns.forEach(btn => btn.addEventListener('click', function() {
        resultText.style.display = 'none';
        chosenPara.style.display = "none";
        const clickedIndex = Array.from(btns).indexOf(btn);
        btns.forEach((button, index) => {
            if (index !== clickedIndex) {
              button.style.display = "none";}})
        makeChoice.innerText = 'Press Go';
        goBtn.style.display = "flex"
        btn.classList.toggle('btn-pressed')
        playerSelect = this.innerText.toLowerCase();
        getPlayerSelection(playerSelect)}));


function getPlayerSelection(selection) {
    selection=playerSelect;
    return selection
}

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const capitalized = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function for one round
 function playRound(computerSelection, playerSelection) {
    if (playerSelection) {
    scspOne.innerText = '0'
    scspTwo.innerText = '0'
    chosenOne.innerText = capitalized(playerSelection);
    chosenTwo.innerText = capitalized(computerSelection);
if (playerSelection == computerSelection) {
    resultText.innerText = "Tie!"
} else if (playerSelection == "rock" &&  computerSelection == "scissors"){ 
    playerscore+=1;
    resultText.innerText = "You Win! Rock beats Scissors.";
} else if (playerSelection == "rock" && computerSelection == "paper"){
    pcscore +=1;
    resultText.innerText = "You Lose! Paper beats Rock."; 
} else if (playerSelection == "scissors" && computerSelection == "paper"){
    playerscore +=1;
    resultText.innerText = "You Win! Scissors beats Paper.";
} else if (playerSelection == "scissors" && computerSelection == "rock"){
    pcscore +=1;
    resultText.innerText = "You Lose! Rock beats Scissors."; 
} else if (playerSelection == "paper" && computerSelection == "rock") {
    playerscore+=1;
    resultText.innerText = "You Win! Paper beats Rock.";
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    pcscore +=1;
    resultText.innerText = "You Lose! Scissors beats Paper.";
}
scspOne.innerText = playerscore;
scspTwo.innerText = pcscore;
}};