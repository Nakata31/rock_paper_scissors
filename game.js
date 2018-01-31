	//VARIABLES
	
	let choices = ["rock", "paper", "scissors"];
	let playerScore = 0;
	let computerScore = 0;
	let result = "";
	
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

	

		function game () {
				
				if (playerScore > computerScore) {
				console.log("You win the game! Congratulations!");
				} else if (playerScore === computerScore) {
				console.log("Ohhh its a draw! Well played!");
				} else {
				console.log("The machine is too much for you!");
				} 
		}
		
	
	window.onload = function() {
		
		let button = document.querySelectorAll("#rock, #paper, #scissors")
		for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", function(e) {
			let playerSelection = this.id;
			console.log(playerSelection);
			let computerSelection = computerPlay(choices);
			console.log(computerSelection);
			playRound(playerSelection, computerSelection);
			console.log(playRound(playerSelection, computerSelection));
			game();
			console.log(game());
	})}};


	

	
