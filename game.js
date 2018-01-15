	//VARIABLES
	
	let choices = ["rock", "paper", "scissors"];
	let playerScore = 0;
	let computerScore = 0;

	//COMPUTER RANDOM CHOICE

	function computerPlay(choices) {
		let finalChoice = choices[Math.floor(Math.random() * 3)];
		return finalChoice;
	}

	//ONE ROUND

	function playRound(playerSelection, computerSelection) {
		playerSelection = playerSelection.toLowerCase();

		if (playerSelection == computerSelection) {return "Ohhhhh its a tie!" && alert("Ohhh its a tie!")}

		switch (playerSelection) {
			case "paper":
				return (computerSelection == "scissors") ? "Machine selects scissors, you lose!" && computerScore++ && alert("Machine selects scissors, you lose!") : "Machine selects rock, you win!" && playerScore++ && alert("Machine selects rock, you win!")
				break;
			case "rock":
				return (computerSelection == "paper") ? "Machine selects paper, you lose!" && computerScore++ && alert("Machine selects paper, you lose!") : "Machine selects scissors, you win!" && playerScore++ && alert("Machine selects scissors, you win!")
				break;
			default:
				return (computerSelection == "rock") ? "Machine selects rock, you lose!" && computerScore++ && alert("Machine selects rock, you lose!") : "Machine selects paper, you win!" && playerScore++ && alert("Machine selects paper, you win!")
		}
	
	}

	//GAME BEST OF FIVE

	function game() {
		for(let i = 0; i < 5; i++) {
			let playerSelection = prompt("Rock, paper or scissors?");
		
		let computerSelection = computerPlay(choices);
		playRound(playerSelection, computerSelection);

		}

		if (playerScore > computerScore) {
			alert("You win the game! Congratulations!");
		} else if (playerScore === computerScore) {
			alert("Ohhh its a draw! Well played!");
		} else {
			alert("The machine is too much for you!");
		}
		
	} 
	
