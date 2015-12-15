// The following javascript must be used by an html file
// Javascript is useless by itself

// Performs a simple math operation
function calculate(){

	// Gets the user's input from the html
	var expression = document.getElementById("myInput").value;
	// console.log(expression);

	// Step 0: remove all empty spaces from the string
	var cleanExpression = expression.replace(" ", "");

	

	// Step 1: turn the expression into an array 
	// Example: 1 + 43 = ["1", "+", "43"]
	// Hint: Create a new empty array and loop through the cleanExpression
	// Stitch together non-operators before pushing them into an array

	var expressionArr = [];
	var tempExpression = "";

	for(var i = 0; i < cleanExpression.length; i++){

		if(cleanExpression[i]=="+" || cleanExpression[i]=="-" || cleanExpression[i]=="*" || cleanExpression[i]=="/"){
			
		}

	}


	// Step 2: determine which sign is being used and perform the correct math operation
	// hint: use parseInt(string) to turn a string into a number
	var answer;

	switch(arr[1]){

	}





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


	// Challenge:
	    // Find a way to check for a valid entry

}