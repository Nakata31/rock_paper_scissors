	//VARIABLES
	
	let choices = ["rock", "paper", "scissors"];
	let playerScore = 0;
	let computerScore = 0;
	let result = "";
	let rounds = 5;

	
	//COMPUTER RANDOM CHOICE

	function computerPlay(choices) {
		let finalChoice = choices[Math.floor(Math.random() * 3)];
		return finalChoice;
	}

	//ONE ROUND

	function playRound(playerSelection, computerSelection) {
		
		if (playerSelection === "rock"){
           
           if (computerSelection === "rock"){
                result = "draw";

           }
           else if (computerSelection === "paper"){
                computerScore++;
                result = "lose";
           }
           else {
                playerScore++;
                result = "win";
           }
		}

		if (playerSelection === "paper"){
           
           if (computerSelection === "paper"){
                result = "draw";
           }
           else if (computerSelection === "scissors"){
                computerScore++;
                result = "lose";
           }
           else {
                playerScore++;
                result = "win";
           }
		}

		if (playerSelection === "scissors"){
           
           if (computerSelection === "scissors"){
                result = "draw";
           }
           else if (computerSelection === "rock"){
                computerScore++;
                result = "lose";
           }
           else {
                playerScore++;
                result = "win";
           }
		}
	
		return result;
	}

	
	// GAME FUNCTION

		function game () {
				
			let resultDisplay = document.querySelector("#result");
			let finalScore = document.querySelector("#finalscore");
			if (result === "win") {
			resultDisplay.textContent = "Congratulations! You won this round!";
			} else if (result === "lose") {
			resultDisplay.textContent = "Ohhh! You lost this round!";
			} else {
			resultDisplay.textContent = "Its a tie";
			} 

			finalScore.textContent = "You have" + " " + playerScore + " " + "points and the machine" +
			" " + computerScore;
		}

	// RESET GANE

		function reset () {
			let resultDisplay = document.querySelector("#result");
			let finalScore = document.querySelector("#finalscore");
			playerScore = 0;
			computerScore = 0;
			resultDisplay.innerHTML = "";
			finalScore.innerHTML = "";
		}
		
	
	// BUTTONS CONTROL

	window.onload = function() {
		
		let button = document.querySelectorAll("#rock, #paper, #scissors")
		for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", function(e) {
			let playerSelection = this.id;
			let computerSelection = computerPlay(choices);
			playRound(playerSelection, computerSelection);
			game();
			
	})}};


	

	
