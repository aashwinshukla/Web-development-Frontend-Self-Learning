# JavaScript Basics

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
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" /> <!-- link to CSS -->
  </head>
  <body>
    <h1></h1>
    <h2></h2>
    <p></p>

    <script src="index.js"></script> <!-- link to JS, always at the bottom -->
  </body>
</html>
```

```css
/* style.css */
body {
  font-family: Verdana;
  font-size: 2em;
}
```

The `<script>` tag goes at the **bottom of `<body>`**, just before `</body>`. This way the HTML loads and renders first — if there's a JS error, at least the page structure is visible. Putting it in `<head>` would make the browser wait for the JS to load before showing anything.

---

## Getting Output

### console.log

The main way to print output in JavaScript is `console.log()`. You won't see it on the webpage — it appears in the browser's developer console.

```javascript
// index.js
console.log(`hello`);
console.log('i like pizza');
console.log("hello world");
```

All three quote styles work — single `'`, double `"`, and backticks `` ` ``. Backticks are the most flexible (explained later), but all three are valid.

To see the output:
1. Open your page with Live Server
2. Right-click anywhere on the page → **Inspect**
3. Go to the **Console** tab — your output appears there

### window.alert

This creates a pop-up dialog on the page with the text inside.

```javascript
// index.js
window.alert(`This is an alert`);
```

Useful for quick testing but annoying in real projects — don't overuse it.

---

## Putting Content on the Page

Instead of hardcoding text in HTML, you can set it from JavaScript using `document.getElementById()`.

First, give your HTML elements an `id`:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="myH1"></h1>   <!-- id so JS can find it -->
    <p id="myP"></p>       <!-- id so JS can find it -->

    <script src="index.js"></script>
  </body>
</html>
```

Then in JavaScript, grab those elements by their `id` and set their content:

```javascript
// index.js
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like solving and making things`;
```

The browser will display `Hello` as an `<h1>` and the second string as a `<p>` — even though the HTML tags were empty. JavaScript filled them in.

This is the foundation of how JavaScript talks to the page — find an element, then do something with it.

## Variables

A variable is a container that holds a value. It needs to be declared before use, and two variables with the same name cannot be declared in the same scope.

```javascript
// index.js
let x;
x = 100;
// OR declare and assign in one line
let y = 123;

console.log(x);
console.log(y);
```

### Data types

JavaScript has a few basic data types. You can check what type a value is using `typeof`.

```javascript
let age = 19;
console.log(typeof age);       // number

let firstName = "Aashwin";
console.log(typeof firstName); // string

let online = true;
console.log(typeof online);    // boolean
```

- **number** — any numeric value (`19`, `3.14`, `-5`)
- **string** — text wrapped in quotes (`"hello"`, `'world'`, `` `backtick` ``)
- **boolean** — only two values: `true` or `false`

Strings can contain letters, numbers, and symbols — but numbers stored as strings can't be used for arithmetic.

### Template literals

Backticks (`` ` ``) allow you to embed variables directly inside a string using `${}`. This is called a template literal.

```javascript
let age = 19;
console.log(`You are ${age} years old`);
// output: You are 19 years old
```

### Putting variables on the page

```javascript
// index.js
let fullName = "Aashwin Shukla";
let age = 19;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is: ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Are you a student: ${isStudent}`;
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
    <script src="index.js"></script>
  </body>
</html>
```

---

## Arithmetic Operators

Used to perform math on numbers.

| Operator | Description       | Example          |
|----------|-------------------|------------------|
| `+`      | Addition          | `5 + 3` → `8`   |
| `-`      | Subtraction       | `5 - 3` → `2`   |
| `*`      | Multiplication    | `5 * 3` → `15`  |
| `/`      | Division          | `6 / 2` → `3`   |
| `**`     | Exponent (power)  | `2 ** 3` → `8`  |
| `%`      | Modulo (remainder)| `7 % 2` → `1`   |

```javascript
let students = 30;

students = students + 1;  // 31
students = students - 1;  // 30
students = students * 2;  // 60
students = students / 2;  // 30
students = students ** 2; // 900
students = students % 2;  // 0
```

### Shorthand assignment operators

Instead of writing `students = students + 1` you can shorten it:

```javascript
students += 1;   // same as students = students + 1
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;
```

For incrementing or decrementing by 1 specifically:

```javascript
students++;   // same as students += 1
students--;   // same as students -= 1
```

### Operator precedence

When multiple operators are in one expression, JavaScript follows this order:

1. Parentheses `()`
2. Exponents `**`
3. Multiplication `*`, Division `/`, Modulo `%`
4. Addition `+`, Subtraction `-`

```javascript
let result = 2 + 3 * 4;    // 14, not 20 — multiplication first
let result2 = (2 + 3) * 4; // 20 — parentheses first
```

## Accepting User Input

There are two ways to accept input from a user:

1. **Window prompt** — quick and easy, but looks ugly and is rarely used in real projects
2. **HTML text box** — the proper way, used in actual websites

### Window prompt

```javascript
// index.js
let username;
username = window.prompt("What's your username?");
console.log(username);
```

A dialog box pops up asking the user to type something. Whatever they type is stored as a **string** in the variable.

### HTML Text Box

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="myH1">Welcome</h1>

    <label>Username: </label>
    <input id="myText" /><br /><br />
    <button id="mySubmit">Submit</button>

    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
};
```

- `.value` reads whatever the user typed into the input field
- `.onclick` assigns a function that runs when the button is clicked
- When the user clicks Submit, the `<h1>` text updates to greet them by name

---

## Data Type Conversion

Sometimes you need to change a value from one type to another. This comes up a lot with user input — `window.prompt` always returns a string, even if the user types a number.

### The problem

```javascript
let age = window.prompt("How old are you?");
age += 1;
console.log(age, typeof age);
// if user types 25, output is "251" — string concatenation, not math
```

`window.prompt` returns a string. Adding `1` to a string just glues them together instead of doing arithmetic.

### The fix — convert to a number first

```javascript
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);
// now output is 26 — actual addition
```

### Converting between types

JavaScript gives you three conversion functions: `Number()`, `String()`, and `Boolean()`.

```javascript
let x = "pizza";
let y = 42;
let z = "";

x = Number(x);    // NaN — "pizza" can't be converted to a number
y = String(y);    // "42" — number becomes a string
z = Boolean(z);   // false — empty string is falsy
```

**What to expect from each conversion:**

| Original value | `Number()`  | `String()`   | `Boolean()` |
|----------------|-------------|--------------|-------------|
| `"25"`         | `25`        | `"25"`       | `true`      |
| `"pizza"`      | `NaN`       | `"pizza"`    | `true`      |
| `0`            | `0`         | `"0"`        | `false`     |
| `""`           | `0`         | `""`         | `false`     |
| `true`         | `1`         | `"true"`     | `true`      |
| `false`        | `0`         | `"false"`    | `false`     |

Key things to note:
- `NaN` stands for **Not a Number** — it's what you get when a conversion to number fails (like trying to convert `"pizza"`)
- Any non-empty string is `true` when converted to boolean
- `0` and `""` (empty string) are `false` when converted to boolean — these are called **falsy** values

### Constants

`let` lets you reassign a variable anytime. But some values should never change — like `PI`. If someone (or you by accident) reassigns it, the whole program breaks in a subtle way that's hard to debug.

That's where `const` comes in. Once assigned, it cannot be reassigned.

```javascript
// with let — nothing stops you from accidentally changing it
let pi = 3.14159;
pi = 420.69; // no error, silently breaks your math
```

```javascript
// with const — JavaScript throws an error if you try to reassign
const PI = 3.14159;
PI = 420.69; // TypeError: Assignment to constant variable
```

By convention, constants are written in `ALL_CAPS` to signal that the value should never change.

Here's a full circle circumference calculator using `const`:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="myH1">Enter Radius:</h1>

    <label>Radius: </label>
    <input id="myText" /><br /><br />
    <button id="mySubmit">Submit</button>

    <h3 id="myResult"></h3>

    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myResult").textContent = circumference + " cm";
};
```

---

## Counter Program

A practical example that brings together `const`, `onclick`, and updating the page — a simple counter with increase, decrease, and reset buttons.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <label id="countLabel">0</label><br />
    <div id="btnContainer">
      <button id="decreaseBtn" class="buttons">Decrease</button>
      <button id="resetBtn" class="buttons">Reset</button>
      <button id="increaseBtn" class="buttons">Increase</button>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```

```css
/* style.css */
#countLabel {
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}

#btnContainer {
    text-align: center;
}

.buttons {
    padding: 10px 20px;
    color: white;
    font-size: 1.5em;
    background-color: hsl(214, 100%, 74%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}

.buttons:hover {
    background-color: hsl(214, 100%, 56%);
}
```

```javascript
// index.js
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};
```

The DOM references (`decreaseBtn`, `resetBtn`, etc.) are `const` because you never need to point them at a different element — the element stays the same, only `count` changes. `count` is `let` because its value changes on every click.

## Math Object

JavaScript has a built-in `Math` object with constants and methods for common mathematical operations.

### Constants

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045 — Euler's number
```

### Rounding methods

```javascript
let x = 3.21;

Math.round(x);  // 3 — rounds to nearest integer (up if .5 or above)
Math.floor(x);  // 3 — always rounds down
Math.ceil(x);   // 4 — always rounds up
Math.trunc(x);  // 3 — removes the decimal, no rounding
```

### Power, root, and logarithm

```javascript
let x = 3.21;
let y = 2;

Math.pow(x, y);  // 10.3041 — x to the power of y (same as x ** y)
Math.sqrt(x);    // 1.7916 — square root of x
Math.log(x);     // 1.1663 — natural logarithm of x (base e)
```

### Trigonometry

```javascript
Math.sin(x);  // sine of x (in radians)
Math.cos(x);  // cosine of x
Math.tan(x);  // tangent of x
```

Note: these work in **radians**, not degrees. To convert degrees to radians: `degrees * (Math.PI / 180)`.

### Other useful methods

```javascript
Math.abs(-5);        // 5 — absolute value, removes the negative sign
Math.sign(-5);       // -1 — returns -1 (negative), 0, or 1 (positive)
Math.max(1, 5, 3);   // 5 — largest value from the list
Math.min(1, 5, 3);   // 1 — smallest value from the list
Math.random();       // random decimal between 0 (inclusive) and 1 (exclusive)
```

`Math.random()` is very commonly used. To get a random whole number in a range:

```javascript
// Random integer from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
```

### Quick reference

| Method           | What it does                              | Example → Result        |
|------------------|-------------------------------------------|-------------------------|
| `Math.round(x)`  | Rounds to nearest integer                 | `3.21` → `3`            |
| `Math.floor(x)`  | Rounds down                               | `3.99` → `3`            |
| `Math.ceil(x)`   | Rounds up                                 | `3.01` → `4`            |
| `Math.trunc(x)`  | Removes decimal, no rounding              | `3.99` → `3`            |
| `Math.pow(x, y)` | x to the power of y                       | `2, 3` → `8`            |
| `Math.sqrt(x)`   | Square root                               | `9` → `3`               |
| `Math.abs(x)`    | Absolute value                            | `-5` → `5`              |
| `Math.sign(x)`   | Sign of the number (-1, 0, or 1)          | `-5` → `-1`             |
| `Math.max(...)`  | Largest value from arguments              | `1, 5, 3` → `5`         |
| `Math.min(...)`  | Smallest value from arguments             | `1, 5, 3` → `1`         |
| `Math.random()`  | Random decimal between 0 and 1            | `0.4829...`             |


---

## Random Number Generator

A practical project using `Math.random()`, `Math.floor()`, user input, and DOM manipulation — all things covered so far.

The user enters a minimum and maximum number, clicks a button, and a random number in that range appears on the page.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Random Number Generator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Random Number Generator</h1>

    <label>Min: </label>
    <input id="minInput" type="number" /><br /><br />

    <label>Max: </label>
    <input id="maxInput" type="number" /><br /><br />

    <button id="generateBtn">Generate</button>

    <h2 id="result"></h2>

    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

```javascript
// index.js
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.onclick = function() {
    const min = Number(document.getElementById("minInput").value);
    const max = Number(document.getElementById("maxInput").value);

    if (min > max) {
        result.textContent = "Min can't be greater than Max";
    } else {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = randomNum;
    }
};
```

### How the formula works

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

Breaking it down step by step with `min = 1` and `max = 10` as an example:

1. `Math.random()` — gives a decimal from `0` up to (but not including) `1`, e.g. `0.743`
2. `(max - min + 1)` — the size of the range, `10 - 1 + 1 = 10`
3. `Math.random() * 10` — scales the decimal to `0` up to `9.999...`
4. `Math.floor(...)` — removes the decimal, giving a whole number from `0` to `9`
5. `+ min` — shifts the range up so it starts at `1` instead of `0`, giving `1` to `10`

The `+ 1` inside the range makes it **inclusive** on both ends — both `min` and `max` can actually be generated.

### The if/else check

```javascript
if (min > max) {
    result.textContent = "Min can't be greater than Max";
} else {
    // generate the number
}
```

This is basic input validation — if the user enters something that doesn't make sense (like min 10, max 2), the program catches it and shows a message instead of producing a nonsense result. Always good practice.


## Conditionals

Conditionals let your program make decisions — run different code depending on whether something is true or false.

### if / else if / else

```javascript
let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site");
} else if (age <= 0) {
    console.log("You are not born yet");
} else {
    console.log("You are not old enough to enter this site");
}
```

- `if` — checks the condition. If `true`, runs its block and skips the rest.
- `else if` — checked only if the `if` above was `false`. You can chain as many as you need.
- `else` — runs only if every condition above was `false`. It's the fallback. No condition needed.

Only one block ever runs — JavaScript goes top to bottom, finds the first `true` condition, runs it, and stops.

### Comparison operators

These are used inside conditions to compare values.

| Operator | Meaning                        | Example           |
|----------|--------------------------------|-------------------|
| `==`     | Equal in value (loose)         | `5 == "5"` → `true`  |
| `===`    | Equal in value AND type (strict) | `5 === "5"` → `false` |
| `!=`     | Not equal (loose)              | `5 != 3` → `true` |
| `!==`    | Not equal (strict)             | `5 !== "5"` → `true` |
| `>`      | Greater than                   | `10 > 5` → `true` |
| `<`      | Less than                      | `3 < 7` → `true`  |
| `>=`     | Greater than or equal          | `5 >= 5` → `true` |
| `<=`     | Less than or equal             | `4 <= 3` → `false`|

**Always prefer `===` over `==`**. The loose `==` does type conversion behind the scenes which leads to unexpected results. `===` checks both value and type — no surprises.

```javascript
console.log(5 == "5");   // true  — loose, converts types
console.log(5 === "5");  // false — strict, different types
```

### Logical operators

Used to combine multiple conditions.

| Operator | Meaning | True when                         |
|----------|---------|-----------------------------------|
| `&&`     | AND     | Both conditions are true          |
| `\|\|`   | OR      | At least one condition is true    |
| `!`      | NOT     | The condition is false (inverts it) |

