let playButton = document.querySelector("#play-button");
let heroSection = document.querySelector("#hero_section");
let gameScreen = document.querySelector("#game-screen");

playButton.addEventListener("click", () => {
    heroSection.classList.add("swipe-up"); // Move the background up
    setTimeout(() => {
        heroSection.style.display = "none"; // Hide background after animation
        gameScreen.style.display = "block"; // Show game screen
    }, 1000); // Matches transition time
});

let user_win = true;
let user_score = 0;
let AI_score = 0;
const userscore = document.querySelector("#userscore");
const AIscore = document.querySelector("#AIscore"); 

const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const play_game = (user_choice) => {
    console.log("User choice is:", user_choice);
    const computer_choice = gencompchoice();
    console.log("AI choice is:", computer_choice);
    
    let message = document.querySelector("#msg");

    if (user_choice === computer_choice) {
        message.innerText = "It's a draw!";
        return;
    }

    if (user_choice === "rock") {
        if (computer_choice === "paper") {
            message.innerText = "Player has been eliminated. Paper beats rock :(";
            message.style.color="deeppink";
            user_win = false;
        } else { // AI chose scissors
            message.innerText = "Passed. Rock beats scissors!";
            message.style.color="deeppink";
            user_win = true;
        }
    } 
    else if (user_choice === "paper") {
        if (computer_choice === "scissors") {
            message.innerText = "Player has been eliminated. Scissors cut paper :(";
            message.style.color="deeppink";
            user_win = false;
        } else { // AI chose rock
            message.innerText = "Passed. Paper beats rock!";
            message.style.color="deeppink";
            user_win = true;
        }
    } 
    else if (user_choice === "scissors") {
        if (computer_choice === "rock") {
            message.style.color="deeppink";
            message.innerText = "Player has been eliminated. Rock breaks scissors :(";
            user_win = false;
        } else { // AI chose paper
            message.innerText = "Passed. Scissors cut paper!";
            message.style.color="deeppink";
            user_win = true;
        }
    }

    if (user_win) { 
        user_score += 1;
        userscore.innerText = `${user_score}`; 
    } else {
        AI_score += 1;
        AIscore.innerText = `${AI_score}`; 
    }
};

const moves = document.querySelectorAll(".symbol");
moves.forEach((move) => {
    move.addEventListener("click", () => {
        const user_choice = move.getAttribute("id");
        play_game(user_choice);
    });
});
