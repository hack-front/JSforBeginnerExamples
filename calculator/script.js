// The following javascript must be used by an html file
// Javascript is useless by itself

// Performs a simple math operation
function calculate(){

	// Gets the user's input from the html
	var expression = document.getElementById("myInput").value;
	// console.log(expression);

	// Step 0: remove all empty spaces from the string
	var cleanExpression;


	// Step 1: determine which sign is being used


	// Step 2a: extract the strings which is not an operator and turn them into numbers
	parseInt("");

	// Step 2b: perform the correct math operation
	var answer = 0;



	// Step 3: display the answer in the answer section
	document.getElementById("myResult").innerHTML = answer;

}


// Performs math operation with 
function advancedCalculate(){

	// Gets the user's input from the html
	var expression = document.getElementById("myInput").value;
	// console.log(expression);

	// Step 0: remove all empty spaces from the expression
	var cleanExpression;


	// Step 1: turn the expression into an array 
	// Example: 1 + 43 + 15 - 2 = ["1", "+", "43", "+", "15", "-", "2"]
	// Hint: Create a new empty array and loop through the cleanExpression
	// Stitch together non-operators before pushing them into an array

	var expressionArr = [];
	var tempExpression = "";

	for(var i = 0; i < cleanExpression.length; i++){



	}



	// Step 2: perform the multiplication/division first
	// Hint: Loop through the expressionArr and look for * or /
	// Perform the operation, change one entry and splice out the others




	// Step 3: display the answer in the answer section
	document.getElementById("myResult").innerHTML = expressionArr[0];

}