```javascript
let age = 25;
let hasID = true;

// AND — both must be true
if (age >= 18 && hasID) {
    console.log("Entry allowed");
}

// OR — at least one must be true
if (age < 13 || age > 65) {
    console.log("Discounted ticket");
}

// NOT — inverts the condition
if (!hasID) {
    console.log("No ID, no entry");
}
```

### Nested if statements

You can put an `if` inside another `if` for more specific checks.

```javascript
let age = 20;
let hasTicket = true;

if (age >= 18) {
    if (hasTicket) {
        console.log("Welcome in");
    } else {
        console.log("You need a ticket");
    }
} else {
    console.log("You must be 18 or older");
}
```

Keep nesting shallow — if you find yourself three or four levels deep, it's usually a sign the logic needs to be restructured.

### Switch statement

`switch` is cleaner than a long chain of `else if` when you're checking one variable against many exact values.

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Midweek");
}
```

- Each `case` checks if the variable matches that value.
- `break` exits the switch after a match. Without it, execution falls through to the next case.
- Two cases with no `break` between them (Saturday and Sunday above) share the same block — a useful pattern for grouping.
- `default` is the fallback if nothing matches — equivalent to `else`.

`switch` uses strict equality (`===`) internally, so types must match too.

### Ternary operator

A compact shorthand for a simple `if / else` — useful when you just need to assign one of two values.

```javascript
// Regular if/else
let message;
if (age >= 18) {
    message = "Adult";
} else {
    message = "Minor";
}

// Same thing as a ternary
let message = age >= 18 ? "Adult" : "Minor";
```

Syntax: `condition ? valueIfTrue : valueIfFalse`

Keep ternaries simple — one condition, one line. If the logic is more complex, use a regular `if/else` instead.

## Checked Property

---

## Checked Property

When working with checkboxes and radio buttons, you can't use `.value` to know if one is selected — `.value` just gives you the value attribute regardless of whether it's checked or not. Instead you use `.checked`, which returns `true` if selected and `false` if not.

### Checkbox

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <input type="checkbox" id="myCheckbox" />
    <label for="myCheckbox">I agree to the terms</label><br /><br />
    <button id="myBtn">Submit</button>
    <p id="myResult"></p>

    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js
const myBtn = document.getElementById("myBtn");
const myCheckbox = document.getElementById("myCheckbox");
const myResult = document.getElementById("myResult");

myBtn.onclick = function() {
    if (myCheckbox.checked) {
        myResult.textContent = "Terms accepted";
    } else {
        myResult.textContent = "Please accept the terms first";
    }
};
```

`.checked` returns `true` or `false` — so you can use it directly as the condition in an `if` statement without comparing it to anything.

---

### Radio Buttons

Radio buttons come in a group — only one can be selected at a time. They share the same `name` attribute to form that group. You check each one individually with `.checked`.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <input type="radio" id="creditCard" name="payment" value="credit card" />
    <label for="creditCard">Credit Card</label><br />

    <input type="radio" id="debitCard" name="payment" value="debit card" />
    <label for="debitCard">Debit Card</label><br />

    <input type="radio" id="paypal" name="payment" value="PayPal" />
    <label for="paypal">PayPal</label><br /><br />

    <button id="myBtn">Confirm</button>
    <p id="myResult"></p>

    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js
const myBtn = document.getElementById("myBtn");
const myResult = document.getElementById("myResult");

myBtn.onclick = function() {
    const creditCard = document.getElementById("creditCard");
    const debitCard = document.getElementById("debitCard");
    const paypal = document.getElementById("paypal");

    if (creditCard.checked) {
        myResult.textContent = `Payment method: ${creditCard.value}`;
    } else if (debitCard.checked) {
        myResult.textContent = `Payment method: ${debitCard.value}`;
    } else if (paypal.checked) {
        myResult.textContent = `Payment method: ${paypal.value}`;
    } else {
        myResult.textContent = "Please select a payment method";
    }
};
```

- All three radio buttons share `name="payment"` — that's what groups them so only one can be selected.
- You check each one with `.checked` and read its label with `.value`.
- The final `else` handles the case where the user clicks Confirm without selecting anything.

### `.checked` vs `.value` — the difference

```javascript
// .value always returns the value attribute, selected or not
document.getElementById("creditCard").value;   // "credit card" — always

// .checked tells you if it's actually selected
document.getElementById("creditCard").checked; // true or false
```

Use `.value` to get what it says, `.checked` to know if it's ticked.



---

## String Methods

Strings have built-in methods — functions you can call directly on them to get information or produce a new modified string. The original string is never changed.

```javascript
let str = "Hello, World!";
```

---

### Length

Not a method but a property — returns the number of characters in the string.

```javascript
console.log(str.length); // 13
```

---

### Case

```javascript
str.toUpperCase(); // "HELLO, WORLD!"
str.toLowerCase(); // "hello, world!"
```

Useful for case-insensitive comparisons:

```javascript
let input = "YeS";
if (input.toLowerCase() === "yes") {
    console.log("Confirmed");
}
```

---

### Trimming whitespace

Removes spaces (and tabs/newlines) from the start and end of a string. Very common when dealing with user input.

```javascript
let messy = "   hello world   ";

messy.trim();       // "hello world"     — both sides
messy.trimStart();  // "hello world   "  — left side only
messy.trimEnd();    // "   hello world"  — right side only
```

---

### Checking contents

```javascript
let str = "Hello, World!";

str.includes("World");      // true  — checks if substring exists anywhere
str.startsWith("Hello");    // true  — checks the beginning
str.endsWith("!");          // true  — checks the end
```

All three return `true` or `false`, so you can use them directly in `if` conditions:

```javascript
if (str.includes("World")) {
    console.log("Found it");
}
```

---

### Finding position

```javascript
str.indexOf("o");      // 4  — index of first occurrence, -1 if not found
str.lastIndexOf("o");  // 8  — index of last occurrence
```

Indexes start at `0`. Returns `-1` if the substring is not found — useful for checking existence before proceeding.

---

### Extracting parts

```javascript
let str = "Hello, World!";

str.slice(7, 12);     // "World"  — from index 7 up to (not including) 12
str.slice(7);         // "World!" — from index 7 to the end
str.slice(-6);        // "orld!" — negative counts from the end

str.substring(7, 12); // "World"  — similar to slice, but no negative indexes
```

`slice` is the more flexible and modern choice — use it over `substring`.

---

### Replacing

```javascript
str.replace("World", "JavaScript");  // "Hello, JavaScript!" — replaces first match only
str.replaceAll("l", "r");            // "Herro, Worrd!"      — replaces every match
```

You can also use a regex for more powerful matching, but that's a separate topic.

---

### Splitting into an array

Splits a string into an array of pieces, divided at the separator you specify.

```javascript
let csv = "apple,banana,mango,grape";
csv.split(","); // ["apple", "banana", "mango", "grape"]

let sentence = "Hello World";
sentence.split(" ");  // ["Hello", "World"]
sentence.split("");   // ["H","e","l","l","o"," ","W","o","r","l","d"] — every character
```

---

### Padding

Adds characters to the start or end to reach a desired length. Useful for formatting output.

```javascript
"5".padStart(3, "0");  // "005" — pad left to length 3
"5".padEnd(3, "0");    // "500" — pad right to length 3
```

---

### Repeat

```javascript
"ha".repeat(3); // "hahaha"
```

---

### Chaining methods

Since each method returns a new string, you can chain them:

```javascript
let input = "   Hello World   ";
let cleaned = input.trim().toLowerCase().replace("world", "JavaScript");
// "hello JavaScript"
```

---

### Quick reference

| Method                  | What it does                                      | Example → Result               |
|-------------------------|---------------------------------------------------|--------------------------------|
| `.length`               | Number of characters                              | `"hello".length` → `5`         |
| `.toUpperCase()`        | All uppercase                                     | `"hi"` → `"HI"`                |
| `.toLowerCase()`        | All lowercase                                     | `"HI"` → `"hi"`                |
| `.trim()`               | Remove whitespace from both ends                  | `" hi "` → `"hi"`              |
| `.includes(str)`        | Check if substring exists                         | `true` / `false`               |
| `.startsWith(str)`      | Check if string starts with                       | `true` / `false`               |
| `.endsWith(str)`        | Check if string ends with                         | `true` / `false`               |
| `.indexOf(str)`         | Index of first match, -1 if not found             | `"hello".indexOf("l")` → `2`   |
| `.slice(start, end)`    | Extract part of a string                          | `"hello".slice(1,3)` → `"el"`  |
| `.replace(old, new)`    | Replace first match                               | `"aabbaa".replace("a","x")` → `"xabbaa"` |
| `.replaceAll(old, new)` | Replace all matches                               | `"aabbaa".replaceAll("a","x")` → `"xxbbxx"` |
| `.split(sep)`           | Split into array                                  | `"a,b".split(",")` → `["a","b"]` |
| `.padStart(len, char)`  | Pad left to reach length                          | `"5".padStart(3,"0")` → `"005"` |
| `.padEnd(len, char)`    | Pad right to reach length                         | `"5".padEnd(3,"0")` → `"500"`  |
| `.repeat(n)`            | Repeat the string n times                         | `"ha".repeat(2)` → `"haha"`    |

---

## Equality in JavaScript

JavaScript has more than one way to check equality, and they behave very differently. Getting this wrong is one of the most common sources of bugs.

---

### `==` — Loose equality

Compares values **after converting types** to match. This is called type coercion — JS tries to make both sides the same type before comparing.

```javascript
5 == "5"       // true  — number and string, JS converts "5" to 5
0 == false     // true  — false converts to 0
1 == true      // true  — true converts to 1
null == undefined  // true  — special case, only these two are loosely equal
"" == false    // true  — both coerce to 0
0 == ""        // true  — both coerce to 0
```

The results are often surprising and hard to reason about. Avoid `==` in real code.

---

### `===` — Strict equality

Compares both **value and type**. No type conversion happens. This is what you should use by default.

```javascript
5 === "5"          // false — same value, different types
5 === 5            // true
0 === false        // false — number vs boolean
null === undefined // false — different types
"" === false       // false
```

Simple rule: **always use `===` unless you have a specific reason not to.**

---

### `!=` — Loose inequality

The opposite of `==`. Returns `true` if values are not equal after type conversion.

```javascript
5 != "5"   // false — they are loosely equal, so != is false
5 != 6     // true
```

---

### `!==` — Strict inequality

The opposite of `===`. Returns `true` if value or type differ. Use this instead of `!=`.

```javascript
5 !== "5"  // true  — different types
5 !== 5    // false — same value and type
```

---

### `Object.is()` — Same-value equality

Works almost exactly like `===` but handles two edge cases differently.

```javascript
Object.is(5, 5);       // true
Object.is(5, "5");     // false

// The two edge cases where it differs from ===
Object.is(NaN, NaN);   // true  — === returns false for this
Object.is(0, -0);      // false — === returns true for this
```

`NaN === NaN` is `false` in JavaScript — one of the language's quirks. If you ever need to check if something is `NaN`, use `Number.isNaN()` or `Object.is(value, NaN)`.

```javascript
let x = NaN;
x === NaN;          // false — doesn't work
Number.isNaN(x);    // true  — correct way
Object.is(x, NaN);  // true  — also works
```

---

### Equality with objects and arrays

Primitive values (numbers, strings, booleans) are compared by **value**. Objects and arrays are compared by **reference** — meaning whether they point to the exact same thing in memory, not whether they look the same.

```javascript
// Primitives — compared by value
5 === 5          // true
"hello" === "hello"  // true

// Objects — compared by reference
let a = { name: "Aashwin" };
let b = { name: "Aashwin" };
let c = a;

a === b  // false — same content, but different objects in memory
a === c  // true  — both point to the exact same object
```

Same applies to arrays:

```javascript
[1, 2, 3] === [1, 2, 3]  // false — two separate arrays in memory
```

To compare object or array contents, you need to check each property/element individually, or use `JSON.stringify()` as a quick workaround:

```javascript
JSON.stringify(a) === JSON.stringify(b)  // true — compares the string representation
```

---

### Summary

| Operator      | Type check | Coercion | Use it?              |
|---------------|------------|----------|----------------------|
| `==`          | No         | Yes      | Avoid                |
| `===`         | Yes        | No       | Yes — default choice |
| `!=`          | No         | Yes      | Avoid                |
| `!==`         | Yes        | No       | Yes                  |
| `Object.is()` | Yes        | No       | For NaN / -0 checks  |

---

## Loops

Loops let you run the same block of code repeatedly without writing it out multiple times. JavaScript has several types — each suited for different situations.

---

### while loop

Repeats as long as the condition is `true`. The condition is checked **before** each iteration.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
// 1, 2, 3, 4, 5
```

Use `while` when you don't know in advance how many times you'll loop — you just loop until something changes.

```javascript
// Keep asking until valid input
let input = "";
while (input !== "quit") {
    input = window.prompt("Type something (or 'quit' to stop):");
}
```

---

### do...while loop

Same as `while`, except the code block runs **at least once** — the condition is checked **after** the first iteration.

```javascript
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
// 1, 2, 3, 4, 5
```

The difference shows when the condition starts out false:

```javascript
let count = 10;

// while — never runs because condition is false from the start
while (count <= 5) {
    console.log(count); // never executes
}

// do...while — runs once regardless
do {
    console.log(count); // prints 10
} while (count <= 5);
```

Use `do...while` when you always need to run the code at least once — like showing a menu before checking if the user wants to exit.

---

### for loop

The most common loop. Best when you know exactly how many times you want to iterate.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4
```

The three parts inside `for(...)`:
1. `let i = 0` — initializer, runs once before the loop starts
2. `i < 5` — condition, checked before each iteration
3. `i++` — update, runs after each iteration

```javascript
// Count down
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Count by 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}
```

---

### for...of loop

Iterates over the **values** of an iterable — arrays, strings, etc. Cleaner than a regular `for` loop when you just need each value.

```javascript
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
// apple
// banana
// mango
```

Works on strings too — iterates character by character:

```javascript
let name = "Aashwin";

