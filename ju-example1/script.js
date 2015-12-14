// The following javascript must be used by an html file
// Javascript is useless by itself

// Arrays
// The following javascript must be used by an html file
// Javascript is useless by itself

// Arrays

var arr = [1,2,3,4,5,6];

console.log(arr[0]); //1
console.log(arr[1]); //2
console.log(arr[2]); //3
console.log(arr[3]); //4
console.log(arr[4]); //5
console.log(arr[5]); //6
//Keep in mind that array begins with zero index.


//Doesn't above code look like you are repeating too much?
//What would you do if the array went up to 100? Would you really want to write the code 100 times?
//Is there a way to reduce rewriting redundant codes while executing the same task?
//The Answer is YES. 
//Loop allows us to 

var i=0;
while(i < arr.length){
	console.log(arr[i]);
}


//the following code is equivalent:
for(var i=0; i < arr.length; i++){
	console.log(arr[i]);
}
//for loop
//the parantheses following the 'for' keyword is divided into three parts. The three parts are separated with semi-colon.
//The first part initializes the loop. It's run exactly once at the very beginning of the loop.
//The second part is conditional statement. If the condition passes, we can run the code block/body in the for-loop.
//The third part determines what to do after each iteration/cycle of the loop. 
//Assigns what to do at the end of each cycle. i++ is equivalent to i = i + 1


//There is also do-while loop. Very much like the while loop except that do-while loop allows the code in the body to run at least once.
do {

}while(true);

var obj = {
	
};

//Exercise #1:
var letters = ['a','b','c','d','e'];
//reverse the order of the array using a loop (i.e. ['e','d','c','b','a'])


//Exercise #2: