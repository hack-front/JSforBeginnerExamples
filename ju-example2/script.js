//In math, a function accepts input(s) and produces an output.
//A function in programming is very similar to a math function. 
//A function CAN accept input(s) and it CAN produce an output.
//"Side effects" possible.
//Anything in between the parantheses is an input. We call input parameter/argument (simplified).
//When a function wants to give out an output, the function requires 'return' keyword.

function helloWorld(){ //no input
	console.log('Hello World');
	//does not produce an output.
}
helloWorld();
//You can call the function by placing parantheses after the function name.

//Function Declaration

function greeting(name){ //name is our "input"

	console.log('Welcome ' + name +'!');
	//does not produce an output.
}

greeting('class');
greeting('Michelle');
greeting();

var sum = function(num1, num2){ //2 inputs

	var result = num1 + num2;
	return result;
	//return keyword gives out the output.
};

console.log(sum(3,7));



//WARNING: The function must be defined before you can call it. 
//This can get quite complex and is beyond the scope of this class (hoisting, scope, etc)

//Exercise: create a function called factorial that returns 
//factorial(5) = 5! = 5*4*3*2*1 = 120
//factorial(2) = 2! = 2*1 = 2
//factorial(1) = 1! = 1 = 1
//factorial(0) = 1 (By definition, 0! = 1)
var factorial = function(number){
	if(number <= 0){
		return 1;
	}

	var result = 1;
	for(var i=1; i <= number; i++){
		result *= i;
	}

	return result;
};

console.log(factorial(10));


//We've barely uncovered the surface of what JavaScript offers.
//In this section, we've barely uncovered the surface of function.
//We've simplified a lot of things in order to help you digest the concepts, and
//there are many important concepts that haven't been covered in this workshop.


//In future workshop(s), we will cover...
//constructor function, pseudoclassical instantiation pattern, lexical scope, callbacks and higher order functions,
//dynamic scope, shadowing, hoisting, IIFE, array-like arguments, async function, closures, etc