for (let char of name) {
    console.log(char);
}
// A, a, s, h, w, i, n
```

---

### for...in loop

Iterates over the **keys** (property names) of an object.

```javascript
let person = {
    name: "Aashwin",
    age: 19,
    city: "Lucknow"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: Aashwin
// age: 19
// city: Lucknow
```

- `key` gives you the property name (`"name"`, `"age"`, `"city"`)
- `person[key]` uses that key to get the value

`for...in` can also be used on arrays (it gives you the indexes), but `for...of` is preferred for arrays.

---

### break and continue

These give you control over loop flow.

**`break`** — exits the loop immediately.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// 0, 1, 2, 3, 4 — stops when i hits 5
```

**`continue`** — skips the current iteration and moves to the next one.

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
// 1, 3, 5, 7, 9 — skips even numbers
```

Both work in `while`, `do...while`, `for`, `for...of`, and `for...in`.

---

### Nested loops

A loop inside another loop. The inner loop completes fully for each iteration of the outer loop.

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// ... and so on
```

---

### Which loop to use

| Loop         | Use when                                                      |
|--------------|---------------------------------------------------------------|
| `for`        | You know how many times to loop                               |
| `while`      | You loop until a condition changes, count unknown             |
| `do...while` | Same as while but must run at least once                      |
| `for...of`   | You need each value from an array or string                   |
| `for...in`   | You need each key from an object                              |

---

## Number Guessing Game

A practical project using everything covered so far — `Math.random()`, `Math.floor()`, variables, `const`, conditionals, loops, DOM manipulation, and `.checked`.

The computer picks a random number between 1 and 100. The user keeps guessing until they get it right.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Number Guessing Game</h1>
    <p>I'm thinking of a number between 1 and 100</p>

    <label>Your guess: </label>
    <input type="number" id="guessInput" /><br /><br />
    <button id="guessBtn">Guess</button>
    <button id="resetBtn">New Game</button>

    <p id="result"></p>
    <p id="attempts"></p>

    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

```javascript
// index.js
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
let gameOver = false;

guessBtn.onclick = function() {
    if (gameOver) {
        result.textContent = "Game over. Click New Game to play again.";
        return;
    }

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptCount++;
    attempts.textContent = `Attempts: ${attemptCount}`;

    if (guess === secretNumber) {
        result.textContent = `Correct! You guessed it in ${attemptCount} attempt(s)!`;
        gameOver = true;
    } else if (guess < secretNumber) {
        result.textContent = "Too low. Try higher.";
    } else {
        result.textContent = "Too high. Try lower.";
    }

    guessInput.value = "";
};

resetBtn.onclick = function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    gameOver = false;
    result.textContent = "";
    attempts.textContent = "";
    guessInput.value = "";
};
```

### How it works

- `secretNumber` is generated once when the page loads using `Math.random()` and `Math.floor()`
- Every time the user clicks Guess, `attemptCount` increments and the guess is compared to `secretNumber` using `===`
- `if / else if / else` gives the user a hint — too low, too high, or correct
- `gameOver` is a boolean flag — once the user wins, further guesses are blocked until reset
- The `return` keyword exits the function early — the code below it doesn't run
- Reset generates a fresh `secretNumber` and clears everything back to the starting state

---

## Functions

A function is a reusable block of code that runs only when you call it. Instead of writing the same logic multiple times, you write it once in a function and call it whenever you need it.

---

### Declaring a function

```javascript
function greet() {
    console.log("Hello!");
}
```

This defines the function but doesn't run it yet.

### Calling a function

```javascript
greet(); // Hello!
greet(); // Hello! — can call it as many times as you want
```

---

### Parameters and arguments

**Parameters** are the variables listed in the function definition. **Arguments** are the actual values you pass in when calling it.

```javascript
function greet(name) {       // name is the parameter
    console.log(`Hello, ${name}!`);
}

greet("Aashwin");  // "Aashwin" is the argument — output: Hello, Aashwin!
greet("Alice");    // output: Hello, Alice!
```

Multiple parameters:

```javascript
function add(a, b) {
    console.log(a + b);
}

add(5, 3);  // 8
add(10, 20); // 30
```

---

### Return values

Functions can send a value back to wherever they were called using `return`.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8
```

Once `return` runs, the function stops — nothing after it executes.

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor"; // only reaches here if age < 18
}

console.log(checkAge(25)); // "Adult"
console.log(checkAge(15)); // "Minor"
```

A function without a `return` statement returns `undefined` by default.

---

### Default parameters

If an argument isn't passed, you can set a fallback value.

```javascript
function greet(name = "stranger") {
    console.log(`Hello, ${name}!`);
}

greet("Aashwin"); // Hello, Aashwin!
greet();          // Hello, stranger!
```

---

### Function expressions

Instead of declaring a function with the `function` keyword at the top level, you can store it in a variable.

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // 8
```

Behaves the same way. The main difference is that regular function declarations are **hoisted** (available anywhere in the file even before the line they're written on), while function expressions are not.

---

### Arrow functions

A shorter syntax for writing functions, introduced in modern JavaScript.

```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function — same thing
const add = (a, b) => {
    return a + b;
};

// Even shorter — if there's only one expression, you can drop the braces and return
const add = (a, b) => a + b;
```

Single parameter — parentheses are optional:

```javascript
const double = n => n * 2;
double(5); // 10
```

No parameters — empty parentheses required:

```javascript
const sayHi = () => console.log("Hi!");
sayHi();
```

Arrow functions are very commonly used, especially as callbacks (functions passed into other functions).

---

### Scope

Variables declared inside a function only exist inside that function — they are not accessible from outside.

```javascript
function myFunction() {
    let message = "Hello";
    console.log(message); // works fine
}

myFunction();
console.log(message); // ReferenceError — message doesn't exist out here
```

Variables declared outside a function are in the **global scope** and can be read inside any function:

```javascript
let message = "Hello";

function myFunction() {
    console.log(message); // works — can access the outer variable
}

myFunction();
```

---

### Functions calling other functions

```javascript
function square(n) {
    return n * n;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log(sumOfSquares(3, 4)); // 9 + 16 = 25
```

---

### Rewriting the counter and guessing game with functions

The counter and guessing game you built earlier had repeated code — the same `countLabel.textContent = count` line appeared in every button handler. Functions clean that up:

```javascript
// index.js — counter with functions
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

function updateDisplay() {
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    updateDisplay();
};

resetBtn.onclick = function() {
    count = 0;
    updateDisplay();
};

decreaseBtn.onclick = function() {
    count--;
    updateDisplay();
};
```

`updateDisplay()` is called in three places but written once. If you ever want to change how the display works, you change it in one place instead of three.

---

### Quick reference

| Concept              | Syntax                                 |
|----------------------|----------------------------------------|
| Declaration          | `function name() {}`                   |
| Parameters           | `function name(a, b) {}`               |
| Return               | `return value;`                        |
| Default parameter    | `function name(a = 10) {}`             |
| Function expression  | `const name = function() {};`          |
| Arrow function       | `const name = (a, b) => a + b;`        |
| Call a function      | `name();` or `name(arg1, arg2);`       |






---

## Variable Scope

Scope determines where a variable can be accessed. If you try to use a variable outside its scope, you get a `ReferenceError`.

---

### Global scope

A variable declared outside any function or block is in the global scope. It can be accessed from anywhere in the file.

```javascript
let name = "Aashwin";

function greet() {
    console.log(name); // accessible — name is global
}

greet();
console.log(name); // also accessible out here
```

---

### Function scope

A variable declared inside a function exists only inside that function. It is created when the function runs and destroyed when it finishes.

```javascript
function greet() {
    let message = "Hello";
    console.log(message); // works
}

greet();
console.log(message); // ReferenceError — message doesn't exist out here
```

Two functions can have variables with the same name and they won't interfere with each other — each has its own scope.

```javascript
function funcA() {
    let x = 10;
    console.log(x); // 10
}

function funcB() {
    let x = 99;
    console.log(x); // 99
}
```

---

### Block scope

A block is any code inside `{}` — an `if` statement, a loop, etc. Variables declared with `let` or `const` inside a block only exist within that block.

```javascript
if (true) {
    let blockVar = "I'm inside a block";
    console.log(blockVar); // works
}

console.log(blockVar); // ReferenceError — outside the block
```

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

console.log(i); // ReferenceError — i only exists inside the for loop
```

---

### `var` — the old way (no block scope)

Before `let` and `const` existed, `var` was the only way to declare variables. It behaves differently — it has function scope but **not block scope**, meaning it leaks out of blocks.

```javascript
if (true) {
    var x = "I leak out";
}
console.log(x); // "I leak out" — no error, var ignores the block

if (true) {
    let y = "I stay inside";
}
console.log(y); // ReferenceError — let respects the block
```

`var` also gets **hoisted** — moved to the top of its function scope before code runs, but initialized as `undefined`.

```javascript
console.log(a); // undefined — hoisted but not yet assigned
var a = 5;
console.log(a); // 5
```

```javascript
console.log(b); // ReferenceError — let is not hoisted the same way
let b = 5;
```

**Don't use `var`.** Always use `let` or `const`. `var` exists in old code you may encounter, so it's useful to know what it does — but don't write it yourself.

---

### Scope chain

When JavaScript looks up a variable, it starts in the current scope and works its way outward until it finds it — or throws a `ReferenceError` if it never does.

```javascript
let a = "global";

function outer() {
    let b = "outer";

    function inner() {
        let c = "inner";
        console.log(c); // "inner"  — found in own scope
        console.log(b); // "outer"  — not here, looks up to outer
        console.log(a); // "global" — not here or outer, looks up to global
    }

    inner();
    console.log(c); // ReferenceError — c only exists inside inner
}

outer();
```

The inner function can see everything above it. The outer function cannot see inside the inner one.

---

### Summary

| Keyword | Function scope | Block scope | Hoisted        | Use it?  |
|---------|---------------|-------------|----------------|----------|
| `var`   | Yes           | No          | Yes (as undefined) | No   |
| `let`   | Yes           | Yes         | No             | Yes      |
| `const` | Yes           | Yes         | No             | Yes      |

---

## Arrays

An array is an ordered collection of values stored in a single variable. Instead of making separate variables for each item, you group them together.

```javascript
// Without array — messy
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";

// With array — clean
let fruits = ["apple", "banana", "mango"];
```

Arrays can hold any data type — numbers, strings, booleans, even other arrays.

```javascript
let mixed = [42, "hello", true, null];
```

---

### Accessing elements

Arrays are zero-indexed — the first element is at index `0`.

```javascript
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "mango"
console.log(fruits[3]); // undefined — index doesn't exist
```

Access the last element without knowing the length:

```javascript
console.log(fruits[fruits.length - 1]); // "mango"
```

---

### Modifying elements

```javascript
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "mango"]
```

---

### Array length

```javascript
console.log(fruits.length); // 3
```

---

### Adding and removing elements

```javascript
let fruits = ["apple", "banana", "mango"];

// Add to the end
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "mango", "grape"]

// Remove from the end
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]

// Add to the beginning
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "banana", "mango"]

// Remove from the beginning
fruits.shift();
console.log(fruits); // ["apple", "banana", "mango"]
```

---

### Finding elements

```javascript
let fruits = ["apple", "banana", "mango"];

fruits.indexOf("banana");     // 1  — index of first match, -1 if not found
fruits.includes("mango");     // true — returns boolean
fruits.includes("grape");     // false
```

---

### Removing and inserting — splice

`splice` modifies the array in place. It can remove, replace, or insert elements at any position.

```javascript
let fruits = ["apple", "banana", "mango", "grape"];

// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // ["apple", "mango", "grape"]

// Remove 2 elements starting at index 0
fruits.splice(0, 2);
console.log(fruits); // ["grape"]

// Insert without removing — splice(index, 0, ...items)
fruits.splice(1, 0, "banana", "mango");
console.log(fruits); // ["grape", "banana", "mango"]

// Replace — remove 1 at index 0, insert "apple"
fruits.splice(0, 1, "apple");
console.log(fruits); // ["apple", "banana", "mango"]
```

---

### Extracting a portion — slice

Returns a new array from start index up to (not including) end index. Does not modify the original.

```javascript
let fruits = ["apple", "banana", "mango", "grape", "kiwi"];

fruits.slice(1, 3);  // ["banana", "mango"]
fruits.slice(2);     // ["mango", "grape", "kiwi"] — from index 2 to end
fruits.slice(-2);    // ["grape", "kiwi"] — last 2 elements
```

---

### Sorting and reversing

```javascript
let fruits = ["mango", "apple", "banana"];

fruits.sort();
console.log(fruits); // ["apple", "banana", "mango"] — alphabetical

fruits.reverse();
console.log(fruits); // ["mango", "banana", "apple"]
```

For numbers, `sort()` needs a compare function — by default it sorts as strings which gives wrong results:

```javascript
let nums = [10, 1, 5, 3, 8];

nums.sort();                     // [1, 10, 3, 5, 8] — wrong, sorts as strings
nums.sort((a, b) => a - b);      // [1, 3, 5, 8, 10] — ascending
nums.sort((a, b) => b - a);      // [10, 8, 5, 3, 1] — descending
```

---

### Joining and combining

```javascript
let fruits = ["apple", "banana", "mango"];

// Join array into a string
fruits.join(", ");   // "apple, banana, mango"
fruits.join(" | ");  // "apple | banana | mango"
fruits.join("");     // "applebananamango"

// Combine two arrays into one
let veggies = ["carrot", "pea"];
let all = fruits.concat(veggies);
console.log(all); // ["apple", "banana", "mango", "carrot", "pea"]

// Spread operator — modern alternative to concat
let all2 = [...fruits, ...veggies];
console.log(all2); // ["apple", "banana", "mango", "carrot", "pea"]
```

---

### Looping over arrays

```javascript
let fruits = ["apple", "banana", "mango"];

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of — cleaner when you just need the values
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach — a method that runs a function on each element
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Arrow function version — same thing, shorter
fruits.forEach(fruit => console.log(fruit));
```

---

### Useful array methods

#### `map` — transform every element, returns a new array

```javascript
let nums = [1, 2, 3, 4, 5];

let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(nums);    // [1, 2, 3, 4, 5] — original unchanged
```

#### `filter` — keep only elements that pass a condition, returns a new array

```javascript
let nums = [1, 2, 3, 4, 5, 6];

let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

#### `find` — returns the first element that matches, or `undefined`

```javascript
let nums = [5, 12, 8, 130, 44];

let found = nums.find(n => n > 10);
console.log(found); // 12 — first one over 10
```

#### `every` and `some`

```javascript
let nums = [2, 4, 6, 8];

nums.every(n => n % 2 === 0); // true  — every element is even
nums.some(n => n > 5);        // true  — at least one is over 5
nums.every(n => n > 5);       // false — not every element is over 5
```

#### `reduce` — boil the entire array down to a single value

```javascript
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 15
```

- First argument is the **accumulator** (`total`) — carries the running result
- Second argument is the **current element** (`n`)
- `0` after the arrow function is the starting value of the accumulator

---

### Destructuring

A clean way to unpack values from an array into variables.

```javascript
let fruits = ["apple", "banana", "mango"];

let [first, second, third] = fruits;
console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "mango"

// Skip elements with a comma
let [a, , c] = fruits;
console.log(a); // "apple"
console.log(c); // "mango"

// Rest — collect remaining elements
let [head, ...rest] = fruits;
console.log(head); // "apple"
console.log(rest); // ["banana", "mango"]
```

---

### Quick reference

| Method              | What it does                                       | Modifies original? |
|---------------------|----------------------------------------------------|--------------------|
| `.push(val)`        | Add to end                                         | Yes                |
| `.pop()`            | Remove from end                                    | Yes                |
| `.unshift(val)`     | Add to beginning                                   | Yes                |
| `.shift()`          | Remove from beginning                              | Yes                |
| `.splice(i, n)`     | Remove/insert at index                             | Yes                |
| `.sort()`           | Sort in place                                      | Yes                |
| `.reverse()`        | Reverse in place                                   | Yes                |
| `.slice(s, e)`      | Extract a portion                                  | No                 |
| `.concat(arr)`      | Combine arrays                                     | No                 |
| `.indexOf(val)`     | Find index of value                                | No                 |
| `.includes(val)`    | Check if value exists                              | No                 |
| `.join(sep)`        | Convert to string                                  | No                 |
| `.forEach(fn)`      | Run function on each element                       | No                 |
| `.map(fn)`          | Transform each element, return new array           | No                 |
| `.filter(fn)`       | Keep elements that pass condition                  | No                 |
| `.find(fn)`         | Return first match                                 | No                 |
| `.every(fn)`        | Check if all elements pass condition               | No                 |
| `.some(fn)`         | Check if any element passes condition              | No                 |
| `.reduce(fn, init)` | Reduce array to a single value                     | No                 |

---

## Spread Operator

The spread operator `...` expands an iterable — like an array or string — into individual elements. Think of it as unpacking the contents.

---

### Spreading arrays

```javascript
let nums = [1, 2, 3];

console.log(nums);    // [1, 2, 3] — the array
console.log(...nums); // 1 2 3     — the individual values
```

#### Combining arrays

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// You can insert values in between too
let combined2 = [...a, 99, ...b];
console.log(combined2); // [1, 2, 3, 99, 4, 5, 6]
```

#### Copying an array

```javascript
let original = [1, 2, 3];
let copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy);     // [1, 2, 3, 4]
```

Without spread, doing `let copy = original` doesn't copy — both variables point to the same array, so changes affect both.

```javascript
let original = [1, 2, 3];
let copy = original; // not a copy — same reference

copy.push(4);
console.log(original); // [1, 2, 3, 4] — also changed!
```

---

### Spreading into function arguments

When a function expects separate arguments but you have an array, spread unpacks it.

```javascript
let nums = [5, 1, 8, 3, 9];

Math.max(nums);    // NaN — Math.max doesn't accept an array
Math.max(...nums); // 9   — spread unpacks the array into arguments
```

```javascript
function add(a, b, c) {
    return a + b + c;
}

let values = [1, 2, 3];
add(...values); // 6 — same as add(1, 2, 3)
```

---

### Spreading strings

Spread works on any iterable, including strings — it splits into individual characters.

```javascript
let str = "hello";
let chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]
```

---

### Spreading objects

Spread also works on objects — it copies all key-value pairs into a new object.

```javascript
let person = { name: "Aashwin", age: 19 };
let copy = { ...person };

copy.age = 25;
console.log(person.age); // 19 — original unchanged
console.log(copy.age);   // 25
```

#### Merging objects

```javascript
let defaults = { theme: "dark", fontSize: 16, language: "en" };
let userSettings = { fontSize: 20, language: "hi" };

let settings = { ...defaults, ...userSettings };
console.log(settings);
// { theme: "dark", fontSize: 20, language: "hi" }
```

When keys overlap, the last one wins — `userSettings` overrides `defaults`.

#### Adding or overriding properties

```javascript
let person = { name: "Aashwin", age: 19 };

let updated = { ...person, age: 20, city: "Lucknow" };
console.log(updated);
// { name: "Aashwin", age: 20, city: "Lucknow" }
```

The original `person` is untouched. This pattern is used a lot in React and modern JS.

---

### Rest vs Spread — same syntax, opposite direction

They both use `...` but do the opposite thing depending on context.

```javascript
// Spread — expands an array/object into individual elements
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3 — unpacks outward

// Rest — collects individual elements into an array
function sum(...nums) {  // nums collects all arguments into an array
    return nums.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15
```

Rest in destructuring (also seen in the Arrays section):

```javascript
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

let { name, ...others } = { name: "Aashwin", age: 19, city: "Lucknow" };
console.log(name);   // "Aashwin"
console.log(others); // { age: 19, city: "Lucknow" }
```

**Simple rule:**
- `...` in a function call or array/object literal → **spread** (expands)
- `...` in a function parameter or destructuring → **rest** (collects)

---

## Random Password Generator

A practical project using arrays, string methods, loops, `Math.random()`, spread, and the checked property — all covered so far.

The user picks a password length and which character types to include (uppercase, lowercase, numbers, symbols), clicks Generate, and a random password appears.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Password Generator</h1>

    <label>Length: </label>
    <input type="number" id="lengthInput" value="12" min="4" max="32" /><br /><br />

    <input type="checkbox" id="includeUpper" checked />
    <label for="includeUpper">Uppercase (A–Z)</label><br />

    <input type="checkbox" id="includeLower" checked />
    <label for="includeLower">Lowercase (a–z)</label><br />

    <input type="checkbox" id="includeNumbers" checked />
    <label for="includeNumbers">Numbers (0–9)</label><br />

    <input type="checkbox" id="includeSymbols" />
    <label for="includeSymbols">Symbols (!@#$...)</label><br /><br />

    <button id="generateBtn">Generate</button>

    <h2 id="result"></h2>
    <p id="errorMsg"></p>

    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

```javascript
// index.js
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const errorMsg = document.getElementById("errorMsg");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generateBtn.onclick = function() {
    const length = Number(document.getElementById("lengthInput").value);
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeLower = document.getElementById("includeLower").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    // Validation — at least one type must be selected
    if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols) {
        errorMsg.textContent = "Please select at least one character type.";
        result.textContent = "";
        return;
    }

    errorMsg.textContent = "";

    // Build the pool of allowed characters
    let charPool = "";
    if (includeUpper)   charPool += upper;
    if (includeLower)   charPool += lower;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    // Generate the password
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    result.textContent = password;
};
```

### How it works

**Character pool:**
Each checkbox adds a string of characters to `charPool`. If only uppercase and numbers are checked, `charPool` becomes `"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"`. The password is only built from those characters.

**The loop:**
```javascript
const randomIndex = Math.floor(Math.random() * charPool.length);
password += charPool[randomIndex];
```
Each iteration picks a random index within `charPool`, grabs the character at that index, and appends it to `password`. This runs `length` times.

**`charPool[randomIndex]`** — you can access individual characters in a string by index, exactly like an array. `"hello"[1]` is `"e"`.

**Validation:**
If no checkbox is checked, `charPool` would be empty and the loop would only produce empty characters. The `if` block catches this before the loop runs and shows an error instead.

**`return`:**
Exits the function early so the password generation code below never runs when there's an error.

---

## Callbacks

A callback is a function passed as an argument to another function, to be called later — either after something finishes or for each item in a collection.

You've already been using callbacks without realising it. `forEach`, `map`, `filter`, and `onclick` all use callbacks.

```javascript
// This is a callback — a function passed into forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// This is also a callback — a function passed into onclick
btn.onclick = function() {
    console.log("clicked");
};
```

---

### The basic idea

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
    console.log("Processing user...");
    callback(name); // calls whatever function was passed in
}

processUser("Aashwin", greet);
// Processing user...
// Hello, Aashwin!
```

- `greet` is passed into `processUser` as the `callback` parameter
- `processUser` calls it later using `callback(name)`
- You pass the function itself — `greet`, not `greet()`. Adding `()` would call it immediately instead of passing it.

---

### Anonymous callbacks

Most of the time you don't name the callback — you write it inline.

```javascript
processUser("Aashwin", function(name) {
    console.log(`Hello, ${name}!`);
});
```

Or with an arrow function:

```javascript
processUser("Aashwin", name => console.log(`Hello, ${name}!`));
```

All three versions do the same thing.

---

### Callbacks in array methods

You've already used these — `map`, `filter`, `forEach` all take a callback and run it on each element.

```javascript
let nums = [1, 2, 3, 4, 5];

// The arrow function here IS the callback
let doubled = nums.map(n => n * 2);
let evens = nums.filter(n => n % 2 === 0);
nums.forEach(n => console.log(n));
```

---

### Callbacks for timing

Two built-in functions use callbacks to run code after a delay or on a repeating interval.

#### `setTimeout` — run once after a delay

```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds
```

```javascript
// Arrow function version
setTimeout(() => console.log("Done!"), 2000);
```

#### `setInterval` — run repeatedly on an interval

```javascript
let count = 0;

const interval = setInterval(function() {
    count++;
    console.log(count);

    if (count === 5) {
        clearInterval(interval); // stops the interval
    }
}, 1000); // runs every 1 second
```

- `setInterval` returns an ID you can store in a variable
- `clearInterval(id)` stops it — always stop intervals when you're done or they run forever

---

### Why callbacks exist

JavaScript runs in a single thread — it can only do one thing at a time. When something takes time (waiting for a timer, fetching data from a server, reading a file), JavaScript doesn't sit and wait. It moves on and comes back to run the callback when the task is done.

```javascript
console.log("1 - before timeout");

setTimeout(() => {
    console.log("2 - inside timeout");
}, 1000);

console.log("3 - after timeout");

// Output order:
// 1 - before timeout
// 3 - after timeout
// 2 - inside timeout  ← runs last, after 1 second
```

The code doesn't pause at `setTimeout`. It registers the callback, moves on to `console.log("3...")`, and comes back to run the callback after 1 second.

---

### Callback hell

When you have callbacks that depend on other callbacks, the code starts nesting deeply — this is called callback hell.

```javascript
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
```

Hard to read, hard to maintain. This is the problem that **Promises** and **async/await** were built to solve — but those are a separate topic for later.

---

### Quick reference

| Use case              | Example                                          |
|-----------------------|--------------------------------------------------|
| Array iteration       | `arr.forEach(item => ...)` |
| Array transformation  | `arr.map(item => ...)` |
| Event handling        | `btn.onclick = function() {...}` |
| Run after delay       | `setTimeout(() => ..., ms)` |
| Run on interval       | `setInterval(() => ..., ms)` |
| Stop interval         | `clearInterval(id)` |

---

## Objects

An object stores related data and functionality together as key-value pairs. Where an array uses numbered indexes, an object uses named keys.

```javascript
let person = {
    name: "Aashwin",
    age: 19,
    city: "Lucknow",
    isStudent: true
};
```

Each entry is a **property** — a key and its value separated by `:`, properties separated by `,`.

---

### Accessing properties

```javascript
// Dot notation — standard way
console.log(person.name); // "Aashwin"
console.log(person.age);  // 19

// Bracket notation — used when the key is dynamic or has spaces
console.log(person["name"]); // "Aashwin"

let key = "city";
console.log(person[key]);    // "Lucknow" — useful when key is in a variable
```

---

### Modifying properties

```javascript
person.age = 20;           // update existing
person.email = "a@b.com";  // add new property
delete person.isStudent;   // remove a property
```

---

### Methods

A method is a function stored as a property of an object.

```javascript
let person = {
    name: "Aashwin",
    age: 19,
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person.greet(); // Hi, I'm Aashwin
```

`this` refers to the object the method belongs to — so `this.name` is `person.name`.

Arrow function shorthand for methods:

```javascript
let person = {
    name: "Aashwin",
    greet() {                          // shorthand method syntax
        console.log(`Hi, I'm ${this.name}`);
    }
};
```

**Note:** avoid arrow functions for methods that use `this` — arrow functions don't have their own `this` and it won't work as expected.

---

### Checking if a property exists

```javascript
console.log("name" in person);   // true
console.log("phone" in person);  // false
```

---

### Looping over an object

```javascript
let person = { name: "Aashwin", age: 19, city: "Lucknow" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: Aashwin
// age: 19
// city: Lucknow
```

---

### Object destructuring

Unpack properties into variables — cleaner than accessing each one individually.

```javascript
let person = { name: "Aashwin", age: 19, city: "Lucknow" };

let { name, age, city } = person;
console.log(name); // "Aashwin"
console.log(age);  // 19
```

Rename while destructuring:

```javascript
let { name: fullName, age: years } = person;
console.log(fullName); // "Aashwin"
console.log(years);    // 19
```

Default values:

```javascript
let { name, country = "India" } = person;
console.log(country); // "India" — used because person has no country property
```

---

### Nested objects

Objects can contain other objects.

```javascript
let person = {
    name: "Aashwin",
    address: {
        city: "Lucknow",
        country: "India"
    }
};

console.log(person.address.city);    // "Lucknow"
console.log(person.address.country); // "India"
```

Destructuring nested objects:

```javascript
let { name, address: { city, country } } = person;
console.log(city);    // "Lucknow"
console.log(country); // "India"
```

---

### Array of objects

The most common data structure you'll work with — a list of items where each item has multiple properties.

```javascript
let students = [
    { name: "Aashwin", grade: "A" },
    { name: "Alice",   grade: "B" },
    { name: "Bob",     grade: "A" }
];

// Access
console.log(students[0].name); // "Aashwin"

// Loop
students.forEach(student => {
    console.log(`${student.name}: ${student.grade}`);
});

// Filter — only A grade students
let aStudents = students.filter(student => student.grade === "A");

// Map — get just the names
let names = students.map(student => student.name);
console.log(names); // ["Aashwin", "Alice", "Bob"]
```

---

### Copying objects

Like arrays, objects are reference types — assigning an object to a new variable doesn't copy it.

```javascript
let original = { name: "Aashwin" };
let copy = original;

copy.name = "Alice";
console.log(original.name); // "Alice" — original changed too
```

To make a proper copy:

```javascript
// Spread — shallow copy
let copy = { ...original };

// Object.assign — also shallow copy
let copy2 = Object.assign({}, original);
```

Both are **shallow copies** — they copy top-level properties, but nested objects are still shared by reference. For a full deep copy, use `JSON.parse(JSON.stringify(obj))` as a quick workaround.

```javascript
let deep = JSON.parse(JSON.stringify(original)); // full independent copy
```

---

### Useful Object methods

```javascript
let person = { name: "Aashwin", age: 19, city: "Lucknow" };

Object.keys(person);    // ["name", "age", "city"]   — array of keys
Object.values(person);  // ["Aashwin", 19, "Lucknow"] — array of values
Object.entries(person); // [["name","Aashwin"], ["age",19], ["city","Lucknow"]] — array of pairs
```

`Object.entries` is useful when you want to loop with both key and value using `for...of`:

```javascript
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

---

### Quick reference

| Operation              | Syntax                              |
|------------------------|-------------------------------------|
| Create object          | `let obj = { key: value }`          |
| Access property        | `obj.key` or `obj["key"]`           |
| Add/update property    | `obj.key = value`                   |
| Delete property        | `delete obj.key`                    |
| Check property exists  | `"key" in obj`                      |
| Loop over keys         | `for (let key in obj)`              |
| Destructure            | `let { key } = obj`                 |
| Get all keys           | `Object.keys(obj)`                  |
| Get all values         | `Object.values(obj)`                |
| Get key-value pairs    | `Object.entries(obj)`               |
| Shallow copy           | `{ ...obj }`                        |

---

## Classes

A class is a blueprint for creating objects. Instead of writing the same object structure repeatedly, you define it once in a class and create as many instances as you need.

---

### Constructor

The `constructor` method runs automatically when a new object is created from the class. It sets up the initial properties.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("Aashwin", 19);
let person2 = new Person("Alice", 25);

console.log(person1.name); // "Aashwin"
console.log(person2.age);  // 25
```

- `new Person(...)` creates a new object and runs the constructor
- `this` inside the constructor refers to the new object being created
- Each object created from the class is called an **instance**

---

### Methods

Methods defined inside a class are shared across all instances — they don't get copied to each object.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }

    birthday() {
        this.age++;
        console.log(`Happy birthday ${this.name}! You are now ${this.age}`);
    }
}

let person1 = new Person("Aashwin", 19);
person1.greet();    // Hi, I'm Aashwin and I'm 19 years old
person1.birthday(); // Happy birthday Aashwin! You are now 20
```

---

### Getters and Setters

Getters and setters let you define properties that behave like values but run code when accessed or assigned.

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

let person = new Person("Aashwin", "Shukla");

console.log(person.fullName);       // "Aashwin Shukla" — calls the getter
person.fullName = "Alice Smith";    // calls the setter
console.log(person.firstName);      // "Alice"
console.log(person.lastName);       // "Smith"
```

- `get` — accessed like a property (`person.fullName`), not called like a method (`person.fullName()`)
- `set` — assigned like a property (`person.fullName = "..."`)
- Useful for computed properties and validation

---

### Static

A `static` method or property belongs to the **class itself**, not to any instance. You call it on the class, not on an object.

```javascript
class MathHelper {
    static add(a, b) {
        return a + b;
    }

    static PI = 3.14159;
}

console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.PI);        // 3.14159

let m = new MathHelper();
m.add(5, 3); // TypeError — static methods don't exist on instances
```

Common use cases — utility functions and constants that belong to the concept but don't need an object.

---

### Private class fields

Properties prefixed with `#` are private — they can only be accessed from inside the class. Trying to access them from outside throws an error.

```javascript
class BankAccount {
    #balance = 0;  // private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.#balance);     // SyntaxError — private field
```

Private fields prevent outside code from directly modifying internal state — the only way to interact with `#balance` is through the methods the class exposes.

---

### Inheritance

Inheritance lets one class extend another — the child class gets all the properties and methods of the parent, and can add its own on top.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows`);
    }
}

let dog = new Dog("Rex");
let cat = new Cat("Luna");

dog.speak(); // Rex barks
cat.speak(); // Luna meows
```

- `extends` sets up the inheritance
- The child class overrides the parent's `speak()` method with its own version — this is called **method overriding**

---

### super

`super` refers to the parent class. Used in two ways:

**1. Call the parent constructor:**

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);       // calls Animal's constructor to set this.name
        this.breed = breed;
    }

    describe() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

let dog = new Dog("Rex", "Labrador");
dog.describe(); // Rex is a Labrador
```

If a child class has a `constructor`, it **must** call `super()` before using `this` — otherwise JavaScript throws an error.

**2. Call a parent method:**

```javascript
class Animal {
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        super.speak();     // calls the parent's speak first
        console.log(`${this.name} also barks`);
    }
}

