// The following javascript must be used by an html file
// Javascript is useless by itself

// Arrays

    [1, 2, 3, 4, 5, 12, 53, 3, 12, 3];
    ["hi", "this", "is", "an", "array"];
    [4, "mixed", 31, "32", "up", true];

// You can console.log arrays

	//console.log([2, 4, "displayed"]);


// Creating an empty array

	var firstArr = [];

	console.log(firstArr);


// Adding to an existing array
	
	firstArr[0] = "New Word";
	firstArr[1] = "Look it up";

	console.log(firstArr);

	firstArr.push("Third entry");
	//console.log(firstArr);

	firstArr.unshift("Second addition");
	//console.log(firstArr);


// Removing from an existing array
	
	firstArr.pop();
	//console.log(firstArr);

	firstArr.shift();
	//console.log(firstArr);

	