////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
//////////////////////////////////////////////// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    move = getInput();
    if (move === null || undefined ) {
      move = getInput();
    } else if (move === "rock" || "paper" || "scissors") {
      playerMove = move;
    } else {
    move = getInput();
  }
  return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()
    move = randomPlay();
    var computerMove;
    if (move === null || undefined) {
      randomPlay();
    } else {
      computerMove = move;
  }
      return computerMove;
}

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    if ((playerMove == "rock" && computerMove == "scissors") || (playerMove == "scissors" && computerMove == "paper")
    || (playerMove == "paper" && computerMove == "rock")) { winner = "player" }
    else if ( (computerMove == "scissors" && playerMove == "paper") || (computerMove == "paper" && playerMove == "rock")
    || (computerMove == "paper" && playerMove == "rock")) { winner = "computer"}
    else if (computerMove == playerMove) {
        winner = "tie"}
    console.log("playerMove: "+playerMove);
    console.log("computerMove: "+computerMove);
    return winner;
  }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var count;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
    count = getWinner();
    if (count === "computer") {
      computerWins += 1;
      console.log("player score: "+playerWins);
      console.log("computer score: "+computerWins)
      console.log("result: "+count);
    } else if (count === "player") {
        playerWins += 1;
        console.log("player score: "+playerWins);
        console.log("computer score: "+computerWins)
        console.log("result: "+count);
    } else if ( count === "tie") {
        console.log("player score: "+playerWins);
        console.log("computer score: "+computerWins)
        console.log("result: "+count);
    }
    }
    if (playerWins > computerWins) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!")
    }
        return [playerWins, computerWins];
}

playToFive();

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var count;
    var limit = x;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < limit && computerWins < limit) {
    count = getWinner();
    if (count === "computer") {
      computerWins += 1;
      console.log("player score: "+playerWins);
      console.log("computer score: "+computerWins)
      console.log("result: "+count);
    } else if (count === "player") {
        playerWins += 1;
        console.log("player score: "+playerWins);
        console.log("computer score: "+computerWins)
        console.log("result: "+count);
    } else if ( count === "tie") {
        console.log("player score: "+playerWins);
        console.log("computer score: "+computerWins)
        console.log("result: "+count);
    }
    }
    if (playerWins > computerWins) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!")
    }
        return [playerWins, computerWins];
}
