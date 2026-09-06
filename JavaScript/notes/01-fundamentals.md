# JavaScript — Fundamentals

## Overview

We already saw that HTML creates the structure and CSS styles it. JavaScript adds **interactivity** — it makes things actually work.

Without JavaScript, a webpage is static. It just sits there. JavaScript is what makes a calculator calculate, a dropdown open, a form validate before submitting, or content update without reloading the page.

JS runs directly in the browser — no installation needed. Every browser has a JavaScript engine built in (Chrome uses V8, Firefox uses SpiderMonkey). You write the code, the browser runs it.

---

## Creating the Files

To tell your editor a file contains JavaScript, name it with the `.js` extension.

For a standard project you will typically have three files:

```
index.html
style.css
index.js
```

---

## Linking Everything Together

All three files are connected through `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1></h1>
    <script src="index.js"></script> <!-- always at the bottom -->
  </body>
</html>
```

The `<script>` tag goes at the **bottom of `<body>`** — HTML loads and renders first. Putting it in `<head>` would make the browser wait for JS before showing anything.

---

## Getting Output

### console.log

```javascript
console.log("hello world");
console.log('single quotes');
console.log(`backticks`);
```

Output appears in the browser's **Console** tab — right-click the page → Inspect → Console.

### window.alert

```javascript
window.alert("This is an alert");
```

Creates a pop-up dialog. Useful for quick testing, annoying in real projects.

---

## Variables

A variable is a container that holds a value. Declare with `let` or `const`.

```javascript
let x;
x = 100;

let y = 123; // declare and assign in one line
```

### Data types

```javascript
let age = 19;
console.log(typeof age);       // "number"

let firstName = "Aashwin";
console.log(typeof firstName); // "string"

let online = true;
console.log(typeof online);    // "boolean"
```

- **number** — any numeric value (`19`, `3.14`, `-5`)
- **string** — text in quotes (`"hello"`, `'world'`, `` `backtick` ``)
- **boolean** — `true` or `false` only

### Template literals

Backticks let you embed variables with `${}`:

```javascript
let age = 19;
console.log(`You are ${age} years old`); // You are 19 years old
```

### const

`const` cannot be reassigned. Use it for values that should never change.

```javascript
const PI = 3.14159;
PI = 420; // TypeError — Assignment to constant variable
```

By convention, constants are `ALL_CAPS`.

---

## Arithmetic Operators

| Operator | Description        | Example         |
|----------|--------------------|-----------------|
| `+`      | Addition           | `5 + 3` → `8`  |
| `-`      | Subtraction        | `5 - 3` → `2`  |
| `*`      | Multiplication     | `5 * 3` → `15` |
| `/`      | Division           | `6 / 2` → `3`  |
| `**`     | Exponent           | `2 ** 3` → `8` |
| `%`      | Modulo (remainder) | `7 % 2` → `1`  |

### Shorthand operators

```javascript
x += 1;  // x = x + 1
x -= 1;
x *= 2;
x /= 2;
x++;     // x = x + 1
x--;     // x = x - 1
```

### Operator precedence

1. Parentheses `()`
2. Exponents `**`
3. Multiplication `*`, Division `/`, Modulo `%`
4. Addition `+`, Subtraction `-`

```javascript
2 + 3 * 4    // 14 — multiplication first
(2 + 3) * 4  // 20 — parentheses first
```

---

## Accepting User Input

### Window prompt

```javascript
let username = window.prompt("What's your username?");
console.log(username); // always returns a string
```

### HTML text box

```html
<input id="myText" />
<button id="mySubmit">Submit</button>
<h1 id="myH1">Welcome</h1>
```

```javascript
document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
};
```

---

## Data Type Conversion

`window.prompt` always returns a string — convert before doing math.

```javascript
let age = window.prompt("How old are you?");
age = Number(age); // convert to number
age += 1;
console.log(age);  // correct addition now
```

### Conversion functions

```javascript
Number("25");   // 25
Number("pizza"); // NaN
String(42);     // "42"
Boolean("");    // false
Boolean("hi");  // true
```

| Original | `Number()` | `String()`  | `Boolean()` |
|----------|------------|-------------|-------------|
| `"25"`   | `25`       | `"25"`      | `true`      |
| `"pizza"`| `NaN`      | `"pizza"`   | `true`      |
| `0`      | `0`        | `"0"`       | `false`     |
| `""`     | `0`        | `""`        | `false`     |
| `true`   | `1`        | `"true"`    | `true`      |
| `false`  | `0`        | `"false"`   | `false`     |

- `NaN` = Not a Number — conversion failed
- `0` and `""` are **falsy** — become `false` when converted to boolean

