
var actions = {

	previous_guess: 0,
	numGuesses: 0,
	generated_number:null,



	//Initialize function
	initialiaze: function() {
		actions.generated_number = Math.round(Math.random()*100);
		console.log(actions.generated_number);
		actions.user_input = $(".user_input");
			actions.initEvents();
		$(".info p").hide();
		$(".info").append("<button>How to play</button>");
		$(".info").on('click', 'button', function(){
			$(".info p").show();
			$(this).remove();
		});
	},

	//A function that listens for events
	initEvents: function() {
		$(document).on("click", ".guess",actions.game);
	},

	//Error Message function
	showmsg: function(msg,status) {
		$(".error_message").html(msg);
		return status;
	},

	//A function to test the validity of the user input 
	validate: function(input) {
		if (isNaN(input)) {
			return actions.showmsg ("Your have to input a number from 0 to 100 to play this game",false);
		}
		else if (input < 0) {
			return actions.showmsg ("Your input is less than 0, read the damn instructions",false);
		}
		else if (input > 100) {
			return actions.showmsg ("Your input is greater than 100, read the damn instructions",false);
		}
		else if (input.length < 1) {
			return actions.showmsg ("You have to guess a number o play the game",false);
		}
		else return true
	},

	game: function(e) {

		e.preventDefault();
		var input = actions.user_input.val().trim();
		var previous_range = Math.abs(actions.generated_number - actions.previous_guess);
		var current_range = Math.abs(actions.generated_number - input);
		input = parseInt(input,10);

		//Call the validate function on user's input
		if(!actions.validate(input)) {
			return;
		}
		//The game
		if (input === actions.generated_number) {
			$('.sprites').css("background-image", "url(img/correct.png)");
 			$(".response p").html("Perfecto!!! Great Job my man, the pizza was well made.");
	 	}
	 	else {
	 		if(actions.numGuesses === 0) {
	 			//console.log(actions.numGuesses);
	 			$(".response p").html("Good start, quite hot, try again");
			} 
			else {
					if (previous_range < current_range) {
						$('.sprites').css("background-image", "url(img/angry.jpg)");
						$(".response p").html("oh No, You are getting Colder. Gustav is going to be mad if you ruin his Pizza")
					} 
					else if (previous_range > current_range) {
						$('.sprites').css("background-image", "url(img/hotter.png)");
						$(".response p").html("You are getting hotter, but it's just not right. Hurry Try Try again.")
					}
					else {
						$(".response p").html("You entered the same input")
					}

				}
			actions.numGuesses++
			actions.previous_guess = input;
		}
	}
}
$(document).ready(actions.initialiaze);