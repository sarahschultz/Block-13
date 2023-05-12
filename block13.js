// Pseudocode the prompt

// Is truthy

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

// Values to test:
// Input Values	Expected Print
// "I am a string"	true
// false	"The boolean value false is falsy"
// null	"The null value is falsy"
// undefined	"undefined is falsy"
// 0	"The number 0 is falsy (the only falsy number)"
// ""	"The empty string is falsy (the only falsy string)"

// Our Pseudocode 
// Step 1: we want a function that runs options of the truthiness of a given value
function valuesToTest (value){
    // Step 2: our logic will be if the value is true do this, otherwise do the if else to check values, and lastly check last value if true (because if none of the above were true, we run the very last line of code).
 if (value === "") {
     console.log("The value is an empty string and is falsey");
     } else if (typeof value === "string" && value.length > 0) { 
        //this line is making the function skip to our last condition
     console.log("true")
    } else if (value === null) {
        console.log("The null value is falsy");
    } else if (value === undefined) {
        console.log("The data type undefined is falsey");
    } else if (value === 0) {
        console.log("The number 0 is falsey because is technically representative of nothing");
    } else if (value === false) {
        console.log("The boolean value is falsey");
    } else {
        console.log("Something in the function is messy");
    }
}
//Invoke function and change up values!
let test
// Because test is by nature undefined (we didn't say it anywhere previously, we know it'll be undefined)
// Continue with function invokation through the columns
valuesToTest ("I am a string");
valuesToTest (false);
valuesToTest (null);
valuesToTest (undefined);
valuesToTest (0);
valuesToTest ("");
// Yay, terminal check worked!

// Number Line
// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:
    // sum + " is less than -1000";
    // sum + " is a negative number";
    // sum + " is equal to 0";
    // sum + " is larger than 0";
    // sum + " is greater than 100";

// Want a function where the sum of 2 numbers will console.log information based on our 2 parameters
function numberLine (num1, num2) {
    let sum = num1 + num2;
    // set up our logic to perform the following checks based on our nums:
    if (sum > 100) {
    console.log(sum + " is less than -1000");
    } else if (sum < 0) {
        console.log(sum + " is a negative number");
    } else if (sum === 0) {
        console.log(sum + " is equal to 0");
    } else if (sum > 0) {
        console.log(sum + " is larger than 0");
    } else if (sum > 100) {
        console.log(sum + " is greater than 100");
// Here, basically if none of the above conditions work for our two parameters, tell me something is wrong.
    } else {
        console.log("Something is wrong with my function")
    }
}
// Invoke the function
numberLine(50, 51);
numberLine(99, -2);
numberLine(0, 101);
numberLine(500, -500);
numberLine(-1000, 0);
numberLine(-5, 0);
// Yay! Terminal check ran with no issues


// Greater Than Or Equal To 5
// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

function greaterThan5 (num1, num2) {
    // set up our logic to see if both parameters are > or = to 5:
    if (num1 >= 5 && num2 >= 5) {
    console.log("True, greater than or equal to 5");
        //We're only checking if these numbers are greater than 5, there are no other comparisons to perform.
// Here, basically if none of the above conditions work for our two parameters, tell me something is wrong.
    } else {
        console.log("False, both numbers are not greater than or equal to 5")
    }
}
greaterThan5(5,6);
greaterThan5(10,11);
greaterThan5(0,0);
greaterThan5(1000, -1000);
greaterThan5(6, 4)


// Pair and Compare
// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.


// We know we need two sets of two values
// We need a function to check these pairs
function pairCompare (val1, val2, val3, val4) { //when we invoke this, all 4 #'s regarless of pairing need to go into that invokation for the function to know what we're talking about to compare.
// We want to know if at least one of those pairs is truthy so let's set up the conditionals.
if (val1 === val2 || val3 === val4) {
    console.log("True")
} else {
    console.log("False")
}
}
//Basically, we really only had one condition, whether the pairs were true or false, so only if, and else was necessary.
// Invoke function to check value pairs:
pairCompare ("cat", "cat", 6, "6");
pairCompare ("five", 5, "dog", "dawg");
pairCompare (0, false, "horse", "horse");
pairCompare ("eight", "eight", "ate", "ate");
pairCompare (11, "eleven", "four", "for");
pairCompare ("cake", "cake", "pie", "pie")

//Tested in the terminal and we're working!
