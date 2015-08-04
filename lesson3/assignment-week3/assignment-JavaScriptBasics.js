// JAVASCRIPT BASICS (The Ultimate Cheat Sheet)

// 1. VARIABLES AND DATA TYPES (strings, numbers (integers and floats), booleans, unassigned);

var currency = "USD"; // string
var amount = 50; // number (integer)
var amount2 = 50.00 // number (float)


var num = 7; 
var example1 = num > 5;
var example2 = num == 3; 
var example3 = num !== "7"; // not equal value and not equal type
console.log(example1); // boolean (True)
console.log(example2); // boolean (False)
console.log(example3); // boolean (True)


var enigma; // undefined;



// FOR LOOP
var amount = 15;

for (var m = 1; m <= amount; m++) {
	console.log(m + " USD");
}



// IF STATEMENT
var name1 = "Connecticut";
var name2 = "Maine";

if (name1.length > name2.length) {
	console.log("It's a long name!")
} else {
	console.log("It's a short name...")
}



// FUNCTION WITH RETURN STATEMENT
// Converts Korean Won into US Dollars and returns the amount in USD;
function WONtoUSD(amount) {
	return amount*0.00086;
}
WONtoUSD(500000)



// FUNCION WITHOUT RETURN 
// Converts Korean Won into US Dollars and prints the amount in USD;
function WONtoUSD(amount) {
	console.log(amount*0.00086);
}
WONtoUSD(500000)



// 2. FAVORITE THINGS + LOOP
// The FOR loop iterates over the array and prints out "My favorite things..." in order;
var favoriteThings = ["traveling", "reading books", "coffee", "music", "dancing"];

for (var thing = 0; thing < favoriteThings.length; thing++) {
	console.log("My # " + (thing + 1) + " favorite thing is " + favoriteThings[thing] + ".");
}



// BONUS 
/* The FOR loop iterates the integers from 1 to 100 and 
prints out "Fizz" instead of the number for multiples of 3,
"Buzz" for the multiples of 5,
"FizzBuzz" for multiples of both 3 and 5;
*/

for (var num = 1; num <= 100; num++) {
	if (num%3 === 0 && num%5 ===0) {
		console.log("FizzBuzz");
	} else if (num%3 === 0) {
		console.log("Fizz");
	} else if (num%5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(num);
	}
}
 