/* a spread operator is three dots (...) 
that are used for copying the whole or part of an object
*/

// no spread operator
let arr1 = [1, 2, 3];
// make a 'copy' of array 1
let arr2 = arr1;
// add a new nuber to the second array
arr2.push(4)
console.log("Second array:", arr2);
console.log("First array:", arr1);
// the problem with the above is that the new number also gets pushed into arr1. to resolve...

// copying an array
let arr3 = [4, 5, 6];
// now use the spread operator (...) to get a unique copy of array 3
let arr4 = [...arr3];
arr4.push(8);
// now use the spread operator (...) to get a unique copy of array 3 and add a new number (7) at the same time
let arr5 = [...arr4, 10]
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);
console.log("Fifth array:", arr5);

// copying an object
let obj1 = { a: 1, b: 2, c: 3};
// copy and add new values at the same time
let obj2 = { ...obj1, d: 4}
console.log("Fisrt Object:", obj1);
console.log("Second Object:", obj2);