function runFizzBuzz() {
	var userInput = document.getElementById("inputInteger").value;

	if (userInput === "") {
		alert("Please input a value.");
		return false;
	}
	if (!userInput.match(/^\d+$/)) {
		alert("You must input a numeric value.");
		return false;
	}
	fizzBuzz();
	return true;
}


var fizzBuzz = function (number) {
	var inputNumber = +document.getElementById("inputInteger").value;
	var number = inputNumber;

	for(var count = 1; count <= number; count++) {
		if (count % 3 !== 0 && count % 5 !== 0) {
			document.write(count);
		} 

		else if (count % 3 === 0 && count % 5 === 0){
			document.write('fizz buzz');
		}

		else if (count % 3 === 0) {
			document.write('fizz');
		}	
		else if ( count % 5 === 0 ) {
			document.write('BUZZ');
		}
	}
}