// The following javascript must be used by an html file
// Javascript is useless by itself

// Functions are defined behaviors that can be activated

// Define the behavior
function sayHi(){
	console.log("Hi");
}



// Activate the behavior
//sayHi();



function sayHiTo(name){
	console.log("Hi " + name);
}
//sayHiTo("Tom");



var someName = "Steve";
//sayHiTo(someName);



function sayHiToName(){
	var name = document.getElementById("myName").value;
	console.log("Hi " + name);
}