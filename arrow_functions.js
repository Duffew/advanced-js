
// arrow functions with paramters
const addTwoNumbers = (a,b) => {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 8);
console.log(sum);

// single line arrow functions with parameters
// also valid (required with multiline returns)
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(7, 9);
console.log(sum2);

// implicit returns
const saySomething = message => console.log(message)
saySomething("Hi there!");

const sayHello = () => console.log("Hi!");
sayHello();

// returning multiple lines
const returnMultipleLines = () => (
    `<p>
    This is a mulitiline string.
    </p>`
)
console.log(returnMultipleLines());