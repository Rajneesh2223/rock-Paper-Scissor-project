// Create an array of options
const options = ["rock", "paper", "scissors"];

// Function to generate a random option
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  // Convert player input to lowercase for case-insensitivity
  playerSelection = playerSelection.toLowerCase();
  
  // Determine the winner
  if (playerSelection === computerSelection) {
    return "Tie game!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock.";
    } else {
      return "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats paper.";
    } else {
      return "You win! Paper beats rock.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors.";
    } else {
      return "You win! Scissors beats paper.";
    }
  }
}

// Function to play the game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    // Get player input
    let playerSelection = prompt("Enter rock, paper, or scissors:");
    
    // Get computer input
    let computerSelection = computerPlay();
    
    // Play a round
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    
    // Update scores
    if (result.startsWith("You win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }
  }
  
  // Print final scores
  console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
}

// Play the game
game();
