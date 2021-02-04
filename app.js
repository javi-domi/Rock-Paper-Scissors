let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    const computerSelection = randomComputer();
    showSelections(playerSelection, computerSelection);

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        document.querySelector('text').innerText = 'Empate. Ambos eligieron piedra';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        document.querySelector('text').innerText = 'Perdiste. Papel cubre a piedra';
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        document.querySelector('text').innerText = 'Ganaste. Imposible cortar pierda con tijeras';
        humanScore++;
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        document.querySelector('text').innerText = 'Empate. Ambos eligieron papel';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        document.querySelector('text').innerText = 'Ganaste. Papel cubre a piedra';
        humanScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        document.querySelector('text').innerText = 'Perdiste. Tijeras cortan papel';
        computerScore++;
    }

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        document.querySelector('text').innerText = 'Empate. Ambos eligieron tijera';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        document.querySelector('text').innerText = 'Perdiste. Imposible cortar pierda con tijeras';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        document.querySelector('text').innerText = 'Ganaste. Tijeras cortan papel';
        humanScore++;
    }
    updateScore(humanScore, computerScore)
}
function updateScore(humanScore, computerScore){
    const $score = document.querySelector('#socre p');
    $score.innerText = `Puntuación: ${humanScore} - ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => finishGame(humanScore, computerScore), 200);
    }
}
function finishGame(humanScore, computerScore) {
    const $container = document.querySelector('#container');
    $container.classList.add('hidden');
    const $button = document.querySelector('#restart');
    const $results = document.querySelector('#results');
    if (humanScore > computerScore) {
        $results.innerText = `¡Felicitaciones, Ganaste! :) La puntuacion final es ${humanScore} a ${computerScore}.`;
    }
    if (humanScore < computerScore) {
        $results.innerText = `¡Es una lastima, perdiste! :( La puntuacion final es ${humanScore} a ${computerScore}.`;
    }

    $button.classList.remove('hidden');
    $results.classList.remove('hidden');

    $button.addEventListener('click',() => restartGame())
}
function restartGame(){
    humanScore = 0;
    computerScore = 0;
}