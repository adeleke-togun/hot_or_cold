
//Computer selects a random number from 0-100
var generated_number = Math.round(Math.random()*100);
// alert(generated_number);

//Setting previous guess to zero
var previous_guess = 0;

var numGuesses = 0;

//hide the information paragraph under a button and display information only after button has been clicked
$(".info p").hide();
$(".info").append("<button>How to play</button>");
$(".info button").click(function(){
	$(".info p").show();
	$(this).remove();
});

//Reload page when the restart button is clicked
// $('#restart').click(function() {
//     location.reload();
// });

//Assign the guess button to run the game function
$(".guess").click(function(event){
		event.preventDefault();
		game();
});


var game = function() {

	var user_guess = $(".user_input").val();

	//A function that checks for the validity of user input
	var check_validity = function (user_guess) {

		if (isNaN(user_guess)) {
			$(".error_message p").html("You have to input a number from 0 to 100 to move on");
		}

		else if (user_guess < 0) {
			$(".error_message p").html("The number you entered is less than zero, your input must span between 0 to 100 to continue");
		}

		else if (user_guess > 100) {
			$(".error_message p").html("The number you entered is greater than 100, your input must span between 0 to 100 to continue");
		}

		else {
			return true;
		}

		return false;

	}

	if (!check_validity(user_guess)) {
		game();
	}

	var previous_range = Math.abs(generated_number - previous_guess);
	var current_range = Math.abs(generated_number - user_guess);


 	if (user_guess === generated_number) {
 		$(".response p").html("Perfecto!!! Great Job my man, the pizza was well made.");
 	}
 	else {
 		if(numGuesses === 0) {
 			$(".response p").html("Good start, quite hot, try again");
		} 
		else {

				if (previous_range < current_range) {
					
					$(".response p").html("oh No, You are getting Colder. Gustav is going to be mad if you ruin his Pizza")
				} 
				else if (previous_range > current_range) {
					$(".response p").html("You are getting hotter, but it's just not right. Hurry Try Try again.")
				}


 			
		}
		previous_guess = user_guess
		numGuesses++

 	}


}

