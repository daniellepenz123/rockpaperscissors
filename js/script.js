// declared variables for form and dropdown elements
const gameForm = document.querySelector("#gameForm");
const userChoice = document.querySelector("#userChoice");

// get HTML elements to display game results and scores
const playerResult = document.querySelector("#playerResult");
const computerResult = document.querySelector("#computerResult");
const winnerResult = document.querySelector("#winnerResult");
const winsDisplay = document.querySelector("#wins");
const lossesDisplay = document.querySelector("#losses");
const tiesDisplay = document.querySelector("#ties");

// declared variables to track wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;

// declared arrow function w/ no parameters, runs when called
// randomly choose rock, paper, or scissors for computer
const getComputerChoice = () => {
  // Math.random() gives decimal from 0 up to (not including) 1 - MDN
  const randomNumber = Math.random();

  // if/else to check random number and choose rock, paper, or scissors
  // each choice gets 1/3 chance based on where random number falls
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

// both choices as parameters to compare using if statements
// return win, lose, or tie based on result
const determineWinner = (playerChoice, computerChoice) => {
  // === checking if both choices are the same, return tie if true
  if (playerChoice === computerChoice) {
    return "tie";
  }

  // && both conditions must be true, || either set can be true
  // checking all 3 ways player can win
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    // return win if any of 3 conditions are true
    return "win";
  } else {
    // otherwise player loses
    return "lose";
  }
};

// update score based on result from each round
// result parameter is receiving win, lose, or tie when function is called
const updateScore = (result) => {
  // === checking which result matches
  // ++ adds 1 to matching score variable
  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    losses++;
  } else {
    ties++;
  }
  // no return needed, score variables updated directly
};

const handleSubmit = (event) => {
  // when form is submitted, stop page from refreshing
  event.preventDefault();

  // .value gets selected option from dropdown, save it to compare later
  const playerChoice = userChoice.value;

  // check if I'm getting the right choice
  console.log("your choice is:", playerChoice);

  // call function and save returned computer choice to compare later
  const computerChoice = getComputerChoice();

  // check if computer's random choice is working
  console.log("computer's choice is:", computerChoice);

  // pass both choices as arguments, save returned result in variable
  const result = determineWinner(playerChoice, computerChoice);

  // check if win, lose, or tie is returned correctly
  console.log("result:", result);

  // pass result as argument to update score after each round
  updateScore(result);

  // display player's choice and computer's choice on webpage
  playerResult.textContent = `You chose: ${playerChoice}`;
  computerResult.textContent = `Computer chose: ${computerChoice}`;

  // display win, lose, or tie result on webpage
  winnerResult.textContent = `Result: ${result}`;

  // display updated wins, losses, and ties on webpage
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  tiesDisplay.textContent = ties;

  // check if score is updating
  console.log("wins:", wins);
  console.log("losses:", losses);
  console.log("ties:", ties);
};

// listen for submit, handleSubmit runs when user clicks button
gameForm.addEventListener("submit", handleSubmit);
