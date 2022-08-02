// Targeting nodes with selsectors. 
const rockButton = document.querySelector('.Rock');
const paperButton = document.querySelector('.Paper');
const scissorButton = document.querySelector('.Scissors');
const result = document.querySelector('.Result');
const userscore = document.querySelector('.user-score');
const computerscore = document.querySelector('.computer-score');

// styling the buttons 
rockButton.style.cssText = 'color: black; background: red;'; 
paperButton.style.cssText = 'color: black; background: orange;';
scissorButton.style.cssText = 'color: black; background: blue;';  

// This function makes the computer chose randomly between rock, paper or scissors
function computerPlay(){
    let random = Math.random();
    if (random <= 0.3333){ 
        return 'Paper';
    } else if(random >= 0.6666){ 
        return 'Rock';
    } else{
        return 'Scissors';
    }
}

// Function that plays the games between the computer and the user.
function playRound(playerSelection,computerSelection){
    console.log('1', playerSelection, '2', computerSelection);
    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'Paper '){
            computerScore++;
            const p = document.createElement('p');
            p.innerText = 'You lose, rock cannot beat paper' 
            result.appendChild(p); 
        } else if (computerSelection === 'Rock'){
            const p = document.createElement('p');
            p.innerText = 'Tie, Rock tie Rock' 
            result.appendChild(p); 
        } else {
            userScore++;
            const p = document.createElement('p');
            p.innerText = 'You win!!! Rock beat Scissors'; 
            result.appendChild(p);
        }
    }

    if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'Paper'){
            const p = document.createElement('p');
            p.innerText = 'Tie, Paper tie Paper'; 
            result.appendChild(p);
        } else if (computerSelection === 'Rock'){
            userScore++;
            const p = document.createElement('p');
            p.innerText = 'You win!!! Paper beat Rock';
            result.appendChild(p);
        } else {
            computerScore++;
            const p = document.createElement('p');
            p.innerText ='You lose, Paper cannot beat Scissors'; 
            result.appendChild(p);
        }
    }

    if (playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'Paper'){
            userScore++;
            const p = document.createElement('p');
            p.innerText ='You win!!! Scissor beat Paper';
            result.appendChild(p);
        } else if (computerSelection === 'Rock'){
            computerScore++;
            const p = document.createElement('p');
            p.innerText = 'You lose, Scissor cannot beat Rock'; 
            result.appendChild(p);
        } else{
            const p = document.createElement('p');
            p.innerText ='Tie, Scissor tie Scissor';
            result.appendChild(p);
        }
    }
};

// This function helps to display the winner between the user and the computer when one of them wins for 5 times.
const checkingWinner = (userScore, computerScore) => {
    if(userScore === 5){
        const h2 = document.createElement('h2');
        h2.innerText = `Wow, you won!! You defeat the computer ${userScore} to ${computerScore}` // message when the user wins 
        h2.style.color = 'blue'
        result.append(h2)
    } else if (computerScore === 5){
        const h2 = document.createElement('h2');
        h2.innerText = `Ohh...sorry, you lost to the computer ${computerScore} to ${userScore}` // messsage when the computer wins  
        h2.style.color = 'red'
        result.append(h2)
    }
};

// This function is for displaying the current score of the user and the computer during the game 
const updateScore = (userScore, computerScore) => {
    userscore.innerText = `User score: ${userScore}`;
    computerscore.innerText = `Compputer score:  ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScore(userScore, computerScore);
    checkingWinner(userScore,computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScore(userScore, computerScore);
    checkingWinner(userScore,computerScore);
});

scissorButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScore(userScore, computerScore);
    checkingWinner(userScore,computerScore);
});

let userScore =parseInt(0);
let computerScore = parseInt(0);
