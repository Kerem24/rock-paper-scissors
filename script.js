let humanScore = 0;
let pcScore = 0;

//* PC Choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); // 0, 1, 2

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  if (randomNumber === 2) return "scissors";
}

//* Human Choice
function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):", "");

  if (choice === null) {
    // if they pressed cancel
    return "";
  }

  choice = choice.trim().toLowerCase();
  if (choice === "scissor") {
    choice = "scissors";
  }

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice! Enter rock, paper or scissors:", "")
      .trim()
      .toLowerCase();
    if (choice === "scissor") choice = "scissors";
  }

  return choice;
}

//* Single Round
function playRound() {
  const humanChoice = getHumanChoice();
  const pcChoice = getComputerChoice();

  alert(`Your Choice: ${humanChoice} \nComputer Choice: ${pcChoice}`);

  //* Check for Draw
  if (humanChoice === pcChoice) {
    alert("Draw!");
  }

  //* Check for Human Wins
  else if (
    (humanChoice === "rock" && pcChoice === "scissors") ||
    (humanChoice === "paper" && pcChoice === "rock") ||
    (humanChoice === "scissors" && pcChoice === "paper")
  ) {
    humanScore += 1;
    alert("Human Won this round!");
  }

  //* Otherwise, Computer Wins
  else {
    pcScore += 1;
    alert("Computer Won this round!");
  }

  alert(
    `Score -> Human: ${humanScore} vs Computer: ${pcScore}\n-------------------`,
  );
}

//* Main Game Loop (5 Rounds)
function main() {
  alert("Welcome to RPS!");

  for (let i = 1; i <= 5; i++) {
    alert(`--- Round ${i} ---`);
    playRound();
  }

  alert("=== Game Over ===");
  if (humanScore > pcScore) {
    alert(
      `You won the game! Final Score: Human ${humanScore} - ${pcScore} Computer`,
    );
  } else if (pcScore > humanScore) {
    alert(
      `PC won the game! Final Score: Computer ${pcScore} - ${humanScore} Human`,
    );
  } else {
    alert(`The game ended in a tie! Final Score: ${humanScore} - ${pcScore}`);
  }
}

main();
