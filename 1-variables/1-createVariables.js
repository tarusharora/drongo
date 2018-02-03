let price = 100;
/* 
The variable number now has the value 10.

Note that we add a semicolon at the end.
This isn’t required, but it is highly recommended
*/


/*
Naming Variables

A variable name must follow these rules:

    Variable names must begin with a letter, $, or _
    Variable names can contain letters, numbers, _, and $
    Variables are case sensitive - number is different from Number
    Reserved JavaScript keywords (such as let and var) cannot be used as variable names

As long as we follow these rules, we can name a variable whatever we like. The following are valid JavaScript variable names.

*/


let x = 17;         // valid
let XYZ = 20;       // valid
let $ = 40;         // valid
let _ = 88;         // valid     
let _2 = 89;         // valid     
let 4_ = 5;          // invalid     
let $_$_$_ = 100;   // valid    
let Ab90$___a789 = 119;         // valid



/*
Numbers

Numbers are just what you’d expect and what we’ve been using in the examples above.
 9, 30, 924311933 are all numbers.
We can’t use commas, spaces, or other characters when we create numbers.
We have to use continuous digits.

*/

let number = 200;



/*
Strings

Strings are different.
We can think of them as the way we represent text in JavaScript. 
They’re created using the ' and " characters. 
For example, 
if we wanted to store a representation of the word Hello in JavaScript, 
we could write it two different ways


*/

let string = 'Hello';
let string2 = "Hello";

let lettersAndNumbers = 'abcd1234';
let symbols = '!@#$%^&*()_+|}{';
let emojis = '😀 🦋 🐖 🌵 🍄 🌍 🌞';


// Escape Characters
console.log('We\'re learning about escaping characters!');



// Booleans

let booleanTrue = true;
let booleanFalse = false;
