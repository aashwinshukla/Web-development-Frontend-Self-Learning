# JavaScript — Advanced Topics

## Classes

A class is a blueprint for creating objects.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

let p = new Person("Aashwin", 19);
p.greet(); // Hi, I'm Aashwin
```

### Getters and Setters

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
        [this.firstName, this.lastName] = value.split(" ");
    }
}

let p = new Person("Aashwin", "Shukla");
console.log(p.fullName);       // "Aashwin Shukla"
p.fullName = "Alice Smith";    // calls setter
```

### Static

Belongs to the class, not instances. Call on the class directly.

```javascript
class MathHelper {
    static add(a, b) { return a + b; }
    static PI = 3.14159;
}

MathHelper.add(5, 3); // 8
```

### Private fields

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) { this.#balance += amount; }
    getBalance()    { return this.#balance; }
}

let acc = new BankAccount();
acc.deposit(500);
acc.getBalance(); // 500
acc.#balance;     // SyntaxError — private
```

### Inheritance

```javascript
class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} makes a sound`); }
}

class Dog extends Animal {
    speak() { console.log(`${this.name} barks`); }
}

let d = new Dog("Rex");
d.speak(); // Rex barks
```

### super

```javascript
class Dog extends Animal {
    constructor(name, breed) {
        super(name);       // must call before using this
        this.breed = breed;
    }

    speak() {
        super.speak();     // call parent method
        console.log(`${this.name} also barks`);
    }
}
```

### instanceof

```javascript
d instanceof Dog;    // true
d instanceof Animal; // true — child is also instance of parent
d instanceof Cat;    // false
```

### Prototypes

Every object has a hidden prototype chain. Methods defined in a class are stored on the prototype — shared across all instances, not copied to each.

```javascript
let p = new Person("Aashwin", 19);
p.hasOwnProperty("name");   // true — own property
p.hasOwnProperty("greet");  // false — on prototype
```

### Method chaining

Return `this` from each method to enable chaining.

```javascript
class Calculator {
    constructor() { this.value = 0; }
    add(n)      { this.value += n; return this; }
    subtract(n) { this.value -= n; return this; }
    getResult() { return this.value; }
}

new Calculator().add(10).subtract(3).getResult(); // 7
```

### Quick reference

| Concept         | Syntax                              |
|-----------------|-------------------------------------|
| Constructor     | `constructor(params) {}`            |
| Method          | `methodName() {}`                   |
| Getter          | `get prop() { return ...; }`        |
| Setter          | `set prop(val) { ... }`             |
| Static          | `static method() {}`                |
| Private field   | `#fieldName`                        |
| Inherit         | `class Child extends Parent {}`     |
| Super           | `super()` / `super.method()`        |
| Check type      | `obj instanceof ClassName`          |

---

## Callbacks

A callback is a function passed as an argument to another function to be called later.

```javascript
function processUser(name, callback) {
    callback(name);
}

processUser("Aashwin", name => console.log(`Hello, ${name}!`));
```

You've already used callbacks: `forEach`, `map`, `filter`, `onclick`.

### Timing callbacks

```javascript
// Run once after delay
setTimeout(() => console.log("Done"), 2000); // 2 seconds

// Run repeatedly
const id = setInterval(() => console.log("tick"), 1000);
clearInterval(id); // stop it
```

### Why callbacks exist

JS is single-threaded. Async tasks (timers, fetch) are handed off to the browser. When done, the callback runs — JS doesn't block and wait.

```javascript
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2
```

### Callback hell — the problem

```javascript
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => { /* deeply nested */ }, 1000);
    }, 1000);
}, 1000);
```

Solved by Promises and async/await.

---

## Asynchronous JavaScript

### Promises

```javascript
const p = new Promise((resolve, reject) => {
    let ok = true;
    if (ok) resolve("Success");
    else     reject("Failed");
});

p.then(result => console.log(result))
 .catch(error => console.log(error))
 .finally(() => console.log("Done"));
```

Three states: **pending** → **fulfilled** or **rejected**.

Chain `.then()` to avoid callback hell — each `.then()` receives the return of the previous.

