let array = [ 10, 'abc', false, 25, 'Hi!'];
// indexes:   0     1      2    3    4

console.log(array[0]); // -> 10
console.log(array[1]); // -> abc
console.log(array[2]); // -> false
console.log(array[3]); // -> 25
console.log(array[4]); // -> Hi!




// test message 2
let array = [10, 'abc', false, 25, 'Hi!'];
console.log(array.length); // -> 5



let array = ['a', 'b', 'c'];
console.log(array); // -> ['a', 'b', 'c']

array[0] = 0;
console.log(array); // -> [0, 'b', 'c']

array[1] = 1;
console.log(array); // -> [0, 1, 'c']

array[2] = 2;
console.log(array); // -> [0, 1, 2]



let array = ['a', 'b', 'c'];
array[3] = 3;
array[5] = 3;
console.log(array); // -> ['a', 'b', 'c', 3, undefined, 3]



let arr = ['abc', 'def'];

arr.push('ghi', 'jkl');
console.log(arr); // -> [ 'abc', 'def', 'ghi', 'jkl' ]



let arr = ['abc', 'def', 'ghi'];
let lastItem = arr.pop();

console.log(lastItem); // -> ghi
console.log(arr); // -> [ 'abc', 'def' ]



let arr = ['abc', 'def', 'ghi'];
let firstItem = arr.shift();

console.log(firstItem); // -> abc
console.log(arr); // -> [ 'def', 'ghi' ]



let arr = ['abc', 'def'];
arr.unshift('ghi', 'jkl');
console.log(arr); // -> [ 'ghi', 'jkl', 'abc', 'def' ]




var fruits = ['Apple', 'Banana'];

fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1






  fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]


var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]



var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
