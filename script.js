function computerPlay() {
    // Declare decider variable. If it is 0 - computer throws rock, 1 - paper, 2 - scissors
    let decider = Math.floor(Math.random()* 3);
    if (decider == 0) {
        return "Rock";
    }
    else if (decider == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playerSelection() {
    // prompt player for choice and convert to upper case for case sensitivity
    let choice = prompt("Select figure to throw ").toUpperCase();
    // check if player entered a valid figure and repromt if not
    // how does this handle reprompts btw?
    if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        alert("Enter valid figure");
        playerSelection();
    }
    return choice;
}

function playRound(computerPlay, playerSelection) {
    // here all score communicating is done via console.log() it would be cool to make a better system for communicating scores each round
    // case: tie
    if (computerPlay.toUpperCase() === playerSelection) {
        console.log("Tie!");
        return "Tie!";
    }
    // conditions for different cases
    else {
        if (computerPlay === "Rock") {
            if (playerSelection === "PAPER") {
                console.log("You win! Paper beats rock!");
                return("You win! Paper beats rock!");
            }
            else if (playerSelection === "SCISSORS") {
                console.log("You loose! Rock beats scissors");
                return("You loose! Rock beats scissors");
            }
        }
        if (computerPlay === "Paper")
        {
            if (playerSelection === "SCISSORS") {
                console.log("You win! Scissors beat rock");
                return("You win! Scissors beat rock");
            }
            else if (playerSelection === "ROCK") {
                console.log("You loose! Paper beats rock");
                return("You loose! Paper beats rock");
            }
        }
        if (computerPlay === "Scissors") {
            if (playerSelection === "ROCK") {
                console.log("You win! Rock beats scissors!");
                return("You win! Rock beats scissors!");
            }
            else if (playerSelection === "PAPER") {
                console.log("You loose! Scissors beat paper!");
                return("You loose! Scissors beat paper!");
            }
        }
    }
}

function game() {
    // win variable counts games
    // this counts ties and wins as equivalent, maybe this should be fixed???
    let win = Number(5);
    for (let i = 0; i < 5; i++) {
        if ((playRound(computerPlay(), playerSelection()).slice(4, 5) === "l")) {
            win--;
        }
        if (i === 4 && win < 3) {
            console.log(win);
            return(`You loose the game! You lost ${5 - win}/5 games!`);
        }
        else if (i === 4& win > 2) {
            return(`You win the game! You won or tied ${win}/5 games!`);
        }
    }
}
console.log(game());