let dog = new Dog("Rex");
dog.speak();
// Rex makes a sound
// Rex also barks
```

---

### `instanceof`

Checks whether an object was created from a specific class — returns `true` or `false`.

```javascript
let dog = new Dog("Rex", "Labrador");

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true  — Dog extends Animal
console.log(dog instanceof Cat);    // false
```

An instance of a child class is also an instance of its parent.

---

### Prototypes

Every object in JavaScript has a hidden link to another object called its **prototype**. When you access a property or method, JavaScript first looks at the object itself, then walks up the prototype chain until it finds it or reaches `null`.

```javascript
let person = { name: "Aashwin" };

console.log(person.toString()); // "[object Object]"
```

`person` doesn't have a `toString` method — JavaScript found it on `Object.prototype`, the prototype of all plain objects.

Classes use prototypes under the hood. Methods defined in a class are stored on the prototype, not copied to each instance — that's why they're memory-efficient.

```javascript
class Person {
    greet() {
        console.log("hello");
    }
}

let p = new Person();
console.log(p.hasOwnProperty("greet")); // false — greet is on the prototype
```

You rarely need to work with prototypes directly when using classes, but understanding that they exist explains why `instanceof` works up the chain and why methods are shared.

---

### Method chaining

Method chaining lets you call multiple methods on the same object in a single line. Each method returns `this` — the object itself — so the next method can be called immediately after.

```javascript
class Calculator {
    constructor() {
        this.value = 0;
    }

