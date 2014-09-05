//Computer selects a random number from 0-100
var generated_number = Math.round(Math.random()*100);

// //Setting previous guess to zero
var previous_guess = 0;

var numGuesses= 0;
alert(generated_number);
function game () {

	//Prompt's User to make a guess
	var user_guess = prompt("Guess the number");

	//A function that checks for the validity of user input
	var check_validity = function (user_guess) {

		if (isNaN(user_guess)) {
			alert("You have to input a number from 0 to 100 to move on");
		}

		else if (user_guess < 0) {
			alert("The number you entered is less than zero, your input must span between 0 to 100 to continue");
		}

		else if (user_guess > 100) {
			alert("The number you entered is greater than 100, your input must span between 0 to 100 to continue");
		}

		else {
			return true;
		}

		return false;

	}

	if (!check_validity(user_guess)) {
		game();
	}

 	if (parseInt(user_guess) === generated_number) {
 		alert("Bull's Eye");
 	} else {
 		if(numGuesses === 0) {
 			alert("You are Hot (hey sexy)");

		} 
		else {
			var previous_range = Math.abs(generated_number - previous_guess);
	 		var current_range = Math.abs(generated_number - user_guess);

			if (previous_range < current_range) {
				alert("You are getting colder")
			} else if (previous_range > current_range) {
				alert("You are getting hotter")
			}


 			
		}
		previous_guess = user_guess
 		
 		numGuesses++;
		
		game();
 	}

}

game();