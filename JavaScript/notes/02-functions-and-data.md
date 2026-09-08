# JavaScript — Functions and Data

## Functions

A function is a reusable block of code that runs only when called.

### Declaration

```javascript
function greet() {
    console.log("Hello!");
}

greet(); // call it
```

### Parameters and arguments

```javascript
function greet(name) {        // name = parameter
    console.log(`Hello, ${name}!`);
}

greet("Aashwin"); // "Aashwin" = argument
```

### Return values

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3); // 8
```

`return` stops the function — nothing after it runs.

### Default parameters

```javascript
function greet(name = "stranger") {
    console.log(`Hello, ${name}!`);
}

greet();          // Hello, stranger!
greet("Aashwin"); // Hello, Aashwin!
```

### Function expression

```javascript
const add = function(a, b) {
    return a + b;
};
```

### Arrow function

```javascript
const add = (a, b) => a + b;        // single expression — implicit return
const double = n => n * 2;          // single param — no parentheses needed
const sayHi = () => console.log("Hi!"); // no params — empty parens required
```

### Scope

```javascript
function myFunc() {
    let local = "only inside";
}
console.log(local); // ReferenceError

let global = "anywhere";
function myFunc() {
    console.log(global); // works
}
```

### Functions calling functions

```javascript
function square(n) { return n * n; }
function sumOfSquares(a, b) { return square(a) + square(b); }

sumOfSquares(3, 4); // 25
```

### Quick reference

| Concept           | Syntax                           |
|-------------------|----------------------------------|
| Declaration       | `function name() {}`             |
| Expression        | `const name = function() {}`     |
| Arrow             | `const name = (a, b) => a + b`   |
| Default param     | `function name(a = 10) {}`       |
| Return            | `return value;`                  |

---

## Variable Scope

### Global scope
Accessible everywhere.

### Function scope
Lives and dies with the function.

### Block scope
`let` and `const` inside `{}` stay inside that block.

```javascript
if (true) {
    let x = "block";
}
console.log(x); // ReferenceError
```

### var — the old way (avoid)

`var` ignores block scope — it leaks out of `if`, `for`, etc.

```javascript
if (true) {
    var x = "leaks out";
}
console.log(x); // "leaks out" — no error
```

`var` is also hoisted — available before its declaration line (as `undefined`). `var` is outdated — `let` and `const` are the standard now.

### Scope chain

JavaScript looks up the chain — inner can see outer, outer cannot see inner.

```javascript
let a = "global";
function outer() {
    let b = "outer";
    function inner() {
        console.log(a); // global — found up the chain
        console.log(b); // outer  — found up the chain
    }
}
```

| Keyword | Block scope | Hoisted     | Use it? |
|---------|-------------|-------------|---------|
| `var`   | No          | Yes (undefined) | No  |
| `let`   | Yes         | No          | Yes     |
| `const` | Yes         | No          | Yes     |

---

## Arrays

An ordered collection of values in a single variable.

```javascript
let fruits = ["apple", "banana", "mango"];

fruits[0]              // "apple" — zero-indexed
fruits[fruits.length - 1] // last element
fruits.length          // 3
fruits[1] = "grape"    // modify
```

### Adding and removing

```javascript
fruits.push("grape")    // add to end
fruits.pop()            // remove from end
fruits.unshift("kiwi")  // add to beginning
fruits.shift()          // remove from beginning
```

### Finding

```javascript
fruits.indexOf("banana")  // 1, or -1 if not found
fruits.includes("mango")  // true
```

### splice — remove/insert at any position

```javascript
fruits.splice(1, 1)            // remove 1 at index 1
fruits.splice(1, 0, "kiwi")    // insert at index 1
fruits.splice(1, 1, "kiwi")    // replace at index 1
```

### slice — extract without modifying

```javascript
fruits.slice(1, 3)   // elements at index 1 and 2
fruits.slice(-2)     // last 2 elements
```

### Sorting

```javascript
fruits.sort()                      // alphabetical (strings)
nums.sort((a, b) => a - b)         // ascending numbers
nums.sort((a, b) => b - a)         // descending numbers
fruits.sort((a, b) => a.localeCompare(b)) // case-insensitive strings
[...nums].sort((a, b) => a - b)    // sort without modifying original
```

### Combining

```javascript
fruits.join(", ")         // "apple, banana, mango"
[...arr1, ...arr2]        // combine with spread
arr1.concat(arr2)         // combine with concat
```

### Looping

```javascript
fruits.forEach(fruit => console.log(fruit));
```

### Functional methods

```javascript
// map — transform each element, returns new array
let doubled = [1,2,3].map(n => n * 2); // [2,4,6]