    add(n) {
        this.value += n;
        return this;        // returns the object so you can chain
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    getResult() {
        return this.value;
    }
}

let result = new Calculator()
    .add(10)
    .multiply(2)
    .subtract(5)
    .getResult();

console.log(result); // 15
```

You've already seen this with string methods — `.trim().toLowerCase().replace(...)`. The same idea, built into the string prototype.

---

### Quick reference

| Concept           | Syntax                                        |
|-------------------|-----------------------------------------------|
| Define class      | `class Name {}`                               |
| Constructor       | `constructor(params) { this.x = x; }`         |
| Method            | `methodName() {}`                             |
| Getter            | `get propName() { return ...; }`              |
| Setter            | `set propName(value) { ... }`                 |
| Static            | `static methodName() {}` or `static x = val` |
| Private field     | `#fieldName`                                  |
| Inherit           | `class Child extends Parent {}`               |
| Call parent constructor | `super(args)`                           |
| Call parent method | `super.methodName()`                         |
| Check instance    | `obj instanceof ClassName`                    |
| Chain methods     | return `this` from each method                |

---

## Sorting

Sorting was briefly touched on in the Arrays section. This covers it fully — including the quirks, the compare function, and sorting arrays of objects.

---

### `.sort()` — default behaviour

By default, `.sort()` converts every element to a string and sorts alphabetically. This works fine for strings but breaks for numbers.

```javascript
// Strings — works as expected
let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

// Numbers — broken
let nums = [10, 1, 5, 3, 8, 21];
nums.sort();
console.log(nums); // [1, 10, 21, 3, 5, 8] — sorted as strings, not numbers
```

`10` comes before `3` because `"1"` comes before `"3"` alphabetically. Always use a compare function for numbers.

---

### Compare function

`.sort()` accepts a callback that tells it how to order two elements `a` and `b`.

The rules:
- Return a **negative number** → `a` comes before `b`
- Return a **positive number** → `b` comes before `a`
- Return `0` → order stays the same

```javascript
// Ascending
nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 5, 8, 10, 21]

// Descending
nums.sort((a, b) => b - a);
console.log(nums); // [21, 10, 8, 5, 3, 1]
```

`a - b` is negative when `a < b` (so `a` comes first = ascending). `b - a` flips it.

---

### Sorting strings explicitly

```javascript
let fruits = ["banana", "Apple", "mango", "cherry"];

// Case-sensitive — uppercase letters sort before lowercase in ASCII
fruits.sort();
console.log(fruits); // ["Apple", "banana", "cherry", "mango"]

// Case-insensitive — convert to same case before comparing
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // ["Apple", "banana", "cherry", "mango"] — ignores case
```

`localeCompare` is the proper way to compare strings — it handles special characters and accents correctly across languages.

---

### Sorting arrays of objects

Sort by a specific property using the compare function.

```javascript
let students = [
    { name: "Charlie", grade: 85 },
    { name: "Aashwin", grade: 92 },
    { name: "Alice",   grade: 78 },
    { name: "Bob",     grade: 92 }
];

// Sort by grade ascending
students.sort((a, b) => a.grade - b.grade);

// Sort by grade descending
students.sort((a, b) => b.grade - a.grade);

// Sort by name alphabetically
students.sort((a, b) => a.name.localeCompare(b.name));
```

---

### Stable sort

As of ES2019, JavaScript's `.sort()` is guaranteed to be **stable** — meaning elements that are equal keep their original relative order.

```javascript
// Both Aashwin and Bob have grade 92
// After sorting by grade, Aashwin still comes before Bob
students.sort((a, b) => b.grade - a.grade);
// [{ Aashwin, 92 }, { Bob, 92 }, { Charlie, 85 }, { Alice, 78 }]
```

---

### Sorting without modifying the original

`.sort()` modifies the array in place. To sort without changing the original, use spread or `.slice()` to copy first.

```javascript
let nums = [3, 1, 4, 1, 5, 9];

let sorted = [...nums].sort((a, b) => a - b);

console.log(nums);   // [3, 1, 4, 1, 5, 9] — unchanged
console.log(sorted); // [1, 1, 3, 4, 5, 9]
```

---

### `.reverse()`

Reverses the array in place — no sorting logic, just flips the order.

```javascript
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]
```

To reverse without modifying the original:

```javascript
let reversed = [...nums].reverse();
```

---

### Quick reference

| Goal                          | Code                                          |
|-------------------------------|-----------------------------------------------|
| Sort strings A–Z              | `arr.sort()`                                  |
| Sort strings Z–A              | `arr.sort().reverse()`                        |
| Sort numbers ascending        | `arr.sort((a, b) => a - b)`                   |
| Sort numbers descending       | `arr.sort((a, b) => b - a)`                   |
| Sort strings case-insensitive | `arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))` |
| Sort objects by property      | `arr.sort((a, b) => a.prop - b.prop)`         |
| Sort without modifying        | `[...arr].sort(...)`                          |
| Reverse                       | `arr.reverse()`                               |

---

## Dates

JavaScript has a built-in `Date` object for working with dates and times.

---

### Creating a Date

```javascript
// Current date and time
let now = new Date();
console.log(now); // e.g. 2026-09-01T10:30:00.000Z

// Specific date
let d1 = new Date("2026-01-15");
let d2 = new Date("January 15, 2026");
let d3 = new Date(2026, 0, 15); // year, month (0-indexed), day

// Specific date and time
let d4 = new Date(2026, 0, 15, 10, 30, 0); // year, month, day, hour, min, sec
```

Month is **0-indexed** — January is `0`, December is `11`. This is a common gotcha.

---

### Getting date components

```javascript
let now = new Date();

now.getFullYear();  // 2026
now.getMonth();     // 0–11 (0 = January)
now.getDate();      // 1–31 (day of the month)
now.getDay();       // 0–6  (0 = Sunday, 6 = Saturday)
now.getHours();     // 0–23
now.getMinutes();   // 0–59
now.getSeconds();   // 0–59
now.getTime();      // milliseconds since Jan 1, 1970 (Unix timestamp)
```

---

### Setting date components

```javascript
let d = new Date();

d.setFullYear(2027);
d.setMonth(11);     // December
d.setDate(25);      // 25th
d.setHours(9);
d.setMinutes(0);
```

---

### Formatting dates

`Date` objects don't have great built-in formatting. Here are the most useful options:

```javascript
let now = new Date();

now.toDateString();         // "Tue Sep 01 2026"
now.toLocaleDateString();   // "9/1/2026" — format depends on system locale
now.toLocaleTimeString();   // "10:30:00 AM"
now.toLocaleString();       // "9/1/2026, 10:30:00 AM"
now.toISOString();          // "2026-09-01T10:30:00.000Z" — standard format
```

Custom formatting using `toLocaleDateString` options:

```javascript
let now = new Date();

now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
// "Tuesday, September 1, 2026"
```

---

### Date arithmetic

Since `.getTime()` returns milliseconds, you can do math on dates.

```javascript
let now = new Date();
let future = new Date("2027-01-01");

let diff = future.getTime() - now.getTime(); // difference in milliseconds

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`${days} days until 2027`);
```

Breaking down the conversion:
- `1000` ms = 1 second
- `1000 * 60` = 1 minute
- `1000 * 60 * 60` = 1 hour
- `1000 * 60 * 60 * 24` = 1 day

---

### Comparing dates

```javascript
let d1 = new Date("2026-01-01");
let d2 = new Date("2026-06-01");

d1 < d2;   // true
d1 > d2;   // false
d1.getTime() === d2.getTime(); // false — use getTime() for equality
```

Never compare Date objects directly with `===` — it checks reference, not value. Use `.getTime()` for equality checks.

---

### Quick reference

| Method                  | Returns                                    |
|-------------------------|--------------------------------------------|
| `new Date()`            | Current date and time                      |
| `.getFullYear()`        | Year (e.g. 2026)                           |
| `.getMonth()`           | Month 0–11                                 |
| `.getDate()`            | Day of month 1–31                          |
| `.getDay()`             | Day of week 0–6 (0 = Sunday)               |
| `.getHours()`           | Hour 0–23                                  |
| `.getTime()`            | Milliseconds since Jan 1 1970              |
| `.toLocaleDateString()` | Formatted date string                      |
| `.toISOString()`        | Standard ISO format string                 |

---

## Closures

A closure is a function that remembers the variables from its outer scope even after that outer function has finished running.

---

### The basic idea

```javascript
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

- `outer()` runs and returns `inner`
- `outer` is done — normally `count` would be gone
- But `inner` still has access to `count` because it **closed over** it
- Every time `counter()` is called, it increments and remembers the same `count`

This is a closure — `inner` carries its surrounding scope with it.

---

### Why closures matter

#### Data privacy

Closures let you create private variables — values that can only be changed through specific functions, not directly from outside.

```javascript
function createCounter() {
    let count = 0; // private — not accessible from outside

    return {
        increment() { count++; },
        decrement() { count--; },
        getCount()  { return count; }
    };
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount()); // 2
console.log(counter.count);      // undefined — can't access directly
```

#### Function factories

A function that creates and returns other functions, each with their own closed-over state.

```javascript
function multiplier(factor) {
    return n => n * factor;
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

`double` and `triple` are two separate closures — each remembers its own `factor`.

---

### Closures in loops — a common gotcha

```javascript
// Problem — all timeouts print 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// 3, 3, 3 — because var is function-scoped, all callbacks share the same i

// Fix 1 — use let (block-scoped, each iteration gets its own i)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// 0, 1, 2 — each callback closes over its own i
```

This is one of the main reasons `let` replaced `var` — closures in loops work as expected with `let`.

---

### IIFE — Immediately Invoked Function Expression

A function that defines and calls itself immediately. Creates a closure to keep variables private from the global scope.

```javascript
(function() {
    let private = "I'm not global";
    console.log(private);
})();

console.log(private); // ReferenceError — doesn't exist outside
```

Arrow function version:

```javascript
(() => {
    let private = "scoped";
    console.log(private);
})();
```

Not as common now that `let` and `const` have block scope, but you'll see IIFEs in older code.

---

### Quick reference

| Concept            | What it means                                              |
|--------------------|------------------------------------------------------------|
| Closure            | A function that remembers its outer scope after the outer function finishes |
| Data privacy       | Use closures to hide variables from outside access         |
| Function factory   | A function that returns other functions with closed-over state |
| Loop gotcha        | Use `let` not `var` in loops with callbacks                |
| IIFE               | Self-invoking function that creates an isolated scope      |

---

## Digital Clock

A practical project using `Date`, `setInterval`, `padStart`, and DOM manipulation — all covered so far.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="clock">00:00:00</div>

    <script src="index.js"></script>
  </body>
</html>
```

### CSS

```css
/* style.css */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a2e;
}

#clock {
    font-family: monospace;
    font-size: 6rem;
    color: #00ff99;
    letter-spacing: 8px;
}
```

### JavaScript

```javascript
// index.js
const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    const hours   = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock(); // run immediately so there's no blank on load
setInterval(updateClock, 1000); // then update every second
```

### How it works

- `new Date()` is called every second to get the current time
- `.getHours()`, `.getMinutes()`, `.getSeconds()` extract the time components
- `String(...).padStart(2, "0")` ensures single digits show as `09` instead of `9` — without this the clock jumps around in width
- `updateClock()` is called once immediately before `setInterval` starts — otherwise there's a one second blank gap when the page first loads
- `setInterval(updateClock, 1000)` calls the function every 1000 milliseconds (1 second) keeping the display in sync

---

## Stopwatch

A practical project using `setInterval`, `clearInterval`, `Date`, `padStart`, conditionals, and DOM manipulation.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Stopwatch</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="display">00:00:00</div>

    <div id="btnContainer">
      <button id="startBtn">Start</button>
      <button id="stopBtn">Stop</button>
      <button id="resetBtn">Reset</button>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```

