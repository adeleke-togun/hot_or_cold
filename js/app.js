//Computer selects a random number from 0-100
var generated_number = Math.round(Math.random()*100);

//Setting previous guess to zero
var previous_guess = 0


 function game () {

	//Prompt's User to make a guess
	var user_guess = prompt("Guess the number");

	//A function that checks for the validity of user input
	var check_validity = function (user_guess) {

		if (isNaN(user_guess)) {
			alert("You have to input a number from 0 to 100 to move on")
		}

		else if (user_guess < 0) {
			alert("The number you entered is less than zero, your input must span between 0 to 100 to continue")
		}

		else if (user_guess > 100) {
			alert("The number you entered is greater than 100, your input must span between 0 to 100 to continue")
		}

	}

	check_validity(user_guess);

	//test the level of correctness of the guess
 	var correct_o_meter = (user_guess / generated_number) * 100;

 	 if (user_guess === 100) {
		prompt("Bull's eye, you win")
	}

	else {
 			if (user_guess > correct_o_meter) {
 				alert("You are getting Hotter")
 			}

			else if (user_guess < correct_o_meter) {
 				alert("You are getting colder")
 			} 
 		}

 	previous_guess = guess;

 }
 game();

