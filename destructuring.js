// node destructuring.js

// destructuring arrays
let ages = [30, 26, 27];
/*let john = ages[0];
let mary = ages[1];
let joe = ages[2];
*/
// becomes...
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alan: "accountant",
};

/*let mike = jobs.mike;
let jill = jobs.jill;
let alan = jobs.alan;
*/
// becomes...
let {mike, jill, alan} = jobs;
console.log(mike, jill, alan);

// destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecond] = languages;
console.log(johnNative, johnSecond)

// to skip items in the array, use commas e.g.:
let [, , maryNative, marySecond] = languages
console.log(maryNative, marySecond)

// to deconstruct using only property names:
let languages2 = {
    firstLang: "english",
    secondLang: "french",
    thirdLang: "spanish",
    fourthLang: "japanese",
};

let {firstLang, fourthLang} = languages2;
console.log(firstLang, fourthLang)

// using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [best, secondBest, ...others] = fruits;
console.log(best);
console.log(secondBest);
console.log(others);

let favouriteFood = {
    nick: "lasagne",
    akiko: "natto",
    scout: "ham",
    jim: "corn"
};

let {nick, akiko, ...rest} = favouriteFood;
console.log(nick);
console.log(akiko);
console.log(rest);