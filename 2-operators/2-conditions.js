let trueFlag = true;
let falseFlag = false;

if(trueFlag) {
    console.log('This will print!');
}

if(falseFlag) {
    console.log('This won\'t print :(');
}


let falseFlag = false;

if(falseFlag) {
    console.log("This won't print :(");
} else {
    console.log("We're in the else-block! This will print!");
}


/*
A value that coerces to true is referred to as “truthy”. 
One that coerces to false is “falsey”.

So how do we determine what a value will coerce to? 
It’s actually pretty simple. 
The following values are “falsey” and will coerce to false, 
meaning the code in the if-statement won’t run.

    false
    null
    undefined
    '' or "" (empty, 0-length string)
    0 (the number zero)
    NaN

All other values are truthy. 
This means that all numbers except 0 and NaN and all strings that are not empty are truthy.

*/


// Falsey values become true
console.log(!false);      // -> true
console.log(!'');         // -> true
console.log(!0);          // -> true
console.log(!null);       // -> true
console.log(!undefined);  // -> true
console.log(!NaN);        // -> true

// Truthy values become false
console.log(!true);      // -> false
console.log(!1);         // -> false
console.log(!'abc');     // -> false
console.log(!9999999);   // -> false
console.log(!'ha*UIHJ'); // -> false



let firstItem = true;
let secondItem = false;

if(firstItem || secondItem) {
    console.log('One or both of the items is truthy!');
} else {
    console.log('Neither of the items is truthy.');
}


let firstItem = true;
let secondItem = false;

if(firstItem && secondItem) {
    console.log('Both of the items are truthy!');
} else {
    console.log('One or both of the items is falsey.');
}


let firstItem = true;
let secondItem = false;

if(!firstItem && !secondItem) {
    console.log('Both of the items are falsey!');
} else {
    console.log('One or both of these items is truthy.');
}
