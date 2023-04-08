const choices = ["rock", "paper", "scissors"];
let player_score = 0;
let computer_score = 0;
function play() {
    let player_choice = prompt("Choose one of the following: Rock, Paper or Scissors").toLowerCase();
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    if (player_choice == computer_choice) {
        return `"Draw!" Score stays at Your Score:${player_score} Computer Score:${computer_score}`;                                    
    } else if (player_choice == "rock" && computer_choice == "scissors") {
        player_score++
        return `"You Win! The computer chose ${computer_choice}, Score:${player_score} Computer Score:${computer_score}"`;
    } else if (player_choice == "paper" && computer_choice == "rock") {
        return `"You Win! The computer chose ${computer_choice}, Score:${player_score} Computer Score:${computer_score}"`;
        player_score++                  
    } else if (player_choice == "scissors" && computer_choice == "paper") {
        return `"You Win! The computer chose ${computer_choice}, Score:${player_score} Computer Score:${computer_score}"`;
        player_score++
    } else if (choices.includes(player_choice) == false) {
        return "That option is invalid";                    
    } else {
        computer_score++
        return `"You lose! The computer chose ${computer_choice}, Score:${player_score} Computer Score:${computer_score}"`;
    }            
}

function game() {
    for (let i = 0; i < 5; i++) {
        play();
    }
    if(player_score > computer_score) {
        alert(`Congratulations! You won the game!`);
    } else if (player_score < computer_score) {
        alert(`You lost the game, better luck next time.`)
    } else {
        alert(`The game is a draw.`)
    }
    }

game()