### CSS

```css
/* style.css */
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a2e;
}

#display {
    font-family: monospace;
    font-size: 6rem;
    color: #00ff99;
    letter-spacing: 8px;
    margin-bottom: 40px;
}

#btnContainer {
    display: flex;
    gap: 16px;
}

button {
    padding: 12px 28px;
    font-size: 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #16213e;
    color: white;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #0f3460;
}
```

### JavaScript

```javascript
// index.js
const display   = document.getElementById("display");
const startBtn  = document.getElementById("startBtn");
const stopBtn   = document.getElementById("stopBtn");
const resetBtn  = document.getElementById("resetBtn");

let interval = null;
let elapsedTime = 0;
let startTime = 0;

function updateDisplay() {
    const hours   = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.onclick = function() {
    if (interval) return; // already running — do nothing

    startTime = Date.now() - elapsedTime; // account for any previous elapsed time

    interval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
};

stopBtn.onclick = function() {
    clearInterval(interval);
    interval = null;
};

resetBtn.onclick = function() {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    startTime = 0;
    updateDisplay();
};
```

### How it works

**`Date.now()`** returns the current time in milliseconds — a single number, much simpler than creating a full `Date` object when you just need the current timestamp.

**`elapsedTime`** stores how many milliseconds have passed in total. Every tick it is recalculated as:
```javascript
elapsedTime = Date.now() - startTime;
```

**Why not just increment a counter?**
Incrementing a variable by 1000 every second sounds simpler but drifts over time — `setInterval` is not perfectly precise. Using `Date.now()` to calculate the real elapsed time keeps the stopwatch accurate no matter how long it runs.

**Start with resume:**
```javascript
startTime = Date.now() - elapsedTime;
```
When you hit Start after stopping, `elapsedTime` still holds the previous time. Subtracting it from `Date.now()` shifts `startTime` back so the elapsed calculation continues from where it left off — not from zero.

**`if (interval) return`** — prevents starting a second interval if Start is clicked while already running. Two intervals running at once would make the clock tick twice as fast.

**Converting milliseconds to hours, minutes, seconds:**
```javascript
hours   = Math.floor(elapsedTime / 3600000)
minutes = Math.floor((elapsedTime % 3600000) / 60000)
seconds = Math.floor((elapsedTime % 60000) / 1000)
```
- 1 hour = 3,600,000 ms
- 1 minute = 60,000 ms
- 1 second = 1,000 ms
- `%` (modulo) removes the higher units before dividing into the smaller one

---

## ES6 Modules

Modules let you split your JavaScript across multiple files and share code between them using `export` and `import`. Instead of one giant file, each file handles one concern and exposes only what it needs to.

---

### Setting up

To use ES6 modules in the browser, add `type="module"` to your script tag:

```html
<script type="module" src="index.js"></script>
```

Without this, `import` and `export` won't work in the browser.

---

### Named exports

Export specific values by name from a file.

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
```

Or export everything at the bottom:

```javascript
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
const PI = 3.14159;

export { add, subtract, PI };
```

---

### Named imports

Import specific exports by their exact name using `{}`.

```javascript
// index.js
import { add, subtract, PI } from "./math.js";

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159
```

The `./` means the file is in the same folder. Always include the `.js` extension in browser imports.

---

### Renaming imports

Use `as` to rename an import — useful to avoid name conflicts.

```javascript
import { add as mathAdd, PI as mathPI } from "./math.js";

console.log(mathAdd(2, 3)); // 5
console.log(mathPI);        // 3.14159
```

---

### Import everything

Import all exports as a single object using `* as`.

```javascript
import * as Math from "./math.js";

console.log(Math.add(2, 3));  // 5
console.log(Math.PI);         // 3.14159
```

---

### Default export

Each file can have one default export — the main thing the file provides. No `{}` needed when importing.

```javascript
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

```javascript
// index.js
import greet from "./greet.js";

console.log(greet("Aashwin")); // Hello, Aashwin!
```

You can name the default import anything you want:

```javascript
import sayHello from "./greet.js"; // also works
```

---

### Default + named exports together

A file can have both a default export and named exports.

```javascript
// utils.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

export const version = "1.0";
export function goodbye(name) {
    return `Bye, ${name}!`;
}
```

```javascript
// index.js
import greet, { version, goodbye } from "./utils.js";

console.log(greet("Aashwin"));   // Hello, Aashwin!
console.log(version);            // 1.0
console.log(goodbye("Aashwin")); // Bye, Aashwin!
```

---

### Re-exporting

Forward exports from one file through another — useful for creating a single entry point.

```javascript
// index.js — acts as a barrel file
export { add, subtract } from "./math.js";
export { greet } from "./greet.js";
```

Now other files can import everything from one place:

```javascript
import { add, greet } from "./index.js";
```

---

### Module scope

Every module has its own scope. Variables declared in a module are not global — they don't leak into other files or the global `window` object.

```javascript
// module-a.js
let secret = "only mine";  // not accessible in other files
```

This is one of the main benefits over plain `<script>` tags where everything shared the same global scope.

---

### Quick reference

| Syntax                                  | What it does                              |
|-----------------------------------------|-------------------------------------------|
| `export function foo() {}`              | Named export                              |
| `export { foo, bar }`                   | Named export at the bottom                |
| `export default function() {}`          | Default export                            |
| `import { foo } from "./file.js"`       | Named import                              |
| `import { foo as f } from "./file.js"`  | Renamed import                            |
| `import * as obj from "./file.js"`      | Import all as object                      |
| `import foo from "./file.js"`           | Default import                            |
| `import foo, { bar } from "./file.js"`  | Default + named import                    |
| `export { foo } from "./file.js"`       | Re-export                                 |

---

## Asynchronous JavaScript

JavaScript runs in a single thread — it can only do one thing at a time. Asynchronous code lets it start a task, move on, and come back when that task finishes — without blocking everything else.

---

### Synchronous vs Asynchronous

```javascript
// Synchronous — each line waits for the previous one to finish
console.log("1");
console.log("2");
console.log("3");
// 1, 2, 3 — always in order

// Asynchronous — setTimeout doesn't block
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// 1, 3, 2 — 2 runs after 1 second while everything else continues
```

---

### The problem with callbacks

You already saw callbacks used for async work. When tasks depend on each other, callbacks nest deeply — callback hell.

```javascript
setTimeout(() => {
    console.log("Step 1 done");
    setTimeout(() => {
        console.log("Step 2 done");
        setTimeout(() => {
            console.log("Step 3 done");
        }, 1000);
    }, 1000);
}, 1000);
```

Hard to read, hard to handle errors. Promises and async/await were built to solve this.

---

### Promises

A Promise is an object that represents the eventual result of an async operation. It is in one of three states:

- **Pending** — operation not finished yet
- **Fulfilled** — operation completed successfully
- **Rejected** — operation failed

```javascript
// Creating a promise
const myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("It worked!");   // fulfills the promise
    } else {
        reject("Something went wrong"); // rejects the promise
    }
});
```

#### `.then()` and `.catch()`

Handle the result using `.then()` for success and `.catch()` for failure.

```javascript
myPromise
    .then(result => console.log(result))   // "It worked!"
    .catch(error => console.log(error));   // runs if rejected
```

#### `.finally()`

Runs regardless of success or failure — useful for cleanup.

```javascript
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Done either way"));
```

#### Chaining promises

`.then()` returns a new promise, so you can chain them — solving callback hell.

```javascript
fetch("https://api.example.com/user")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

Each `.then()` receives the return value of the previous one.

---

### async / await

`async/await` is built on top of Promises — it gives you a cleaner way to write async code that reads like synchronous code.

#### `async` function

Putting `async` before a function makes it always return a Promise.

```javascript
async function greet() {
    return "Hello";
}

greet().then(msg => console.log(msg)); // "Hello"
```

#### `await`

`await` pauses execution inside an `async` function until the Promise resolves. Code after it waits — but nothing outside the function is blocked.

```javascript
async function getData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}

getData();
```

Compare to the `.then()` chain — same thing, cleaner to read.

#### Error handling with try/catch

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Request finished");
    }
}
```

`try` — run the async code. `catch` — handle any error. `finally` — always runs.

---

### fetch API

`fetch` is the built-in way to make HTTP requests — loading data from an API or server.

```javascript
// Basic GET request
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();
        console.log(user.name);
    } catch (error) {
        console.log("Failed to fetch:", error);
    }
}

getUser();
```

- `fetch()` returns a Promise that resolves to a `Response` object
- `response.ok` is `true` if the status code is 200–299
- `response.json()` parses the response body as JSON — also returns a Promise, so it needs `await`
- `throw new Error(...)` manually rejects so `.catch` or `catch` block handles it

#### POST request — sending data

```javascript
async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "My Post",
                body: "Hello world",
                userId: 1
            })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

- `method` — HTTP method (`GET` is default, others: `POST`, `PUT`, `DELETE`)
- `headers` — tells the server you're sending JSON
- `body` — the data to send, converted to a JSON string with `JSON.stringify()`

---

### Promise.all — run multiple promises at once

Instead of awaiting one by one (sequential), run all at the same time and wait for all to finish.

```javascript
async function getMultiple() {
    try {
        const [user, post] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json())
        ]);

        console.log(user.name);
        console.log(post.title);
    } catch (error) {
        console.log(error); // if ANY promise fails, catch runs
    }
}
```

`Promise.all` is faster than awaiting sequentially when requests don't depend on each other.

---

### Event loop — how it all works

JavaScript uses an **event loop** to handle async code.

1. Synchronous code runs first — the **call stack**
2. Async tasks (setTimeout, fetch) are handed off to the browser
3. When they complete, their callbacks go into the **task queue**
4. The event loop checks — if the call stack is empty, it picks the next callback from the queue and runs it

```javascript
console.log("1 - sync");

setTimeout(() => console.log("2 - timeout"), 0); // 0ms delay

Promise.resolve().then(() => console.log("3 - promise"));

console.log("4 - sync");

// Output:
// 1 - sync
// 4 - sync
// 3 - promise  ← microtask queue (runs before setTimeout)
// 2 - timeout  ← task queue
```

Promises go into the **microtask queue** which has higher priority than the regular task queue — so resolved promises always run before `setTimeout` callbacks, even with `0` delay.

---

### Quick reference

| Concept              | Syntax                                             |
|----------------------|----------------------------------------------------|
| Create promise       | `new Promise((resolve, reject) => {})`             |
| Handle success       | `.then(result => {})`                              |
| Handle failure       | `.catch(error => {})`                              |
| Always runs          | `.finally(() => {})`                               |
| Async function       | `async function foo() {}`                          |
| Await a promise      | `const result = await somePromise`                 |
| Error handling       | `try { await ... } catch(e) {}`                    |
| GET request          | `await fetch(url)`                                 |
| POST request         | `await fetch(url, { method: "POST", body: ... })`  |
| Parse JSON response  | `await response.json()`                            |
| Run promises in parallel | `await Promise.all([p1, p2])`                  |

---

## Error Object

When something goes wrong in JavaScript, it throws an **Error object**. Understanding it helps you catch the right errors, give useful messages, and debug faster.

---

### try / catch / finally

You've seen this in async code — it works the same way for synchronous errors.

```javascript
try {
    // code that might throw
    let result = 10 / 0;
    console.log(undeclaredVariable); // ReferenceError
} catch (error) {
    console.log(error.message); // error message string
    console.log(error.name);    // error type
    console.log(error.stack);   // where it happened (file + line number)
} finally {
    console.log("This always runs");
}
```

- `error.name` — the type of error (`"ReferenceError"`, `"TypeError"`, etc.)
- `error.message` — human-readable description of what went wrong
- `error.stack` — full stack trace showing where the error originated

---

### Built-in error types

JavaScript has several built-in error types — each for a different kind of mistake.

| Error type       | When it occurs                                              |
|------------------|-------------------------------------------------------------|
| `ReferenceError` | Using a variable that doesn't exist                         |
| `TypeError`      | Using a value in the wrong way (calling non-function, etc.) |
| `SyntaxError`    | Code that can't be parsed (can't be caught at runtime)      |
| `RangeError`     | Value is outside the allowed range                          |
| `URIError`       | Invalid characters in `encodeURI` / `decodeURI`             |
| `EvalError`      | Issue with `eval()` — rarely seen                           |

```javascript
// ReferenceError
console.log(x); // x is not defined

// TypeError
null.toString(); // can't call method on null

// RangeError
new Array(-1); // invalid array length

// SyntaxError — can't be caught, breaks before code runs
// let x = ; // this would be a SyntaxError
```

---

### Throwing errors manually

You can throw your own errors using `throw`. This stops execution and jumps to the nearest `catch`.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message); // "Cannot divide by zero"
}
```

You can throw any value — but always throw an `Error` object so you get `.message` and `.stack`.

---

### Throwing specific error types

```javascript
function getUser(id) {
    if (typeof id !== "number") {
        throw new TypeError("id must be a number");
    }
    if (id <= 0) {
        throw new RangeError("id must be greater than 0");
    }
    return { id, name: "Aashwin" };
}

try {
    getUser("abc");
} catch (error) {
    console.log(error.name);    // "TypeError"
    console.log(error.message); // "id must be a number"
}
```

---

### Checking error type in catch

When a `try` block can throw different kinds of errors, you can check which one it is using `instanceof`.

```javascript
try {
    getUser(-1);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Wrong type:", error.message);
    } else if (error instanceof RangeError) {
        console.log("Out of range:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}
```

---

### Custom error classes

Extend the built-in `Error` class to create your own error types — useful for specific application errors.

```javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);          // passes message to Error
        this.name = "ValidationError";
        this.field = field;      // custom property
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

// Using them
try {
    throw new ValidationError("Email is invalid", "email");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`${error.name} on field "${error.field}": ${error.message}`);
        // ValidationError on field "email": Email is invalid
    }
}
```

---

### Re-throwing errors

