console.log("Hi Raf");

// The question:

// Write a function that reverses a string.

// Example clarifying questions:

// JavaScript has a .reverse() method, may I use that? Not for this problem.
// Will it ever receive anything other than a string? You may assume it always takes in a string.

let stringToReverse = "Hello";
let reversedString = "";

function stringReverser(string) {
    for (let i = string.length - 1; i >= 0 ; i--) {  // had this part initally wrong because I had the normal 0- 1 itteration did not start at the end of the length of I
        reversedString += string[i];  // this part I had correct
    }
    // return reversedString  //this was not needed but I added it anyway
}

stringReverser(stringToReverse);

console.log('Starter String', stringToReverse);
console.log('Reversed:', reversedString);

// Write a function that takes in a number. If the number is divisible by 3, return "Fizz". If the number is divisible by 5, return "Buzz". If the number is divisible by both 3 and 5, return "FizzBuzz". Otherwise, just return the number that was passed into the function.

// Example clarifying questions:

// Will they always be positive integers? Yes.
// Should it always return a string? No. It should return a number unless it is returning "Fizz", "Buzz", or "FizzBuzz".
// Example test cases:

// 1 -> 1
// 2 -> 2
// 3 -> Fizz
// 4 -> 4
// 5 -> Buzz
// 6 -> Fizz
// 10 -> Buzz
// 15 -> FizzBuzz

let fizzBuzz = ""; 

function fizzBuzzer (number) {
    if (number % 3 === 0) {
        fizzBuzz += 'Fizz';
    } else if (number % 5 === 0) {
        fizzBuzz += 'Buzz';
    } else {
        return number
    }
    return fizzBuzz
}

console.log("Should be Fizz: ",fizzBuzzer(3));
console.log("Should be Buzz: ",fizzBuzzer(5));
console.log("Should be FizzBuzz",fizzBuzzer(15));
console.log("Shloud be Number: ", fizzBuzzer(4));  // honestly this question was quite easy for me and I did not have any issue with it

// Is it a BLT?
// Write a function that accepts an array of ingredients, and determines whether they make a BLT sandwich. An array is a sandwich if the first and last items are both "bread", and the middle contains "bacon", "lettuce" and "tomatoes".

// Example clarifying questions:

// Will I always receive an array of string? Yes.
// Can the sandwich have additional ingredients? Yes, as long as they are inside the "bread"
// Can the ingredients be in any order? Yes, any order inside the "bread"
// Example test cases:
// ["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"] --> true
// ["bread", "lettuce", "bacon", "tomatoes"] --> false (missing "bread" at end)
// ["bread", "lettuce", "tomatoes", "bacon", "bread"] --> true
// ["bread", "lettuce", "tomatoes", "bacon", "bread", "cheese"] --> false ("cheese" is outside the "bread")