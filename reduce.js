/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// in the reduce function there are two parameters: acc = accumulator, curr = current value
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr
// define the starting value for accumulation as 10
}, 10);
console.log(sum)

// re-write the above as one line
let sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property - ALWAYS SPECIFIY THE INITIAL VALUE FOR THE ACCUMULATOR
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);
  
  /* Grouping by a property, and totaling it too - use curly braces as 
  * we need more line of code and a return statement
  */
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log(experienceByProfession);