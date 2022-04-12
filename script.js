let computerWin = 0;
let playerWin = 0;

function computerPlay() {
    // Declare decider variable. If it is 0 - computer throws rock, 1 - paper, 2 - scissors
    let decider = Math.floor(Math.random()* 3);
    console.log(decider)
    if (decider == 0) {
        return "ROCK";
    }
    else if (decider == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playerSelection() {
    const rock = document.querySelector("#rock");
    rock.addEventListener('click', () => {
        playRound(computerPlay(), "ROCK")
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
        choice = "PAPER"
        playRound(computerPlay(), "PAPER")
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {
        choice = "SCISSORS"
        playRound(computerPlay(), "SCISSORS")
    });
}

function playRound(computerPlay, playerSelection) {
    // case: tie
    if (computerPlay === playerSelection) {
        console.log("Tie!");
        displayResults("Tie!", playerWin, computerWin);
    }
    // conditions for different cases
    else {
        if (computerPlay === "ROCK") {
            if (playerSelection === "PAPER") {
                console.log("You win! Paper beats rock!");
                playerWin += 1;
                displayResults("You win! Paper beats rock!", playerWin, computerWin);
            }
            else if (playerSelection === "SCISSORS") {
                console.log("You loose! Rock beats scissors");
                computerWin += 1;
                displayResults("You loose! Rock beats scissors", playerWin, computerWin);
            }
        }
        if (computerPlay === "PAPER")
        {
            if (playerSelection === "SCISSORS") {
                console.log("You win! Scissors beat rock");
                playerWin += 1;
                displayResults("You win! Scissors beat rock", playerWin, computerWin);
            }
            else if (playerSelection === "ROCK") {
                console.log("You loose! Paper beats rock");
                computerWin += 1;
                displayResults("You loose! Paper beats rock", playerWin, computerWin);
            }
        }
        if (computerPlay === "SCISSORS") {
            if (playerSelection === "ROCK") {
                console.log("You win! Rock beats scissors!");
                playerWin += 1;
                displayResults("You win! Rock beats scissors!", playerWin, computerWin);
            }
            else if (playerSelection === "PAPER") {
                console.log("You loose! Scissors beat paper!");
                computerWin += 1;
                displayResults("You loose! Scissors beat paper!", playerWin, computerWin);
            }
        }
    }
}

function displayResults(text, playerResult, computerResult) {
        const resultText = document.querySelector("#resultText")
        resultText.textContent = text    
        
        const playerScore = document.querySelector("#playerScore")
        playerScore.textContent = playerResult

        const computerScore = document.querySelector("#computerScore")
        computerScore.textContent = computerResult

        if (playerResult > computerResult) {
            document.querySelectorAll("img")[0].src = "images/player_win.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_lose.jpeg"
        }

        if (playerResult === computerResult) {
            document.querySelectorAll("img")[0].src = "images/player_tie.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_tie.jpeg"
        }

        if (computerResult > playerResult) {
            document.querySelectorAll("img")[0].src = "images/player_lose.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_win.jpeg"
        }

        if (playerWin > 5) {
            playerWin = 0
            computerWin = 0
            resultText.textContent = "Game over! You won! Choose a figure to play again"
        }
        if (computerWin > 5) {
            playerWin = 0
            computerWin = 0
            resultText.textContent = "Game over! You lost! Choose a figure to play again"        
        }
}

playerSelection()
