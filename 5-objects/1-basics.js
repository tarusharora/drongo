let jon = {
    firstName: 'Ron',
    lastName: 'Smith',
    age: 34,
    profession: 'Developer',
    married: true
};

console.log(jon); // ->
/* 
{ firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true }
*/






let jon = {
    firstName: 'Jon',
    lastName: 'Smith',
    age: 34,
    profession: 'Developer',
    married: true
};

console.log(jon['firstName']); // -> Jon
console.log(jon['age']); // -> 34



let jon = {
    firstName: 'Jon',
    lastName: 'Smith',
    age: 34,
    profession: 'Developer',
    married: true
};

jon.fullName = jon.firstName + jon.lastName;
jon['hasChildren'] = true;

console.log( jon ); // ->
/*
{ firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true,
  fullName: 'JonSmith',
  hasChildren: true }
*/


let obj = {};
console.log( obj.xyz ); // -> undefined