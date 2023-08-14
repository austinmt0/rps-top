let userSelection = null; 
let round = 0; 
let userScore = 0; 
let computerScore = 0; 

const buttonRock = document.getElementById('buttonRock');
const buttonPaper = document.getElementById('buttonPaper')
const buttonScissors = document.getElementById('buttonScissors'); 

buttonRock.addEventListener('click', () => {
    userSelection = 'rock';
    playNextRound(); 
}); 

buttonPaper.addEventListener('click', () => {
    userSelection = 'paper';
    playNextRound();
});

buttonScissors.addEventListener('click', () => {
    userSelection = 'scissors'; 
    playNextRound(); 
}); 

function getComputerSelection() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return 'rock';
      } else if (randomNumber < 0.66) {
        return 'paper'; 
      } else {
        return 'scissors'; 
      }
    }  

function displayGameResult(userScore, computerScore) {
    const resultMessageElement = document.getElementById('resultMessage');

    if (userScore > computerScore) {
        resultMessageElement.textContent = `You win with a score of: User ${userScore} - Computer ${computerScore}`; 
    } else if (computerScore > userScore) { 
        resultMessageElement.textContent = `Computer wins with a score of: Computer ${computerScore} - User ${userScore}`; 
    } else {
        resultMessageElement.textContent = `The game is a tie with a score of: User ${userScore} - Computer ${computerScore}`; 
    }  
}

function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        return 'tie'; 
    } else if (
        (computerSelection === 'rock' && userSelection === 'scissors') || 
        (computerSelection === 'scissors' && userSelection === 'paper') ||
        (computerSelection === 'paper' && userSelection === 'rock') 
    ) {
            return 'computer'
    } else {
            return 'user'; 
    }
    }

function displayRoundResult(round, userSelection, computerSelection, winner) {
    const roundResultElement = document.getElementById('roundResult'); 
    const resultMessage = `Round ${round}: You chose ${userSelection}, computer chose ${computerSelection}. ${winner === 'tie' ? "It's a tie!" : winner === 'user' ? 'You Win!' : 'Computer wins!'}`; 
    roundResultElement.textContent = resultMessage; 
}

async function playNextRound() {
    round++; 

    const computerSelection = getComputerSelection(); 
    const winner = playRound(computerSelection, userSelection); 
 
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer'){
                computerScore++; 
    
    }

    const scoreDisplayElement = document.getElementById('scoreDisplay'); 
    scoreDisplayElement.textContent = `Game Score: User ${userScore} - Computer ${computerScore}`; 

    displayRoundResult(round, userSelection, computerSelection, winner); 

    console.log(`Round ${round}: You chose ${userSelection}, computer chose ${computerSelection}. ${winner === 'tie' ? "It's a tie!" : winner === 'user' ? 'You Win!' : 'Computer wins!'}`);   
    console.log(`Score: User ${userScore} - Computer ${computerScore}`); 

    

    if (userScore === 5 || computerScore === 5) {
        displayGameResult(userScore, computerScore) 
    }

} 

const resetButton = document.getElementById('resetButton'); 
resetButton.addEventListener('click', resetGame); 

function resetGame() {
    userScore = 0; 
    computerScore = 0 
    round = 0 
    userSelection = 0 

    const scoreDisplayElement = document.getElementById('scoreDisplay'); 
    scoreDisplayElement.textContent = `Game Score: User ${userScore} - Computer ${computerScore}`; 

    const roundResultElement = document.getElementById('roundResult'); 
    roundResultElement.textContent = ''; 

    const resultMessageElement = document.getElementById('resultMessage'); 
    resultMessageElement.textContent = ''; 


}
