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
        pCheck = 0;
        cCheck = 0;
        displayResults("Tie!", playerWin, computerWin, pCheck, cCheck);
    }
    // conditions for different cases
    else {
        if (computerPlay === "ROCK") {
            if (playerSelection === "PAPER") {
                playerWin += 1;
                pCheck = 1;
                cCheck = 0;
                displayResults("You win! Paper beats rock!", playerWin, computerWin, pCheck, cCheck);
            }
            else if (playerSelection === "SCISSORS") {
                computerWin += 1;
                pCheck = 0;
                cCheck = 1;
                displayResults("You loose! Rock beats scissors", playerWin, computerWin, pCheck, cCheck);
            }
        }
        if (computerPlay === "PAPER")
        {
            if (playerSelection === "SCISSORS") {
                playerWin += 1;
                pCheck = 1;
                cCheck = 0;
                displayResults("You win! Scissors beat rock", playerWin, computerWin, pCheck, cCheck);
            }
            else if (playerSelection === "ROCK") {
                computerWin += 1;
                pCheck = 0;
                cCheck = 1;
                displayResults("You loose! Paper beats rock", playerWin, computerWin, pCheck, cCheck);
            }
        }
        if (computerPlay === "SCISSORS") {
            if (playerSelection === "ROCK") {
                console.log("You win! Rock beats scissors!");
                playerWin += 1;
                pCheck = 1;
                cCheck = 0;
                displayResults("You win! Rock beats scissors!", playerWin, computerWin, pCheck, cCheck);
            }
            else if (playerSelection === "PAPER") {
                console.log("You loose! Scissors beat paper!");
                computerWin += 1;
                pCheck = 0;
                cCheck = 1;
                displayResults("You loose! Scissors beat paper!", playerWin, computerWin, pCheck, cCheck);
            }
        }
    }
}

function displayResults(text, playerResult, computerResult, pCheck, cCheck) {
        const resultText = document.querySelector("#resultText")
        resultText.textContent = text    
        
        const playerScore = document.querySelector("#pScore")
        playerScore.textContent = playerResult

        const computerScore = document.querySelector("#cScore")
        computerScore.textContent = computerResult

        if (pCheck === 1) {
            document.querySelectorAll("img")[0].src = "images/player_win.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_lose.jpeg"
        }

        if (cCheck === 1) {
            document.querySelectorAll("img")[0].src = "images/player_lose.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_win.jpeg"
        }

        if ((pCheck === 0) && (cCheck === 0)) {
            document.querySelectorAll("img")[0].src = "images/player_tie.jpeg"
            document.querySelectorAll("img")[1].src = "images/computer_tie.jpeg"
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
