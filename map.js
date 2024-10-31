// node map.js

// using a 'for' loop
let nums = [1, 2, 3, 4, 5];
let results = [];
// use 'of' to iterate over the item VALUES but 'in' to iterate over the index position
for (let num of nums) {
    results.push(num * 2);
}

console.log("For Loop Results:" + results)
// now use the map() method
const timesTwo = function (num) {
    return num * 2;
};
const mapResults = nums.map(timesTwo);
console.log("Map Results:" + mapResults)

// simplified using map() - just pass the function is as a paramater
const simplified = nums.map(function (num) {return num * 2});
console.log("Simplified:" + simplified)

// simplified with map() and arrow function - simple and elegent
const arrow = nums.map(num => num * 2);
console.log("Arrow:" + arrow)

// using map() with objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds)