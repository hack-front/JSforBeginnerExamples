// The following javascript must be used by an html file
// Javascript is useless by itself

// Arrays are reference data types

var firstArr = ["hello", "world", "goodbye"];
var secondArr = firstArr;

firstArr.push("planet");

//console.log(firstArr);
//console.log(secondArr);

secondArr[0] = "greetings";

//console.log(firstArr);
//console.log(secondArr);

// Accessing an item in the array

console.log(firstArr[0]);
console.log(firstArr[1]);
console.log(firstArr[2]);


// Taking out a part of an array using splice(start, length)

var arr = ["a", "b", "c", "d", "e", "f", "g"];
arr.splice(3, 2);
//console.log(arr);
