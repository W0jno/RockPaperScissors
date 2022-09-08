const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("playBtn");
const rockPS = ["rock", "paper", "scissors"];
let userScore = document.getElementById("user-score");
let AIScore = document.getElementById("ai-score");
let userChoice = "";
let AIChoice = "";

document.addEventListener("DOMContentLoaded", (event) => {
	userScore.innerHTML = 0;
	AIScore.innerHTML = 0;
});

const AIMove = () => {
	AIChoice = Math.floor(Math.random() * rockPS.length);
	console.log(rockPS[AIChoice]);
};
AIMove();

btns.forEach((e) => {
	e.addEventListener("click", (i) => {
		userChoice = i.target.id.toString();
	});
});

const Battle = () => {
	//AI GAINS POINT

	if (
		(userChoice === "paper" && rockPS[AIChoice] === "scissors") ||
		(userChoice === "rock" && rockPS[AIChoice] === "paper") ||
		(userChoice === "scissors" && rockPS[AIChoice] === "rock")
	) {
		result.innerHTML = `${rockPS[AIChoice]} beats ${userChoice}. AI wins!`;
		AIScore.innerHTML++;
		AIMove();
	}
	//USER GAINS POINT
	else if (
		(userChoice === "scissors" && rockPS[AIChoice] === "paper") ||
		(userChoice === "paper" && rockPS[AIChoice] === "rock") ||
		(userChoice === "rock" && rockPS[AIChoice] === "scissors")
	) {
		result.innerHTML = `${userChoice} beats ${rockPS[AIChoice]}. You win!`;
		userScore.innerHTML++;
		AIMove();
	}
	//DRAW
	else {
		//console.log(`USER: ${rockPS[AIChoice]}`);
		result.innerHTML = "DRAW!";
		AIMove();
	}
};
submitBtn.addEventListener("click", () => {
	Battle();
});
