// The following javascript must be used by an html file
// Javascript is useless by itself

// 1. if then statements perform different tasks based on whether something is true or not

if(true){
	//console.log("The condition was true");
}
else{
	// console.log("This section should not be activated")
}

if(false){
	//console.log("This will never show because the condition is false");
}
else{
	//console.log("This section activates instead")
}

// 2. Comparisons create true or false statements by comparing things

//console.log('4 == 4', 4 == 4);
//console.log('4 === 4', 4 === 4);
//console.log('4 == "4"' , 4 == "4");
//console.log('4 === "4"', 4 === "4");
//console.log('"abc" == "def"', "abc" == "def");

var statement = "abc";

//console.log('statement == "abc"', statement == "abc");
//console.log('statement == "def"', statement == "def");

// Create some true statements here



// 3. Operators
	
	// || is an 'or'. If one side is true, the whole expression is true

	//console.log(true || false)
	
	// && is an 'and'. Both sides need to be true for the whole expression to be true

	//console.log(true && false)

	// ! is 'not'. If it was true, it's now false and vice versa

	//console.log(!true)


	//Exercise:

	true || false

	false || false

	true && false

	true && true

	!false && true

	"abc" == 12 || 12 =="12"



// 4. If then

if(4 == 4){
	//console.log("4 is equal to 4");
}
else{
	//console.log("4 is not equal to 4");
}


var myStr = "my string"
if(myStr.length === 7){
	//console.log('"my string" is 7 characters long');
}
else
{
	//console.log('"my string" is not 7 characters long');
}



// Switch are useful for comparisons with multiple possibilities
switch("apple"){
	case "banana":
		console.log("It was a banana");
		break;
	case "apple": 
		console.log("It was an apple");
		break;
	case "orange":
		console.log("It was an orange");
		break;
	default:
		console.log("It wasn't found");
}