function computerPlay() {
    // Declare decider variable. If it is 0 - computer throws rock, 1 - paper, 2 - scissors
    let decider = Math.floor(Math.random()* 3);
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
    // here all score communicating is done via console.log() it would be cool to make a better system for communicating scores each round
    // case: tie
    if (computerPlay === playerSelection) {
        console.log("Tie!");
        displayResults("Tie!");
    }
    // conditions for different cases
    else {
        if (computerPlay === "ROCK") {
            if (playerSelection === "PAPER") {
                console.log("You win! Paper beats rock!");
                displayResults("You win! Paper beats rock!");
            }
            else if (playerSelection === "SCISSORS") {
                console.log("You loose! Rock beats scissors");
                displayResults("You loose! Rock beats scissors");
            }
        }
        if (computerPlay === "PAPER")
        {
            if (playerSelection === "SCISSORS") {
                console.log("You win! Scissors beat rock");
                displayResults("You win! Scissors beat rock");
            }
            else if (playerSelection === "ROCK") {
                console.log("You loose! Paper beats rock");
                displayResults("You loose! Paper beats rock");
            }
        }
        if (computerPlay === "SCISSORS") {
            if (playerSelection === "ROCK") {
                console.log("You win! Rock beats scissors!");
                displayResults("You win! Rock beats scissors!");
            }
            else if (playerSelection === "PAPER") {
                console.log("You loose! Scissors beat paper!");
                displayResults("You loose! Scissors beat paper!");
            }
        }
    }
}
playerSelection()

function displayResults(text) {
    const results = document.querySelector(".results")
    const p = document.createElement('p')
    p.textContent = text
    results.appendChild(p)
}