// filter — keep elements that pass, returns new array
let evens = [1,2,3,4].filter(n => n % 2 === 0); // [2,4]

// find — first match or undefined
let found = [5,12,8].find(n => n > 10); // 12

// every — all pass?
[2,4,6].every(n => n % 2 === 0); // true

// some — any pass?
[1,3,5,6].some(n => n % 2 === 0); // true

// reduce — boil to single value
[1,2,3,4,5].reduce((total, n) => total + n, 0); // 15
```

### Destructuring

```javascript
let [first, second, ...rest] = ["apple", "banana", "mango", "kiwi"];
// first = "apple", second = "banana", rest = ["mango", "kiwi"]

let [a, , c] = ["apple", "banana", "mango"]; // skip with comma
```

### Quick reference

| Method          | Modifies original? |
|-----------------|--------------------|
| `push` / `pop`  | Yes                |
| `unshift/shift` | Yes                |
| `splice`        | Yes                |
| `sort/reverse`  | Yes                |
| `slice`         | No                 |
| `concat`        | No                 |
| `map/filter`    | No                 |
| `find/every/some/reduce` | No      |

---

## Objects

Key-value pairs for grouping related data.

```javascript
let person = {
    name: "Aashwin",
    age: 19,
    city: "Lucknow"
};

person.name        // dot notation
person["name"]     // bracket notation — use when key is in a variable
person.email = "a@b.com"  // add property
delete person.city         // remove property
"name" in person           // true — check if exists
```

### Methods

```javascript
let person = {
    name: "Aashwin",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person.greet(); // Hi, I'm Aashwin
```

`this` refers to the object the method belongs to. Arrow functions don't have their own `this` so they don't work correctly as object methods.

### Looping

```javascript
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### Destructuring

```javascript
let { name, age, city = "Unknown" } = person; // default value if missing

let { name: fullName } = person; // rename on destructure
```

### Nested objects

```javascript
let person = {
    address: { city: "Lucknow", country: "India" }
};

person.address.city  // "Lucknow"

let { address: { city } } = person; // nested destructure
```

### Arrays of objects

```javascript
let students = [
    { name: "Aashwin", grade: "A" },
    { name: "Alice",   grade: "B" }
];

students[0].name                           // "Aashwin"
students.filter(s => s.grade === "A")      // A students only
students.map(s => s.name)                  // ["Aashwin", "Alice"]
```

### Copying

```javascript
let copy = { ...original };                         // shallow copy
let deep = JSON.parse(JSON.stringify(original));    // deep copy
```

### Object methods

```javascript
Object.keys(person)     // ["name", "age", "city"]
Object.values(person)   // ["Aashwin", 19, "Lucknow"]
Object.entries(person)  // [["name","Aashwin"], ...]

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

---

## Spread Operator

`...` expands an iterable into individual elements.

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

[...a, ...b]          // [1,2,3,4,5,6] — combine
[...a]                // copy — not a reference
Math.max(...a)        // 3 — spread into function args
[..."hello"]          // ["h","e","l","l","o"] — spread string
```

### Objects

```javascript
let copy = { ...original };
let merged = { ...defaults, ...userSettings }; // later keys win
let updated = { ...person, age: 20 };          // override property
```

### Rest vs Spread

```javascript
// Spread — expands outward
console.log(...[1,2,3]); // 1 2 3

// Rest — collects inward (in function params or destructuring)
function sum(...nums) {
    return nums.reduce((t, n) => t + n, 0);
}

let [first, ...rest] = [1,2,3,4]; // rest = [2,3,4]
let { name, ...others } = person;  // others = remaining properties
```

---

## Sorting

```javascript
// Default — alphabetical (breaks for numbers)
["banana","apple"].sort() // ["apple","banana"]
[10,1,5].sort()           // [1,10,5] — wrong!

// Numbers
nums.sort((a, b) => a - b) // ascending
nums.sort((a, b) => b - a) // descending

// Strings case-insensitive
arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

// Objects by property
students.sort((a, b) => a.grade.localeCompare(b.grade))
students.sort((a, b) => a.age - b.age)

// Without modifying original
let sorted = [...arr].sort((a, b) => a - b)
```

---

## Dates

```javascript
let now = new Date();           // current date/time
let d = new Date("2026-01-15"); // specific date

// Month is 0-indexed — January = 0, December = 11
let d2 = new Date(2026, 0, 15); // Jan 15 2026
```

### Getting components

```javascript
now.getFullYear()  // 2026
now.getMonth()     // 0–11
now.getDate()      // 1–31
now.getDay()       // 0–6 (0 = Sunday)
now.getHours()     // 0–23
now.getMinutes()   // 0–59
now.getSeconds()   // 0–59
now.getTime()      // milliseconds since Jan 1 1970
Date.now()         // same — simpler when you just need timestamp
```

### Formatting

```javascript
now.toDateString()         // "Tue Sep 01 2026"
now.toLocaleDateString()   // "9/1/2026"
now.toLocaleString()       // "9/1/2026, 10:30:00 AM"
now.toISOString()          // "2026-09-01T10:30:00.000Z"

now.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric",
    month: "long",  day: "numeric"
}); // "Tuesday, September 1, 2026"
```

### Date arithmetic

```javascript
let diff = future.getTime() - now.getTime(); // milliseconds
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
```

`.getTime()` should be used for equality checks — `===` directly on Date objects checks reference, not value.

---

## Closures

A closure is a function that remembers the variables from its outer scope after that scope has finished.

```javascript
function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

let counter = outer();
counter(); // 1
counter(); // 2 — count is remembered
```

### Data privacy

```javascript
function createCounter() {
    let count = 0;
    return {
        increment() { count++; },
        decrement() { count--; },
        getCount()  { return count; }
    };
}

let c = createCounter();
c.increment();
c.getCount(); // 1
c.count;      // undefined — private
```

### Function factory

```javascript
function multiplier(factor) {
    return n => n * factor;
}

let double = multiplier(2);
let triple = multiplier(3);
double(5); // 10
triple(5); // 15
```

### Loop gotcha — use let not var

```javascript
// var — all print 3
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 1000);

// let — prints 0, 1, 2
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 1000);
```

---

## ES6 Modules

Split code across files with `export` and `import`.

```html
<script type="module" src="index.js"></script>
```

### Named exports

```javascript
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;

// or at the bottom
export { add, PI };
```

### Named imports

```javascript
import { add, PI } from "./math.js";
import { add as mathAdd } from "./math.js"; // rename
import * as Math from "./math.js";          // all as object
```

### Default export

```javascript
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

```javascript
import greet from "./greet.js";   // no curly braces
import hello from "./greet.js";   // can name it anything
```

### Default + named

```javascript
import greet, { version } from "./utils.js";
```

### Module scope

Variables in a module are not global — they don't leak into other files.

| Syntax                              | What it does              |
|-------------------------------------|---------------------------|
| `export function foo() {}`          | Named export              |
| `export default function() {}`      | Default export            |
| `import { foo } from "./file.js"`   | Named import              |
| `import foo from "./file.js"`       | Default import            |
| `import * as obj from "./file.js"`  | Import all as object      |
