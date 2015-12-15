//Loops

var arr = [1,2,3,4,5,6];

console.log(arr[0]); //1
console.log(arr[1]); //2
console.log(arr[2]); //3
console.log(arr[3]); //4
console.log(arr[4]); //5
console.log(arr[5]); //6
//Doesn't above code look like you are rewriting same code too much?
//And what would you do if you wanted to display up to 100 numbers? Would you really want to write the code 100 times?
//Is there another way to repeat a code without rewriting them?
//The Answer is YES.
//Loop is what allows us to REPEAT a chunk of code.

//Let's fix the code above:
//while

while(){
	//chunk of code
}

//for
for(;; ){
	//chunk of code
}


//For loop.
var obj = {
	key1: 'one',
	key2: 2,
	key3: 'three',
	key4: 4,
	key5: 'five'
};


for(var key in arr){
	console.log("index",key);
	console.log("The value stored at index " + key + " is " + arr[key]);
}
//iterating through an array with 'in' keyword is not recommended


//do...while
do {

}while(bool);




//Exercise #1: Reverse the string below:
var str = 'Reverse this string.';
//Insert code here








//Exercise #2: Generate a sum of the following numbers with a loop
var numbers = [3,-5,7,94,0,-88,43];
var sum = 0;

//Insert code here.

console.log(sum);