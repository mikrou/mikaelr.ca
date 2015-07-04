function run() {
if(confirm("Let's play Rock, Paper, Scissors, Lizard, Spock!")){
if(confirm("We'll play best of three rounds.")){
var userScore = 0;
var compScore = 0;
var findWinner = function(user, computer) {
	if(user === computer){
	if(confirm("You chose: "+userChoice +"\nComputer chose: "+comp+"\nit's a tie!"))
	return;
	else exit;
	}
	else if(userChoice === "rock"){
		if(comp === "paper")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\npaper covers rock, Computer wins!")){
			return;
			}
			else
				exit;
		}
		else if(comp === "scissors")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nrock smashes scissors, You win!")){	
			return;
			}
			else exit;
		}
		else if(comp === "lizard")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nrock crushes lizard, You win!")){
			return;
			}
			else exit;
		}
		else if (comp === "spock")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nspock vaporizes rock, Computer wins!")){
			return;
			}
			else exit;
		}
	}
			
	else if(userChoice === "paper"){
		if(comp === "rock")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp+ "\npaper covers rock, You win!")){
			return;	
			}
			else exit;
		}
		else if(comp === "scissors")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp+ "\nScissors cuts paper, Computer wins!")){	
			return;	
			}
			else exit;
		}
		else if(comp === "lizard")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp+ "\nlizard eats paper, Computer wins!")){
			return;
			}
			else exit;
		}
		else if(comp === "spock")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\npaper disproves spock, You win!")){
			return;
			}
			else exit;
		}
	}
	else if(userChoice === "scissors"){
		if(comp === "rock")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp + "\nrock smashes scissors, Computer wins!")){
			return;
			}
			else exit;
		}
		else if(comp === "paper")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp + "\nscissors cuts paper, You win!")){
			return;
			}
			else exit;
		}
		else if(comp === "lizard")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nscissors decapitates lizard, You win!")){
			return;
			}
			else exit;
		}
		else if(comp === "spock")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nspock smashes scissors, Computer wins!")){
			return;
			}
			else exit;
		}
	}
	else if(userChoice === "lizard"){
		if(comp === "rock")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nrock crushes lizard, Computer wins!")){
			return;
			}
			else exit;
		}
		else if(comp === "paper")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp + "\nlizard eats paper, You win!")){
			return;
			}
			else exit;
		}
		else if(comp === "scissors")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nscissors decapitates lizard, Computer wins!")){
			return;
			}
			else exit;
		}
		else if(comp === "spock")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nlizard poisons spock, You win!")){
			return;
			}
			else exit;
		}
	}
	else if(userChoice === "spock") {
		if(comp === "rock")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nspock vaporizes rock, You win!")){
			return;
			}
			else exit;
		}
		else if(comp === "paper")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\npaper disproves spock, Computer wins!")){
			return;
			}
			else exit;
		}
		else if(comp === "scissors")
		{
			userScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp + "\nspock smashes scissors, You win!")){
			return;
			}
			else exit;
		}
		else if(comp === "lizard")
		{
			compScore++;
			if(confirm("You chose: " + userChoice + "\nComputer chose: " + comp +"\nlizard poisons spock, Computer wins!")){
			return;
			}
			else exit;
		}
	}
	else {
		if(confirm("You made an invalid selection. Try again.")){
		return;
		}
		else exit;
	}
}


while(userScore < 2 && compScore < 2) {
var userChoice = prompt("What do you choose? 'rock', 'paper', 'scissors', 'lizard', or 'spock'?").toLowerCase();

var comp = Math.floor(Math.random()*5);

if(comp === 0)
	comp = "rock";
else if(comp === 1)
	comp = "paper";
else if(comp === 2)
	comp = "scissors";
else if(comp === 3)
	comp = "lizard";
else
	comp = "spock";

findWinner(userChoice, comp);
}

if(userScore == 2)
{
	alert("You are the winner! Congratulations!");
	if(confirm("Do you want to play again?"))
		run();

}
else
{
	alert("The computer is the winner. Better luck next time!");
	if(confirm("Do you want to play again?"))
		run();
}
}
}
}

