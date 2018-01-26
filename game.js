	//VARIABLES
	
	let choices = ["rock", "paper", "scissors"];
	let playerScore = 0;
	let computerScore = 0;
	const buttons = document.querySelectorAll("button");
	
	//COMPUTER RANDOM CHOICE

	function computerPlay(choices) {
		let finalChoice = choices[Math.floor(Math.random() * 3)];
		return finalChoice;
	}

	//ONE ROUND

	function playRound(playerSelection, computerSelection) {
		
		if (playerSelection === "rock"){
           
           if (computerSelection === "rock"){
                return "draw";
           }
           else if (computerSelection === "paper"){
                return "lose";
           }
           else {
                return "win";
           }
		}

		if (playerSelection === "paper"){
           
           if (computerSelection === "paper"){
                return "draw";
           }
           else if (computerSelection === "scissors"){
                return "lose";
           }
           else {
                return "win";
           }
		}

		if (playerSelection === "scissors"){
           
           if (computerSelection === "scissors"){
                return "draw";
           }
           else if (computerSelection === "rock"){
                return "lose";
           }
           else {
                return "win";
           }
		}
	
	}


	buttons.forEach((button) => {
		buttons.addEventListener("click", function() {
			let computerSelection = computerPlay(choices);
			let playerSelection = button.id;
			let result = "";

			result = playRound(playerSelection, computerSelection);
			console.log(playerSelection);
			console.log(computerSelection);
	})}


	console.log(playRound(playerSelection, computerSelection));
	

	