---

## Math Object

```javascript
Math.PI   // 3.141592653589793
Math.E    // 2.718281828459045

Math.round(3.21)  // 3
Math.floor(3.99)  // 3 — always down
Math.ceil(3.01)   // 4 — always up
Math.trunc(3.99)  // 3 — remove decimal, no rounding

Math.pow(2, 3)    // 8
Math.sqrt(9)      // 3
Math.abs(-5)      // 5
Math.sign(-5)     // -1
Math.max(1, 5, 3) // 5
Math.min(1, 5, 3) // 1
Math.random()     // random decimal 0 to <1
```

Random integer in a range:

```javascript
let random = Math.floor(Math.random() * 10) + 1; // 1 to 10
```

---

## Conditionals

### if / else if / else

```javascript
let age = 25;

if (age >= 18) {
    console.log("Adult");
} else if (age <= 0) {
    console.log("Not born yet");
} else {
    console.log("Minor");
}
```

### Comparison operators

| Operator | Meaning               |
|----------|-----------------------|
| `===`    | Strict equal (use this) |
| `!==`    | Strict not equal      |
| `==`     | Loose equal (avoid)   |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

Always use `===` — `==` does type coercion and produces surprising results.

### Logical operators

```javascript
// AND — both must be true
if (age >= 18 && hasID) { }

// OR — at least one must be true
if (age < 13 || age > 65) { }

// NOT — inverts
if (!hasID) { }
```

### Switch

```javascript
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Midweek");
}
```

### Ternary operator

```javascript
let message = age >= 18 ? "Adult" : "Minor";
// condition ? valueIfTrue : valueIfFalse
```

---

## Checked Property

`.checked` returns `true`/`false` for checkboxes and radio buttons.

### Checkbox

```javascript
if (document.getElementById("myCheckbox").checked) {
    console.log("Checked");
}
```

### Radio buttons

```javascript
if (document.getElementById("creditCard").checked) {
    console.log("Credit card selected");
} else if (document.getElementById("paypal").checked) {
    console.log("PayPal selected");
}
```

`.value` gives what the attribute says. `.checked` tells you if it's actually selected.

---

## String Methods

```javascript
let str = "Hello, World!";

str.length           // 13
str.toUpperCase()    // "HELLO, WORLD!"
str.toLowerCase()    // "hello, world!"
str.trim()           // removes whitespace from both ends
str.trimStart()      // left side only
str.trimEnd()        // right side only
str.includes("World")    // true
str.startsWith("Hello")  // true
str.endsWith("!")         // true
str.indexOf("o")          // 4
str.lastIndexOf("o")      // 8
str.slice(7, 12)          // "World"
str.slice(-6)             // negative counts from end
str.replace("World", "JS")    // first match only
str.replaceAll("l", "r")      // all matches
str.split(",")                // split into array
"5".padStart(3, "0")          // "005"
"ha".repeat(3)                // "hahaha"
```

Chaining:

```javascript
"  Hello World  ".trim().toLowerCase(); // "hello world"
```

---

## Equality in JavaScript

| Operator     | Type check | Coercion | Use it?     |
|--------------|------------|----------|-------------|
| `==`         | No         | Yes      | Avoid       |
| `===`        | Yes        | No       | Yes — always |
| `!=`         | No         | Yes      | Avoid       |
| `!==`        | Yes        | No       | Yes         |
| `Object.is()`| Yes        | No       | NaN / -0    |

```javascript
5 == "5"   // true  — avoid
5 === "5"  // false — use this

Object.is(NaN, NaN) // true  — === gives false here
Number.isNaN(NaN)   // true  — correct way to check NaN
```

Objects and arrays compare by **reference**, not value:

```javascript
let a = { name: "Aashwin" };
let b = { name: "Aashwin" };
a === b  // false — different objects in memory
a === a  // true
```

---

## Loops

### while

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### do...while

Runs at least once — condition checked after.

```javascript
do {
    console.log(i);
    i++;
} while (i < 5);
```

### for

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### for...of — values of array/string

```javascript
for (let fruit of ["apple", "banana"]) {
    console.log(fruit);
}
```

### for...in — keys of object

```javascript
for (let key in { name: "Aashwin", age: 19 }) {
    console.log(key);
}
```

### break and continue

```javascript
// break — exit loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
}

// continue — skip this iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // odd numbers only
}
```

### Which to use

| Loop         | Use when                              |
|--------------|---------------------------------------|
| `for`        | Known number of iterations            |
| `while`      | Unknown count, loop until condition   |
| `do...while` | Must run at least once                |
| `for...of`   | Each value in array or string         |
| `for...in`   | Each key in object                    |
