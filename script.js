const addTwoNumbers = (a,b) => {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 8);
console.log(sum);

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(7, 9);
console.log(sum2);

const saySomething = message => console.log(message)
saySomething("Hi there!");

const sayHello = () => console.log("Hi!");
sayHello();

const returnMultipleLines = () => (
    `<p>
    This is a mulitiline string.
    </p>`
)
console.log(returnMultipleLines());