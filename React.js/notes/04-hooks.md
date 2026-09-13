# React — Hooks

## useEffect

Runs code **after** the component renders. Used for side effects — updating the page title, fetching data, setting up timers, subscribing to events.

```jsx
import { useEffect } from "react";

useEffect(() => {
    // code to run after render
}, [dependencies]);
```

- First argument — the function to run
- Second argument — the **dependency array** — controls when it runs

---

### Dependency array

```jsx
// No array — runs after every render
useEffect(() => {
    document.title = `Count: ${count}`;
});

// Empty array — runs once on mount only
useEffect(() => {
    document.title = "My App";
}, []);

// With values — runs on mount + when those values change
useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);

// Multiple — runs when either changes
useEffect(() => {
    document.title = `${count} ${color}`;
}, [count, color]);
```

| Dependency array | When it runs |
|---|---|
| Not provided | After every render |
| `[]` | Once on mount |
| `[value]` | Mount + when `value` changes |
| `[a, b]` | Mount + when `a` or `b` changes |

---

### Cleanup function

Returned from `useEffect` — runs when the component unmounts or before the effect runs again.

```jsx
useEffect(() => {
    document.title = `${count} ${color}`;

    return () => {
        // cleanup runs before next effect or on unmount
    };
}, [count, color]);
```

---

### Event listeners with useEffect

```jsx
const [width, setWidth]   = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
}, [width, height]);

function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
```

- `[]` — listener added once on mount
- Cleanup removes it on unmount — without this, the listener stays attached after the component is gone (memory leak)
- Adding the listener outside `useEffect` would add a new one on every render

Two `useEffect` calls in one component is normal — each handles one concern.

---

### Strict Mode and useEffect

In development, React's Strict Mode runs effects twice to help catch bugs. `console.log` in a `useEffect` appearing twice in the console is expected — only happens in development.

```jsx
// main.jsx
<React.StrictMode>
    <App />
</React.StrictMode>
```

---

## Digital Clock — useEffect with setInterval

```jsx
const [time, setTime] = useState(new Date());

useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

function formateTime() {
    let hours      = time.getHours();
    const minutes  = time.getMinutes();
    const seconds  = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}
```

- `useState(new Date())` — initialises with current date/time
- `setInterval` updates state every 1000ms — React re-renders every second
- Cleanup clears the interval on unmount
- `hours % 12 || 12` — converts 24h to 12h. `% 12` gives 0 for midnight/noon, `|| 12` converts that to 12
- `padZero` — adds a leading zero for single digit numbers

---

## Prop Drilling

When data is passed through multiple component layers just to reach one that actually needs it.

```
App
└── ComponentA  (has user state)
      └── ComponentB  (passes it, doesn't use it)
            └── ComponentC  (passes it, doesn't use it)
                  └── ComponentD  (actually uses it)
```

```jsx
<ComponentB user={user} />        // A passes to B
<ComponentC user={props.user} />  // B passes to C
<ComponentD user={props.user} />  // C passes to D
<h2>{`Bye ${props.user}`}</h2>    // D uses it
```

B and C are forced to handle a prop they don't care about. Hard to maintain as the app grows.

### Common JSX mistake with strings

```jsx
<h2>Hello ${user}</h2>   // wrong — renders literally as "Hello ${user}"
<h2>Hello {user}</h2>    // correct — JSX expression
<h2>{`Hello ${user}`}</h2> // also correct — template literal inside JSX
```

---

## useContext

Solves prop drilling — any component accesses shared data directly, no matter how deep.

### Step 1 — Create context

```jsx
// ComponentA.jsx
import { createContext } from "react";

export const UserContext = createContext();
```

- Called outside the component — not tied to any render
- Exported so other components can import it

### Step 2 — Provide the value

```jsx
function ComponentA() {
    const [user, setUser] = useState("Aashwin");

    return (
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
    );
}
```

Any component inside the `Provider` can access `value` — no props needed.

### Step 3 — Consume the value

```jsx
// ComponentD.jsx
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
    const user = useContext(UserContext);

    return <h2>{`Bye ${user}`}</h2>;
}
```

`useContext(UserContext)` returns the current value from the nearest `Provider` above it.

### Before vs after

```
Before — prop drilling       After — useContext
A → B → C → D               A provides via Provider
B and C pass it along        B and C are completely clean
D uses it                    D reads directly with useContext
```

### When to use

- Data many components at different levels need — user, theme, language
- When prop drilling goes more than 2 levels deep
- Props are fine when only one or two components share the data

---

## useRef

Returns a mutable object with a `.current` property. Persists across renders but **does not cause a re-render** when changed.

```jsx
import { useRef } from "react";

const ref      = useRef(0);    // for values
const inputRef = useRef(null); // for DOM elements
```

---

### Use case 1 — Persisting a value without re-rendering

```jsx
const ref = useRef(0);

function handleClick() {
    ref.current++;
    console.log(ref.current); // increments, component does NOT re-render
}
```

Useful for tracking click counts, timer IDs, or previous values without affecting the UI.

### useState vs useRef

```jsx
// useState — triggers re-render
setCount(count + 1);

// useRef — no re-render
ref.current++;
```

`useState` when the UI needs to reflect the change. `useRef` when the value is internal.

---

### Use case 2 — Accessing a DOM element

```jsx
const inputRef = useRef(null);

function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
}

return <input ref={inputRef} />;
```

- `ref={inputRef}` — attaches the ref to the element
- After render, `inputRef.current` points to the actual DOM element
- Initial value is `null` — element doesn't exist until after first render

### Common DOM ref uses

```jsx
inputRef.current.focus()
inputRef.current.value
inputRef.current.scrollIntoView()
videoRef.current.play()
```

---

### Quick reference

| | useState | useRef |
|---|---|---|
| Triggers re-render | Yes | No |
| Persists across renders | Yes | Yes |
| Use for | UI values | Internal values, DOM access |
