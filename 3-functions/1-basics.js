function printValue(someValue) {
    console.log('The item I was given is: ' + someValue);
}

printValue('abc');     // -> The item I was given is: abc
printValue('Hello!');  // -> The item I was given is: Hello!
printValue(6);         // -> The item I was given is: 6
printValue(false);     // -> The item I was given is: false

function printValues(value1, value2, value3) {
    console.log(value1 + ', ' + value2 + ', ' + value3);
}

printValues('abc', 123, true); // -> abc, 123, true
printValues('abc', 123); // -> abc, 123, undefined
printValues('abc'); // -> abc, undefined, undefined
printValues(); // -> undefined, undefined, undefined



function printValue(value) {
    let stringToPrint = 'The value I was given is: ' + value;
    console.log(stringToPrint);
}

printValue(10); // -> The value I was given is: 10
console.log(stringToPrint); // -> error




function printValue(value) {
    console.log(startString + value);
}

let startString = 'The value I was given is: ';
printValue(10); // -> The value I was given is: 10






function printValue(value) {
    console.log(startString + value);
}

printValue(10); // -> error: 'startString' is undefined
let startString = 'The value I was given is: ';





// Return statements


function add(num1, num2) {
    return num1 + num2;
}

let twenty = add(5, 15);
console.log(twenty); // -> 20



function add(num1, num2) {
    let newNumber = num1 + num2;
    return;
}

let twenty = add(5, 15);
console.log(twenty); // -> undefined




function print(item) {
    if (item === undefined) {
        console.log('No item was passed in!');
        return;
    }
  
    console.log('The item I was given is:', item);
}

print(10); // -> The item I was given is: 10
print(); // -> No item was passed in!



