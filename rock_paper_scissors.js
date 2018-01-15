	
	let choices = ["rock", "paper", "scissors"];
	let playerScore = 0;
	let computerScore = 0;

	
	function computerPlay(choices) {
		let finalChoice = choices[Math.floor(Math.random() * 3)];
		return finalChoice;
	}


	function playRound(playerSelection, computerSelection) {
		playerSelection = playerSelection.toLowerCase();

		if (playerSelection == computerSelection) {return "Tie"}

		switch (playerSelection) {
			case "paper":
				return (computerSelection == "scissors") ? "Loss" && computerScore++ : "Win" && playerScore++;
			case "rock":
				return (computerSelection == "paper") ? "Loss" && computerScore++ : "Win" && playerScore++;
			default:
				return (computerSelection == "rock") ? "Loss" && computerScore++ : "Win" && playerScore++;
		}
	
	}

	function game() {
		for(let i = 0; i < 5; i++) {
			let playerSelection = prompt("Elige tu arma");
			if(![" ", "scissors", "rock", "paper"]) {
				return prompt("Otro valor");
			}
		
		let computerSelection = computerPlay(choices);
		playRound(playerSelection, computerSelection);

		}

		if (playerScore > computerScore) {
			alert("Victory");
		} else if (playerScore === computerScore) {
			alert("Draw");
		} else {
			alert("Defeat");
		}
		
	} 
	