Sometimes you catch an error, handle what you can, and rethrow what you can't.

```javascript
function processData(data) {
    try {
        JSON.parse(data);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log("Invalid JSON — skipping");
        } else {
            throw error; // not a JSON error — rethrow for someone else to handle
        }
    }
}
```

---

### Errors in async / await

Works exactly the same with `try/catch` — already covered in the Async section, but here's a reminder:

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Fetch failed:", error.message);
    }
}
```

---

### Quick reference

| Concept                  | Syntax                                        |
|--------------------------|-----------------------------------------------|
| Catch an error           | `try { } catch (error) { }`                   |
| Always run cleanup       | `finally { }`                                 |
| Error name               | `error.name`                                  |
| Error message            | `error.message`                               |
| Stack trace              | `error.stack`                                 |
| Throw an error           | `throw new Error("message")`                  |
| Throw specific type      | `throw new TypeError("message")`              |
| Check error type         | `error instanceof TypeError`                  |
| Custom error class       | `class MyError extends Error {}`              |
| Rethrow                  | `throw error` inside catch                    |

---

## Calculator

A practical project using DOM manipulation, event handling, conditionals, error handling, and string/number conversion — all covered so far.

A fully working calculator with a display, number buttons, operators, equals, clear, and backspace.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="calculator">

      <div id="display">0</div>

      <div class="buttons">
        <button class="btn clear"    id="clearBtn">AC</button>
        <button class="btn backspace" id="backspaceBtn">⌫</button>
        <button class="btn operator" data-value="%">%</button>
        <button class="btn operator" data-value="/">÷</button>

        <button class="btn number"   data-value="7">7</button>
        <button class="btn number"   data-value="8">8</button>
        <button class="btn number"   data-value="9">9</button>
        <button class="btn operator" data-value="*">×</button>

        <button class="btn number"   data-value="4">4</button>
        <button class="btn number"   data-value="5">5</button>
        <button class="btn number"   data-value="6">6</button>
        <button class="btn operator" data-value="-">−</button>

        <button class="btn number"   data-value="1">1</button>
        <button class="btn number"   data-value="2">2</button>
        <button class="btn number"   data-value="3">3</button>
        <button class="btn operator" data-value="+">+</button>

        <button class="btn number"   data-value="0" id="zeroBtn">0</button>
        <button class="btn number"   data-value=".">.</button>
        <button class="btn equals"   id="equalsBtn">=</button>
      </div>

    </div>

    <script src="index.js"></script>
  </body>
</html>
```

### CSS

```css
/* style.css */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a2e;
}

.calculator {
    background-color: #16213e;
    border-radius: 16px;
    padding: 24px;
    width: 320px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

#display {
    background-color: #0f3460;
    color: white;
    font-size: 2.4rem;
    font-family: monospace;
    text-align: right;
    padding: 16px 20px;
    border-radius: 10px;
    margin-bottom: 16px;
    min-height: 70px;
    word-break: break-all;
    overflow: hidden;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.btn {
    padding: 18px;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.15s;
}

.number, .backspace {
    background-color: #1a1a2e;
    color: white;
}

.operator {
    background-color: #e94560;
    color: white;
}

.clear {
    background-color: #e94560;
    color: white;
}

.equals {
    background-color: #00ff99;
    color: #1a1a2e;
    font-weight: bold;
}

.btn:hover {
    opacity: 0.8;
}

#zeroBtn {
    grid-column: span 2;   /* 0 button spans 2 columns */
}
```

### JavaScript

```javascript
// index.js
const display      = document.getElementById("display");
const clearBtn     = document.getElementById("clearBtn");
const backspaceBtn = document.getElementById("backspaceBtn");
const equalsBtn    = document.getElementById("equalsBtn");
const buttons      = document.querySelectorAll(".btn");

let expression = "";

function updateDisplay(value) {
    display.textContent = value === "" ? "0" : value;
}

// Handle number and operator buttons via data-value
buttons.forEach(btn => {
    if (btn.dataset.value !== undefined) {
        btn.onclick = function() {
            // Prevent multiple decimals in the same number
            if (btn.dataset.value === ".") {
                const parts = expression.split(/[\+\-\*\/\%]/);
                const lastPart = parts[parts.length - 1];
                if (lastPart.includes(".")) return;
            }

            // Prevent starting with an operator (except minus for negatives)
            if (["/", "*", "%"].includes(btn.dataset.value) && expression === "") return;

            expression += btn.dataset.value;
            updateDisplay(expression);
        };
    }
});

// Clear
clearBtn.onclick = function() {
    expression = "";
    updateDisplay("");
};

// Backspace
backspaceBtn.onclick = function() {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
};

// Equals
equalsBtn.onclick = function() {
    if (expression === "") return;

    try {
        const result = Function(`"use strict"; return (${expression})`)();

        if (!isFinite(result)) {
            throw new Error("Cannot divide by zero");
        }

        expression = String(result);
        updateDisplay(expression);
    } catch (error) {
        display.textContent = "Error";
        expression = "";
    }
};
```

### How it works

**`data-value` attributes:**
Instead of adding an `onclick` to every button individually, each button carries its value in a `data-value` attribute. One `forEach` loop handles all of them — much cleaner than 17 separate handlers.

**`document.querySelectorAll(".btn")`:**
Selects all elements with the class `btn` and returns a NodeList. `.forEach` works on it the same way as an array.

**`btn.dataset.value`:**
Reads the `data-value` attribute from the HTML. `data-*` attributes are a standard way to store custom data on HTML elements and read them in JavaScript via `.dataset`.

**Decimal guard:**
```javascript
const parts = expression.split(/[\+\-\*\/\%]/);
const lastPart = parts[parts.length - 1];
if (lastPart.includes(".")) return;
```
Splits the expression on any operator to isolate the current number being typed. If it already has a `.`, the button press is ignored.

**Backspace with `.slice(0, -1)`:**
Removes the last character from the expression string — same pattern from String Methods.

**`Function(...)()`:**
Evaluates the expression string as JavaScript code and returns the result. Safer than `eval()` — the `"use strict"` prevents access to the outer scope.

**`isFinite(result)`:**
Returns `false` for `Infinity` and `NaN` — catches division by zero (`10/0` gives `Infinity` in JS) and invalid expressions.

**Error handling:**
If the expression is malformed (like `5+*3`) the `Function` call throws a `SyntaxError`. The `catch` block shows `"Error"` on the display and clears the expression so the user can start fresh.

---

## DOM

The DOM (Document Object Model) is the browser's representation of the HTML page as a tree of objects. JavaScript uses the DOM to read, change, add, or remove anything on the page.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            └── button
```

Every HTML element becomes a **node** in this tree. JavaScript can navigate and manipulate any of them.

---

### Selecting elements

#### By ID
```javascript
const btn = document.getElementById("myBtn");
```
Returns one element or `null` if not found.

#### By class name
```javascript
const items = document.getElementsByClassName("item");
```
Returns an HTMLCollection (live list) of all matching elements.

#### By tag name
```javascript
const paragraphs = document.getElementsByTagName("p");
```
Returns an HTMLCollection of all `<p>` elements.

#### querySelector — CSS selector, first match
```javascript
const btn = document.querySelector("#myBtn");       // by id
const item = document.querySelector(".item");       // by class
const p = document.querySelector("p");              // by tag
const input = document.querySelector("input[type='text']"); // by attribute
```
Returns the first match or `null`.

#### querySelectorAll — CSS selector, all matches
```javascript
const items = document.querySelectorAll(".item");
```
Returns a NodeList. Use `.forEach()` to loop over it.

---

### Reading and changing content

```javascript
const el = document.getElementById("myEl");

// Text content — plain text, no HTML
el.textContent;           // get
el.textContent = "Hello"; // set

// Inner HTML — includes HTML tags
el.innerHTML;                          // get
el.innerHTML = "<strong>Hello</strong>"; // set — use with caution

// Value — for inputs
const input = document.getElementById("myInput");
input.value;          // get what user typed
input.value = "text"; // set
```

> Never use `innerHTML` with user-provided content — it opens the door to XSS (cross-site scripting) attacks. Use `textContent` for plain text.

---

### Changing styles

#### Inline styles
```javascript
const el = document.getElementById("box");

el.style.color = "red";
el.style.backgroundColor = "#1a1a2e"; // camelCase, not kebab-case
el.style.fontSize = "24px";
el.style.display = "none";            // hide element
el.style.display = "";                // remove inline style, revert to CSS
```

#### Classes — the better way
Toggling classes is cleaner than setting individual styles — keeps styling in CSS where it belongs.

```javascript
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");        // adds if absent, removes if present
el.classList.contains("active");      // true or false
el.classList.replace("old", "new");   // swap one class for another
```

---

### Changing attributes

```javascript
const img = document.getElementById("myImg");

img.getAttribute("src");              // get attribute value
img.setAttribute("src", "new.jpg");   // set attribute value
img.removeAttribute("alt");           // remove attribute
img.hasAttribute("src");              // true or false
```

Common attributes can also be accessed directly as properties:

```javascript
img.src = "new.jpg";
img.alt = "A photo";

const link = document.getElementById("myLink");
link.href = "https://example.com";

const input = document.getElementById("myInput");
input.disabled = true;
input.placeholder = "Type here...";
```

---

### Traversing the DOM

Navigate between nodes relative to a given element.

```javascript
const el = document.getElementById("myEl");

el.parentElement;           // direct parent
el.children;                // HTMLCollection of direct children
el.firstElementChild;       // first child element
el.lastElementChild;        // last child element
el.nextElementSibling;      // next sibling
el.previousElementSibling;  // previous sibling
```

```javascript
// Loop through all children
const list = document.getElementById("myList");
for (let item of list.children) {
    console.log(item.textContent);
}
```

---

### Creating and inserting elements

```javascript
// Create a new element
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new";
newDiv.classList.add("card");

// Append to end of parent
document.body.appendChild(newDiv);

// Insert before a specific element
const parent = document.getElementById("container");
const reference = document.getElementById("existing");
parent.insertBefore(newDiv, reference);

// Modern — insertAdjacentElement
// positions: "beforebegin", "afterbegin", "beforeend", "afterend"
reference.insertAdjacentElement("afterend", newDiv);

// Modern — append (can take multiple, accepts strings too)
parent.append(newDiv, "some text");
parent.prepend(newDiv); // insert at the beginning
```

---

### Removing elements

```javascript
const el = document.getElementById("myEl");

el.remove(); // removes itself — modern, clean

// Older way — remove via parent
el.parentElement.removeChild(el);
```

---

### Event listeners

You've been using `.onclick` — `addEventListener` is the more flexible way. It lets you attach multiple listeners to the same element and remove them later.

```javascript
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
    console.log("clicked");
});

// Arrow function version
btn.addEventListener("click", () => console.log("clicked"));
```

#### Common events

| Event          | Fires when                                 |
|----------------|--------------------------------------------|
| `click`        | Element is clicked                         |
| `dblclick`     | Element is double-clicked                  |
| `mouseover`    | Mouse enters the element                   |
| `mouseout`     | Mouse leaves the element                   |
| `keydown`      | Key is pressed down                        |
| `keyup`        | Key is released                            |
| `input`        | Input value changes (every keystroke)      |
| `change`       | Input loses focus after value changed      |
| `submit`       | Form is submitted                          |
| `load`         | Page or resource finishes loading          |
| `DOMContentLoaded` | HTML is parsed, before images load    |
| `scroll`       | User scrolls                               |
| `resize`       | Window is resized                          |

#### The event object

Every event listener receives an event object with details about what happened.

```javascript
btn.addEventListener("click", function(event) {
    console.log(event.type);   // "click"
    console.log(event.target); // the element that was clicked
});

document.addEventListener("keydown", function(event) {
    console.log(event.key);    // "Enter", "a", "ArrowUp", etc.
});

document.addEventListener("mousemove", function(event) {
    console.log(event.clientX, event.clientY); // cursor position
});
```

#### Removing event listeners

```javascript
function handleClick() {
    console.log("clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // must pass same function reference
```

#### Event delegation

Instead of adding a listener to every child, add one to the parent and check which child triggered it.

```javascript
const list = document.getElementById("myList");

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```

Efficient — one listener handles all items, even ones added dynamically later.

#### Preventing default behaviour

```javascript
// Prevent form from reloading the page on submit
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted without reload");
});

// Prevent link from navigating
const link = document.querySelector("a");
link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click blocked");
});
```

---

### Quick reference

| Task                        | Code                                              |
|-----------------------------|---------------------------------------------------|
| Select by id                | `document.getElementById("id")`                  |
| Select first match          | `document.querySelector(".class")`               |
| Select all matches          | `document.querySelectorAll(".class")`             |
| Get text                    | `el.textContent`                                  |
| Set text                    | `el.textContent = "text"`                         |
| Get/set HTML                | `el.innerHTML`                                    |
| Get input value             | `el.value`                                        |
| Add class                   | `el.classList.add("name")`                        |
| Remove class                | `el.classList.remove("name")`                     |
| Toggle class                | `el.classList.toggle("name")`                     |
| Set style                   | `el.style.property = "value"`                     |
| Get attribute               | `el.getAttribute("attr")`                         |
| Set attribute               | `el.setAttribute("attr", "value")`                |
| Create element              | `document.createElement("tag")`                   |
| Add to page                 | `parent.appendChild(el)`                          |
| Remove from page            | `el.remove()`                                     |
| Add event listener          | `el.addEventListener("event", fn)`                |
| Prevent default             | `event.preventDefault()`                          |

---

## Key Events

Three events fire when a user interacts with the keyboard:

| Event      | Fires when                                      |
|------------|-------------------------------------------------|
| `keydown`  | Key is pressed down — fires repeatedly if held  |
| `keyup`    | Key is released                                 |
| `keypress` | Deprecated — don't use, use `keydown` instead   |

---

### Basic usage

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);  // "a", "Enter", "ArrowUp", " " (space), etc.
});

document.addEventListener("keyup", function(event) {
    console.log(event.key + " was released");
});
```

Listen on `document` to catch all keypresses regardless of what's focused. Listen on a specific element to only catch keys when that element is focused.

---

### The event object

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);      // "a", "A", "Enter", "ArrowLeft"
    console.log(event.code);     // "KeyA", "Enter", "ArrowLeft" — physical key position
    console.log(event.repeat);   // true if key is being held down
});
```

- `event.key` — the actual character or key name. Affected by Shift (`"a"` vs `"A"`)
- `event.code` — the physical key on the keyboard, not affected by Shift or layout (`"KeyA"` is always `"KeyA"`)
- `event.repeat` — `true` when the key is held and the event keeps firing

---

### Modifier keys

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.shiftKey);  // true if Shift is held
    console.log(event.ctrlKey);   // true if Ctrl is held
    console.log(event.altKey);    // true if Alt is held
    console.log(event.metaKey);   // true if Cmd (Mac) or Win key is held
});
```

Combining keys:

```javascript
document.addEventListener("keydown", function(event) {
    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // stop browser save dialog
        console.log("Save triggered");
    }

    // Shift + Enter
    if (event.shiftKey && event.key === "Enter") {
        console.log("Shift + Enter pressed");
    }
});
```

