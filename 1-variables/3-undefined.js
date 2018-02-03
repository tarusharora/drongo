/*
undefined

undefined is meant to represent the idea that something doesn’t exist.
When we try to use a variable that has no value, we get undefined.


*/

let variable;
console.log(variable); // -> undefined


let variable = 'abc';
console.log(variable); // -> abc

variable = undefined;
console.log(variable); // -> undefined


/*
Although we can do this, 
we pretty much never want to assign a variable a value of undefined. 
It’s meant to show that something has gone wrong and some value is missing.

If we want to specify that something has no value, we should use null.

*/

/*
null

null is another variable type. 
It represents something that’s empty. 
The difference between null and undefined lies in they’re implemented by JavaScript and used by developers.

null is something that is safe to use and to assign to variables.



*/

let variable = null;
console.log(variable); // -> null


