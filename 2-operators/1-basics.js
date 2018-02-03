let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let division = num1 / num2;
let multiplication = num1 * num2;

console.log(addition);       // -> 15
console.log(subtraction);    // -> 5
console.log(division);       // -> 2
console.log(multiplication); // -> 50


console.log(5 % 1); // -> 0
console.log(5 % 2); // -> 1
console.log(5 % 3); // -> 2
console.log(5 % 4); // -> 1


let string1 = 'Hello ';
let string2 = 'there!';
console.log(string1 + string2); // -> Hello there!
console.log(string1 - string2); // -> NaN
console.log(string1 * string2); // -> NaN
console.log(string1 / string2); // -> NaN
console.log(string1 % string2); // -> NaN

/*

NaN is technically a number type variable, 
but it stands for Not-a-Number. 
It’s meant to show us that we messed up our math 
and attempted to perform some nonsensical operation.

*/

/*
Type Coercion

We can try this with other variable types as well. 
We usually get NaN, but sometimes, 
something a little unexpected happens.
*/


console.log(undefined - null); // -> NaN
console.log(undefined - 4); // -> NaN
console.log('abc' * undefined); // -> NaN
console.log(9 % null); // -> NaN
console.log(null + 4); // -> 4
console.log(undefined + 4); // -> NaN

/*
If it thinks it can safely convert something to another type and 
then perform its operation, it’ll do so. 
This is called type coercion.

In this case, it converts null to 0. Then it adds 0 and 4.

*/

console.log(null - 7);     // -> -7
console.log('abc' + null); // -> abcnull
console.log(20 + 'abc');   // -> 20abc
console.log(9 + true);     // -> 10

/*  

    null -> 0 (null -> number)
    null -> 'null' (null -> string)
    20 -> '20' (number -> string)
    true -> 1 (boolean -> number)

*/


let bool = true;
let num = 0;
console.log(bool - num);  // 1