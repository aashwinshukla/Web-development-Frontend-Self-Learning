# React — Events and State

## Event Handling

Events in React work the same as in JavaScript but with camelCase names.

```jsx
function Button() {
    const handleClick = () => console.log("OUCH!");

    return <button onClick={handleClick}>Click me</button>;
}
```

- `onClick` — camelCase, not `onclick`
- `{handleClick}` — pass the function reference, no `()`. Adding `()` calls it immediately on render.

### Passing arguments

```jsx
function Button() {
    const handleClick = (name) => console.log(`${name} stop clicking me`);

    return <button onClick={() => handleClick("Aashwin")}>Click me</button>;
}
```

Arrow function wrapper needed so the handler doesn't run immediately on render.

### Common events

| Event | Fires when |
|---|---|
| `onClick` | Element is clicked |
| `onDoubleClick` | Element is double-clicked |
| `onChange` | Input value changes |
| `onSubmit` | Form is submitted |
| `onMouseEnter` | Mouse enters element |
| `onMouseLeave` | Mouse leaves element |
| `onKeyDown` | Key is pressed |

---

## The Event Object

Every event handler receives an event object with details about what happened.

```jsx
btn.addEventListener("click", function(e) {
    console.log(e.type);          // "click"
    console.log(e.target);        // the element clicked
    console.log(e.target.value);  // input value
});
```

### Modifying elements directly

```jsx
const handleClick = (e) => e.target.textContent = "OUCH!";

<button onDoubleClick={(e) => handleClick(e)}>Click me</button>
```

Direct DOM manipulation works but updating **state** is the React way — state is covered next.

### Hiding an element on click

```jsx
const handleClick = (e) => e.target.style.display = "none";

<img onClick={(e) => handleClick(e)} src={imageUrl} />
```

Common mistake — using `-` instead of `=`. `e.target.style.display - "none"` is subtraction, not assignment.

---

## useState

State is data that belongs to a component. When state changes, React re-renders the component.

```jsx
import { useState } from "react";

const [name, setName]           = useState("Guest");
const [age, setAge]             = useState(0);
const [isEmployed, setIsEmployed] = useState(false);
```

- `useState(initialValue)` — sets the starting value
- Returns `[currentValue, setterFunction]`
- Destructured into `[value, setValue]`

### Updating state

```jsx
const updateName = () => setName("Aashwin");
const updateAge  = () => setAge(age + 1);
const toggle     = () => setIsEmployed(!isEmployed);
```

Use the setter function — never modify the value directly. React detects the change and re-renders.

### Why not a regular variable

```jsx
let name = "Guest"; // changing this does nothing — no re-render
```

Regular variables don't trigger re-renders. `useState` tells React to watch the value.

---

## Updater Function

When new state depends on the previous value, pass a function to the setter.

### The problem

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// count only goes to 1, not 3 — all three read the same stale value
```

### The fix

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
// count correctly goes to 3
```

React calls the function with the latest state each time — they chain correctly.

---

## Updating Objects in State

Use spread to update one property while keeping the rest.

```jsx
const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

function handleYearChange(e) {
    setCar(c => ({ ...c, year: e.target.value }));
}
```

- `...c` — spreads all existing properties
- `, year: e.target.value` — overrides just the one that changed
- `({ })` — parentheses required around the object in an arrow function, otherwise `{}` is read as a code block

---

## Updating Arrays in State

Use spread to add, `filter` to remove — never mutate directly.

```jsx
const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

// Add
setFoods(f => [...f, newFood]);

// Remove
setFoods(foods.filter((_, i) => i !== index));
```

Direct mutation (`push`, `splice`) doesn't trigger a re-render — React compares references.

---

## Controlled Components — Forms

Input `value` is tied to state. Every keystroke updates state via `onChange`.

```jsx
const [name, setName] = useState("");

<input value={name} onChange={e => setName(e.target.value)} />
```

### Textarea

```jsx
<textarea value={comment} onChange={e => setComment(e.target.value)} />
```

### Select dropdown

```jsx
<select value={payment} onChange={e => setPayment(e.target.value)}>
    <option value="">Select an option</option>
    <option value="visa">Visa</option>
    <option value="mastercard">Mastercard</option>
</select>
```

### Radio buttons

```jsx
<input
    type="radio"
    value="Pick Up"
    checked={shipping === "Pick Up"}
    onChange={e => setShipping(e.target.value)}
/>
```

`checked` is controlled by comparing state to the radio's value.

---

## Colour Picker — Dynamic Inline Styles

```jsx
const [color, setColor] = useState("#FFFFFF");

<div style={{ backgroundColor: color }}>
    <p>Selected Color: {color}</p>
</div>
<input type="color" value={color} onChange={e => setColor(e.target.value)} />
```

- `input type="color"` — native browser color picker, returns a hex value
- `style={{ backgroundColor: color }}` — outer `{}` is JSX expression, inner `{}` is the JS object
- Main use case for inline styles — when the value is dynamic and comes from state

---

## Counter — useState Project

```jsx
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset     = () => setCount(0);

return (
    <div>
        <p>{count}</p>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increase</button>
    </div>
);
```

---

## Managing an Array of Objects in State

```jsx
const [cars, setCars]     = useState([]);
const [carYear, setCarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("");

function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
}

function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
}
```

`new Date().getFullYear()` — returns current year as a number, used to pre-fill and reset the year input.

---

## To-Do List — Full useState Project

```jsx
const [tasks, setTasks]     = useState([]);
const [newTask, setNewTask] = useState("");

function addTask() {
    if (newTask.trim() !== "") {
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
}

function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
}

function moveTaskUp(index) {
    if (index > 0) {
        const updated = [...tasks];
        [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
        setTasks(updated);
    }
}

function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updated = [...tasks];
        [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
        setTasks(updated);
    }
}
```

### Array destructuring swap

```javascript
[arr[i], arr[j]] = [arr[j], arr[i]];
```

Swaps two elements in one line — no temp variable needed.

### Guard conditions

- `index > 0` — can't move up if already first
- `index < tasks.length - 1` — can't move down if already last
