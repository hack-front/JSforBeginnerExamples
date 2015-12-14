// The following javascript must be used by an html file
// Javascript is useless by itself

// Strings are a primitive type

var myFirstStr = "The first string in this script. Wow."

// Getting the length of a string

console.log(myFirstStr.length);

// Getting a smaller section of a string
// substring(beginning, end)
// substr(beginning, length)

var myShorterStr = myFirstStr.substring(4, 6);

console.log(myShorterStr);


//Try to isolate each word in the following string using either substring or substr

var newString = "The practice we do today makes perfect";



// Replacing a section of a string

myFirstStr.replace(string, "motivator");