### async / await

Cleaner syntax built on Promises. Reads like synchronous code.

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Request finished");
    }
}
```

- `async` — function always returns a Promise
- `await` — pauses inside async function until Promise resolves
- `try/catch/finally` — handles errors

### fetch API

```javascript
// GET
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();

// POST
await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Aashwin", age: 19 })
});
```

### Promise.all — parallel requests

```javascript
const [user, post] = await Promise.all([
    fetch("...users/1").then(r => r.json()),
    fetch("...posts/1").then(r => r.json())
]);
```

Faster than sequential — both requests fire at the same time.

### Event loop

1. Sync code runs first (call stack)
2. Async tasks handed to browser
3. Callbacks go to task queue when done
4. Event loop picks from queue when stack is empty

Promises go to the **microtask queue** — higher priority than `setTimeout`.

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
```

| Concept         | Syntax                                      |
|-----------------|---------------------------------------------|
| Create promise  | `new Promise((resolve, reject) => {})`      |
| Handle success  | `.then(result => {})`                       |
| Handle error    | `.catch(error => {})`                       |
| Always run      | `.finally(() => {})`                        |
| Async function  | `async function foo() {}`                   |
| Await           | `const data = await somePromise`            |
| Parallel        | `await Promise.all([p1, p2])`               |

---

## Error Object

```javascript
try {
    let x = undeclaredVar;
} catch (error) {
    console.log(error.name);    // "ReferenceError"
    console.log(error.message); // what went wrong
    console.log(error.stack);   // where it happened
} finally {
    console.log("Always runs");
}
```

### Built-in error types

| Type             | When                                        |
|------------------|---------------------------------------------|
| `ReferenceError` | Using undeclared variable                   |
| `TypeError`      | Wrong type usage (calling non-function etc.)|
| `RangeError`     | Value outside allowed range                 |
| `SyntaxError`    | Invalid syntax — can't be caught at runtime |

### Throwing errors

```javascript
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

try {
    divide(10, 0);
} catch (e) {
    console.log(e.message); // "Cannot divide by zero"
}
```

Always throw `Error` objects — you get `.message` and `.stack`.

### Specific types

```javascript
throw new TypeError("Expected a number");
throw new RangeError("Must be between 1 and 100");
```

### Check type in catch

```javascript
if (error instanceof TypeError) { ... }
else if (error instanceof RangeError) { ... }
```

### Custom error class

```javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

throw new ValidationError("Email invalid", "email");
```

### Re-throwing

```javascript
try {
    JSON.parse(data);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Bad JSON");
    } else {
        throw error; // not our problem — pass it up
    }
}
```

---

## JSON

JSON (JavaScript Object Notation) is a text format for storing and exchanging data.

Rules:
- Keys must be in **double quotes**
- No functions, `undefined`, or comments
- Valid types: string, number, boolean, array, object, `null`

```javascript
// JS object → JSON string
const str = JSON.stringify({ name: "Aashwin", age: 19 });
// '{"name":"Aashwin","age":19}'

// Pretty print
JSON.stringify(obj, null, 2);

// JSON string → JS object
const obj = JSON.parse('{"name":"Aashwin","age":19}');
obj.name; // "Aashwin"
```

Always wrap `JSON.parse` in try/catch — throws `SyntaxError` on invalid JSON.

### Functions and undefined are dropped

```javascript
JSON.stringify({ name: "Aashwin", greet: function() {} });
// '{"name":"Aashwin"}' — function silently dropped
```

### Deep copy

```javascript
const copy = JSON.parse(JSON.stringify(original));
```

### localStorage

```javascript
// Save object
localStorage.setItem("user", JSON.stringify(user));

// Load object
const user = JSON.parse(localStorage.getItem("user"));
```

| Method                        | What it does                     |
|-------------------------------|----------------------------------|
| `JSON.stringify(obj)`         | JS object → JSON string          |
| `JSON.stringify(obj, null, 2)`| Pretty-printed JSON string       |
| `JSON.parse(str)`             | JSON string → JS object          |
| `response.json()`             | Parse fetch response as JSON     |