---

### Common key names

| Key pressed    | `event.key`   |
|----------------|---------------|
| Letter a       | `"a"` or `"A"` (with Shift) |
| Enter          | `"Enter"`     |
| Space          | `" "`         |
| Backspace      | `"Backspace"` |
| Escape         | `"Escape"`    |
| Arrow keys     | `"ArrowUp"`, `"ArrowDown"`, `"ArrowLeft"`, `"ArrowRight"` |
| Tab            | `"Tab"`       |
| Delete         | `"Delete"`    |
| Function keys  | `"F1"` – `"F12"` |

---

### Practical example — form submit on Enter

```javascript
const input = document.getElementById("myInput");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Submitted:", input.value);
        input.value = "";
    }
});
```

### Practical example — move a box with arrow keys

```javascript
const box = document.getElementById("box");
let x = 0;
let y = 0;

document.addEventListener("keydown", function(event) {
    const speed = 10;

    if (event.key === "ArrowUp")    y -= speed;
    if (event.key === "ArrowDown")  y += speed;
    if (event.key === "ArrowLeft")  x -= speed;
    if (event.key === "ArrowRight") x += speed;

    box.style.transform = `translate(${x}px, ${y}px)`;
});
```

---

### `keydown` vs `keyup` — which to use

- **`keydown`** — use when you want the action to happen as soon as the key is pressed, or repeatedly while held (movement, shortcuts)
- **`keyup`** — use when you want the action to happen after the key is fully released (one-shot triggers)

---

## Hide and Show HTML Elements

Three main ways to hide and show elements in JavaScript — each behaves differently.

---

### Using `display`

Completely removes the element from the page — takes up no space.

```javascript
const el = document.getElementById("myEl");

el.style.display = "none";   // hide — element gone, no space
el.style.display = "block";  // show — back as a block element
el.style.display = "";       // remove inline style, revert to CSS default
```

---

### Using `visibility`

Hides the element visually but it still takes up space in the layout.

```javascript
el.style.visibility = "hidden";  // invisible but still occupies space
el.style.visibility = "visible"; // back to visible
```

---

### Using `opacity`

Makes the element transparent but it still takes up space and can still receive clicks.

```javascript
el.style.opacity = "0";  // fully transparent
el.style.opacity = "1";  // fully visible
el.style.opacity = "0.5"; // 50% transparent
```

---

### The difference

```
display: none      — gone from layout, no space, no clicks
visibility: hidden — invisible, keeps space, no clicks
opacity: 0         — invisible, keeps space, still clickable
```

---

### Toggle with classList — the clean way

The best practice is to define a `.hidden` class in CSS and toggle it with JavaScript instead of setting inline styles.

```css
/* style.css */
.hidden {
    display: none;
}
```

```javascript
const el = document.getElementById("myEl");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function() {
    el.classList.toggle("hidden");
});
```

Clean, reusable, and keeps styling in CSS where it belongs.

---

### Practical example — show/hide password

```html
<!-- index.html -->
<input type="password" id="passwordInput" />
<button id="toggleBtn">Show</button>
```

```javascript
// index.js
const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show";
    }
});
```

---

### Practical example — accordion / toggle section

```html
<!-- index.html -->
<button id="toggleBtn">Show Details</button>
<div id="details" class="hidden">
    <p>This is the hidden content that shows on click.</p>
</div>
```

```javascript
// index.js
const toggleBtn = document.getElementById("toggleBtn");
const details = document.getElementById("details");

toggleBtn.addEventListener("click", function() {
    details.classList.toggle("hidden");
    toggleBtn.textContent = details.classList.contains("hidden")
        ? "Show Details"
        : "Hide Details";
});
```

---

### Quick reference

| Method                          | Space kept? | Clickable? | Best for              |
|---------------------------------|-------------|------------|-----------------------|
| `display: none`                 | No          | No         | Fully removing element |
| `visibility: hidden`            | Yes         | No         | Hiding without shifting layout |
| `opacity: 0`                    | Yes         | Yes        | Fade effects          |
| `classList.toggle("hidden")`    | No          | No         | Clean toggle pattern  |

---

## NodeList

A NodeList is a collection of DOM nodes returned by methods like `querySelectorAll`. It looks like an array but it isn't one — it has some array-like behaviour but is missing most array methods.

---

### Getting a NodeList

```javascript
const items = document.querySelectorAll(".item");
console.log(items); // NodeList(3) [li, li, li]
```

---

### Accessing elements

```javascript
items[0];           // first element — index access works
items.length;       // number of elements
```

---

### Looping over a NodeList

```javascript
const items = document.querySelectorAll("li");

// forEach — works on NodeList directly
items.forEach(item => console.log(item.textContent));

// for...of — also works
for (let item of items) {
    console.log(item.textContent);
}

// Regular for loop — also works
for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
}
```

---

### NodeList is NOT an array

Array methods like `.map()`, `.filter()`, `.reduce()` do not work on a NodeList directly.

```javascript
const items = document.querySelectorAll("li");

items.map(item => item.textContent);    // TypeError — map is not a function
items.filter(item => item.textContent); // TypeError
```

To use array methods, convert it to an array first:

```javascript
// Spread
const arr = [...items];

// Array.from
const arr = Array.from(items);

// Now array methods work
arr.map(item => item.textContent);
arr.filter(item => item.classList.contains("active"));
```

---

### Static vs Live

`querySelectorAll` returns a **static** NodeList — it does not update if the DOM changes after the query.

`getElementsByClassName` and `getElementsByTagName` return an **HTMLCollection** which is **live** — it updates automatically when elements are added or removed.

```javascript
const staticList = document.querySelectorAll(".item");   // static — snapshot
const liveList   = document.getElementsByClassName("item"); // live — updates

// Add a new element
const newItem = document.createElement("li");
newItem.classList.add("item");
document.querySelector("ul").appendChild(newItem);

console.log(staticList.length); // same as before — doesn't include new item
console.log(liveList.length);   // updated — includes new item
```

---

### NodeList vs HTMLCollection vs Array

| Feature           | NodeList         | HTMLCollection   | Array            |
|-------------------|------------------|------------------|------------------|
| Returned by       | `querySelectorAll` | `getElementsByClassName`, `getElementsByTagName` | — |
| Index access      | Yes              | Yes              | Yes              |
| `.length`         | Yes              | Yes              | Yes              |
| `.forEach()`      | Yes              | No               | Yes              |
| `.map()`, `.filter()` | No          | No               | Yes              |
| Live updates      | No (static)      | Yes (live)       | No               |
| Convert to array  | `[...list]` or `Array.from(list)` | same | — |

---

## classList

`classList` is a property on every DOM element that gives you a clean way to add, remove, toggle, and check CSS classes without touching the `className` string directly.

---

### The old way vs classList

```javascript
const el = document.getElementById("box");

// Old way — string manipulation, messy and error-prone
el.className = "box active highlight";
el.className = el.className.replace("active", ""); // removing is painful

// classList — clean and readable
el.classList.add("active");
el.classList.remove("active");
```

---

### Methods

#### `add` — add one or more classes

```javascript
el.classList.add("active");
el.classList.add("active", "highlight", "visible"); // multiple at once
```

If the class already exists, it won't be added twice.

#### `remove` — remove one or more classes

```javascript
el.classList.remove("active");
el.classList.remove("active", "highlight"); // multiple at once
```

If the class doesn't exist, no error is thrown.

#### `toggle` — add if absent, remove if present

```javascript
el.classList.toggle("active"); // off → on → off → on
```

With a second argument — force add or remove based on a condition:

```javascript
el.classList.toggle("active", true);  // always adds
el.classList.toggle("active", false); // always removes
```

Useful when the condition comes from a variable:

```javascript
el.classList.toggle("active", isLoggedIn); // adds if true, removes if false
```

#### `contains` — check if a class exists

```javascript
el.classList.contains("active"); // true or false
```

#### `replace` — swap one class for another

```javascript
el.classList.replace("inactive", "active"); // replaces "inactive" with "active"
```

Returns `true` if the replacement happened, `false` if the first class wasn't found.

---

### Reading all classes

```javascript
console.log(el.classList);         // DOMTokenList ["box", "active", "highlight"]
console.log(el.classList.length);  // 3 — number of classes

// Loop over all classes
el.classList.forEach(cls => console.log(cls));

// Convert to array
const classes = [...el.classList];
```

---

### `className` — the string version

Sometimes you need the full class string at once.

```javascript
console.log(el.className); // "box active highlight" — space-separated string
el.className = "box";      // replaces ALL classes at once
el.className = "";         // removes all classes
```

Use `classList` for individual class operations. Use `className` only when you want to replace or clear all classes at once.

---

### Practical examples

#### Active nav link

```javascript
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active")); // remove from all
        this.classList.add("active"); // add to clicked one
    });
});
```

#### Dark mode toggle

```javascript
const toggleBtn = document.getElementById("darkModeBtn");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
});
```

---

### Quick reference

| Method                          | What it does                                     |
|---------------------------------|--------------------------------------------------|
| `el.classList.add("x")`         | Add class x                                      |
| `el.classList.remove("x")`      | Remove class x                                   |
| `el.classList.toggle("x")`      | Add if absent, remove if present                 |
| `el.classList.toggle("x", bool)`| Add if true, remove if false                     |
| `el.classList.contains("x")`    | Returns true if class exists                     |
| `el.classList.replace("a","b")` | Replace class a with class b                     |
| `el.classList.length`           | Number of classes                                |
| `el.className`                  | Full class string — replaces all when set        |

---

## Rock Paper Scissors

A practical project using arrays, objects, DOM manipulation, classList, event listeners, conditionals, and Math.random() — all covered so far.

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Rock Paper Scissors</h1>

    <div id="choices">
      <button class="choice-btn" data-choice="rock">🪨 Rock</button>
      <button class="choice-btn" data-choice="paper">📄 Paper</button>
      <button class="choice-btn" data-choice="scissors">✂️ Scissors</button>
    </div>

    <div id="result">
      <p id="playerChoice">Player: —</p>
      <p id="computerChoice">Computer: —</p>
      <p id="outcome"></p>
    </div>

    <div id="score">
      <span>Player: <strong id="playerScore">0</strong></span>
      <span>Computer: <strong id="computerScore">0</strong></span>
      <span>Draws: <strong id="drawScore">0</strong></span>
    </div>

    <button id="resetBtn">Reset Score</button>

    <script src="index.js"></script>
  </body>
</html>
```

### CSS

```css
/* style.css */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #1a1a2e;
    color: white;
    font-family: Arial, sans-serif;
    gap: 32px;
}

h1 {
    font-size: 2.5rem;
}

#choices {
    display: flex;
    gap: 16px;
}

.choice-btn {
    padding: 20px 32px;
    font-size: 1.2rem;
    border: 2px solid #ffffff30;
    border-radius: 12px;
    background-color: #16213e;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
}

.choice-btn:hover {
    background-color: #0f3460;
    transform: translateY(-4px);
}

.choice-btn.selected {
    border-color: #00ff99;
}

#result {
    text-align: center;
    font-size: 1.2rem;
    line-height: 2;
}

#outcome {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 8px;
}

#outcome.win  { color: #00ff99; }
#outcome.lose { color: #e94560; }
#outcome.draw { color: #f5a623; }

#score {
    display: flex;
    gap: 32px;
    font-size: 1.1rem;
}

#resetBtn {
    padding: 10px 24px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #e94560;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;
}

#resetBtn:hover {
    opacity: 0.8;
}
```

### JavaScript

```javascript
// index.js
const choices      = ["rock", "paper", "scissors"];
const choiceBtns   = document.querySelectorAll(".choice-btn");
const playerChoiceEl  = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const outcomeEl    = document.getElementById("outcome");
const playerScoreEl   = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const drawScoreEl  = document.getElementById("drawScore");
const resetBtn     = document.getElementById("resetBtn");

let playerScore   = 0;
let computerScore = 0;
let drawScore     = 0;

const wins = {
    rock:     "scissors",
    paper:    "rock",
    scissors: "paper"
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getOutcome(player, computer) {
    if (player === computer)          return "draw";
    if (wins[player] === computer)    return "win";
    return "lose";
}

function updateScore(outcome) {
    if (outcome === "win")       playerScore++;
    else if (outcome === "lose") computerScore++;
    else                         drawScore++;

    playerScoreEl.textContent   = playerScore;
    computerScoreEl.textContent = computerScore;
    drawScoreEl.textContent     = drawScore;
}

function updateDisplay(player, computer, outcome) {
    const emoji = { rock: "🪨", paper: "📄", scissors: "✂️" };

    playerChoiceEl.textContent   = `Player: ${emoji[player]} ${player}`;
    computerChoiceEl.textContent = `Computer: ${emoji[computer]} ${computer}`;

    outcomeEl.classList.remove("win", "lose", "draw");
    outcomeEl.classList.add(outcome);

    if (outcome === "win")       outcomeEl.textContent = "You Win! 🎉";
    else if (outcome === "lose") outcomeEl.textContent = "You Lose! 💀";
    else                         outcomeEl.textContent = "Draw! 🤝";
}

choiceBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const playerChoice   = btn.dataset.choice;
        const computerChoice = getComputerChoice();
        const outcome        = getOutcome(playerChoice, computerChoice);

        // Highlight selected button
        choiceBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        updateDisplay(playerChoice, computerChoice, outcome);
        updateScore(outcome);
    });
});

resetBtn.addEventListener("click", function() {
    playerScore = computerScore = drawScore = 0;

    playerScoreEl.textContent   = 0;
    computerScoreEl.textContent = 0;
    drawScoreEl.textContent     = 0;

    playerChoiceEl.textContent   = "Player: —";
    computerChoiceEl.textContent = "Computer: —";
    outcomeEl.textContent        = "";
    outcomeEl.classList.remove("win", "lose", "draw");
    choiceBtns.forEach(b => b.classList.remove("selected"));
});
```

### How it works

**`wins` object:**
Instead of a long `if/else` chain to check who wins, the logic is stored in an object. `wins[player]` gives the choice that player beats — so checking `wins[player] === computer` is all you need.

```javascript
wins["rock"]     // "scissors" — rock beats scissors
wins["paper"]    // "rock"     — paper beats rock
wins["scissors"] // "paper"    — scissors beats paper
```

**`data-choice` attribute:**
Each button carries its value in `data-choice`. One `forEach` loop handles all three buttons — the same pattern used in the calculator.

**`classList` for outcome color:**
The `#outcome` element gets a class of `"win"`, `"lose"`, or `"draw"` each round. The old class is removed first with `classList.remove("win", "lose", "draw")` before adding the new one — clean and no leftover classes.

**`getComputerChoice()`:**
Uses `Math.floor(Math.random() * choices.length)` to pick a random index from the `choices` array — the same formula from the Random Number Generator section.

**Score reset:**
```javascript
playerScore = computerScore = drawScore = 0;
```
Chained assignment — sets all three to `0` in one line.
