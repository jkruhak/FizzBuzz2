$(document).ready(function(){

	$("body").on("click", "#clear", function() {
		$("#output").empty();
		$("input#inputInteger").val("");
	});

	$("body").on("click", "#submitValue", function() {
		runFizzBuzz();
	});

});


var runFizzBuzz = function() {

    var userInput = document.getElementById("inputInteger").value;

	if (userInput === "") {
		alert("Please input a value.");
		return false;
	}
	if (!userInput.match(/^\d+$/)) {
		alert("You must input a numeric value.");
		return false;
	}
	else {
		fizzBuzz();
		return false;
	}
}

var fizzBuzz = function (number) {
	var inputNumber = +document.getElementById("inputInteger").value;
	var number = inputNumber;

	for(var count = 1; count <= number; count++) {
		if (count % 3 !== 0 && count % 5 !== 0) {
			$('#output').append('<li>' + count + '</li>');
		} 

		else if (count % 3 === 0 && count % 5 === 0){
			$('#output').append('<li>' +'fizz buzz'+'</li>');
		}

		else if (count % 3 === 0) {
			$('#output').append('<li>' + 'fizz' + '</li>');
		}	
		else if ( count % 5 === 0 ) {
			$('#output').append('<li>' + 'BUZZ' + '</li>');
		}
	}
}

