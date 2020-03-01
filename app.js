let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertWord(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertWord(playerChoice) + smallPlayerWord + " beats " + convertWord(computerChoice) + smallComputerWord + ". You win!";
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('green-glow')}, 300);
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertWord(playerChoice) + smallPlayerWord + " loses to " + convertWord(computerChoice) + smallComputerWord + ". You lose!";
    document.getElementById(playerChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('red-glow')}, 300);
}

function draw(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertWord(playerChoice) + smallPlayerWord + " equals " + convertWord(computerChoice) + smallComputerWord + ". It's a draw!";
    document.getElementById(playerChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('gray-glow')}, 300);
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click', function() {
    game("rock");
});

paper_div.addEventListener('click', function() {
    game("paper");
});

scissors_div.addEventListener('click', function() {
    game("scissors");
});
}

main();