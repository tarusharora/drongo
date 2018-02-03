
// Assigning same variable with different value
let variable = 'abc';
console.log(variable); // -> abc

variable = 25;
console.log(variable); // -> 25

variable = false;
console.log(variable); // -> false


// Creating variables with same name (using var)
var variable = 'abc';
console.log(variable); // -> abc

var variable = 25;  
console.log(variable); // -> 25

var variable = false;
console.log(variable); // -> false


// Creating variables with same name (using let)
let variable = 'abc';
console.log(variable);

let variable = 25; // -> Compilation Error
console.log(variable);

let variable = false;
console.log(variable);



// copy variables
let variable = 'abc';
let variableCopy = variable;
variable = 'def';

console.log(variable); // -> def
console.log(variableCopy); // -> abc