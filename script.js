function getComputerChoice() {
  let choice = 0;
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  }
  else if (choice === 1) {
    return "paper";
  }
  else if (choice === 2) {
    return "scissors";
  }
}

function play(playerSelection, computerSelection){
  console.log("Your choice: " + playerSelection);
  console.log("Computers choice: " + computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win!");
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You lose!");
  }
  else if (playerSelection === computerSelection) {
    console.log("Tie!");
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose!");
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!");
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose!");
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win!");
  }
  else {
    console.log("Error!");
  }
}

let getPlayerChoice = prompt("Your move: ");
play(getPlayerChoice, getComputerChoice());