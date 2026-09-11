# React — Introduction

## What is React?

React is a JavaScript **library** for building user interfaces. Created by Facebook (now Meta) in 2013, it has become one of the most widely used tools in frontend development.

The key word is *library* — not framework. React does one thing: it handles the visual parts of a web application. Everything else — routing, data fetching, state management at scale — comes in separately as needed.

---

## The Problem React Solves

Building interactive pages with plain JavaScript means manually finding DOM elements, updating them, and keeping everything in sync. For small pages this is fine. For larger applications — a social media feed, a live dashboard, an e-commerce cart — it gets hard to manage fast.

React solves this by flipping the approach. Instead of telling the browser *how* to update the page step by step, you describe *what the page should look like* given the current data — React handles the updates.

---

## The Core Idea — Components

The central concept in React is the **component**. A component is a self-contained piece of the UI — like a button, a card, a navbar, or an entire page. Each component manages its own appearance and behaviour.

Think of building with Lego. Each Lego piece is a component. You snap them together to build something larger. If you want to change one piece, you change just that piece — everything else stays the same.

A real website built in React might look like this under the hood:

```
<App>
  ├── <Navbar>
  │     ├── <Logo>
  │     └── <NavLinks>
  ├── <Hero>
  ├── <ProductGrid>
  │     ├── <ProductCard>
  │     ├── <ProductCard>
  │     └── <ProductCard>
  └── <Footer>
```

Every box is a component. Components can contain other components. The entire page is itself a component called `App`.

This structure makes large applications manageable — each component is its own isolated piece that you can build, test, and update independently.

---

## Where React is Used

React is used everywhere. Some of the biggest names running on React:

- **Facebook** and **Instagram** — React was literally built for these
- **WhatsApp Web**
- **Netflix** — the interface you browse on
- **Airbnb**
- **Atlassian** — Jira, Confluence
- **Dropbox**
- **Twitter/X** (partially)
- **Khan Academy**

It's also the foundation for frameworks built on top of it — most notably **Next.js**, which is what most production React applications use today.

---

## React vs Plain JavaScript

In a plain JS project like the weather app, everything is manual:
- Selecting DOM elements
- Updating `.textContent`, `.style`, `.classList`
- Tracking state variables like `count`, `gameOver`, `elapsedTime`
- Handling what happens when data changes

In React, describing the UI is enough — React handles the DOM updates when data changes. The bigger the app, the more useful this becomes.

---

## The React Ecosystem

React on its own is just the UI layer. Around it has grown a large ecosystem of tools that are commonly used together:

| Tool | What it does |
|---|---|
| **Next.js** | Framework built on React — adds routing, server-side rendering, and more |
| **React Router** | Client-side routing for single-page apps |
| **Redux / Zustand** | Managing shared state across many components |
| **Tailwind CSS** | Utility-first CSS, very commonly paired with React |
| **React Query** | Fetching and caching server data |
| **Vite** | The build tool used to set up modern React projects |

You don't need all of these to start. React itself is the foundation — the rest comes as you build bigger things.

---

## What Learning React Looks Like

The concepts that come up when learning React:

- **JSX** — writing HTML-like syntax inside JavaScript
- **Components** — functions that return UI
- **Props** — passing data into components
- **State** — data that changes over time and triggers re-renders
- **Hooks** — functions like `useState` and `useEffect` that add functionality to components
- **Events** — handling clicks, inputs, submissions inside components

These all build on existing JS knowledge. `useState` is essentially a variable React watches. `useEffect` runs code when something changes. Events work the same as in plain JS.

---

## The Bottom Line

React is the industry standard for building modern web UIs. It opens the door to full applications, frontend roles, and the Next.js ecosystem. Flexible enough to work with almost any backend or design system.

Everything from the JavaScript notes — DOM manipulation, events, fetch, array methods, destructuring, modules — applies directly in React. It builds on that foundation rather than replacing it.

---

## Installation and Setup

### What you need first

Before creating a React project you need **Node.js** installed. Node gives you `npm` (Node Package Manager) which is how you install React and all its dependencies.

Check if you already have it:
```
node -v
npm -v
```
If both return version numbers you're good. If not, download Node from [nodejs.org](https://nodejs.org) — get the LTS version.

---

### Creating a React project with Vite

The current standard for setting up React is **Vite** — fast, lightweight, and what most developers use today. (Older tutorials use `create-react-app` — that tool is outdated and no longer recommended.)

Navigate to where the project should live, then run:

```
npm create vite@latest
```

It will ask you a few questions:
1. **Project name** — type whatever you want, e.g. `my-app`
2. **Framework** — select `React`
3. **Variant** — select `JavaScript` (not TypeScript, for now)

Then run these three commands:

```
cd my-app
npm install
npm run dev
```

- `cd my-app` — move into the project folder
- `npm install` — downloads all the dependencies React needs
- `npm run dev` — starts the development server

Open your browser and go to `http://localhost:5173` — you'll see the default React page. Your app is running.

---

### What just got created

Opening the project folder you'll see this structure:

```
my-app/
├── node_modules/       — all installed packages (never touch this)
├── public/             — static files like favicon
├── src/                — your actual code lives here
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json        — project info and list of dependencies
└── vite.config.js      — Vite configuration
```

The two files you'll work in most:

- **`src/App.jsx`** — the root component of your app, this is where you start writing
- **`src/main.jsx`** — the entry point that mounts your app onto the HTML page, you rarely touch this

---

### The `.jsx` extension

You'll notice files use `.jsx` instead of `.js`. JSX is the syntax React uses — it lets you write HTML-like code inside JavaScript. The `.jsx` extension tells the build tool to handle that syntax. Some projects use `.js` for everything and it still works, but `.jsx` makes the intent clear.

---

### Cleaning up the default files

The default Vite + React setup comes with placeholder content you don't need. Before starting your own project, clean `App.jsx` down to this:

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

And clear out `App.css` and `index.css` if you want a blank slate.

---

### VS Code extensions worth installing

- **ES7+ React/Redux/React-Native snippets** — shortcut commands to generate component boilerplate fast
- **Prettier** — auto-formats your code on save
- **ESLint** — catches errors and bad patterns as you type

---

### The development workflow

From this point on, every time you want to work on the project:

1. Open the project folder in VS Code
2. Open the terminal and run `npm run dev`
3. Go to `http://localhost:5173` in your browser
4. Edit files in `src/` — the browser updates automatically on every save

That's it. No Live Server needed — Vite handles hot reloading on its own.




---

## Components

A component is a function that returns JSX — the HTML-like syntax React uses. Every piece of UI is a component.

```jsx
function Header() {
    return (
        <header>
            <h1>My website</h1>
        </header>
    );
}

export default Header
```

- The function name starts with a capital letter — this is required. React uses this to tell the difference between a custom component and a plain HTML tag.
- The `return` wraps the JSX in parentheses when it spans multiple lines.
- `export default` makes the component available to import in other files.

---

## JSX

JSX looks like HTML but it runs inside JavaScript. A few differences from regular HTML:

- Tags must be properly closed — `<hr />` not `<hr>`
- `class` becomes `className` in JSX
- Attributes use camelCase — `onClick`, `onChange`, not `onclick`, `onchange`
- A component can only return one root element — wrap multiple elements in a single parent tag

---

## Importing and Using Components

Components are imported and used like custom HTML tags.

```jsx
// App.jsx
import Header from './Header.jsx'

function App() {
    return (
        <Header />
    );
}

export default App
```

- `import Header from './Header.jsx'` — pulls in the Header component from its file
- `<Header />` — uses it as a self-closing tag
- `App` is the root component — everything on the page goes inside it
- `main.jsx` mounts `App` onto the HTML page — this runs automatically, rarely touched

---

## File Structure Pattern

Each component lives in its own `.jsx` file inside `src/`.

```
src/
├── App.jsx       — root component, imports everything else
├── Header.jsx    — header component
└── main.jsx      — entry point, mounts App to the page
```

This keeps code organized — one component per file, imported where needed.

---

## JavaScript in JSX

Variables and expressions can be embedded inside JSX using `{}`. Anything inside the curly braces is treated as JavaScript.

```jsx
function Food() {
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
```

- `{food1}` — renders the value of the variable
- `{food2.toUpperCase()}` — any JavaScript expression works inside `{}`, including method calls, arithmetic, ternary operators
- Plain text like `Apple` renders as-is, no curly braces needed

---

## Fragments

A component can only return one root element. When multiple elements are needed without adding an extra `<div>` to the page, use a **fragment** — empty angle brackets `<>`.

```jsx
function App() {
    return (
        <>
            <Header />
            <Food />
            <Footer />
        </>
    );
}
```

`<>` and `</>` group elements together without adding any real HTML element to the page.

---

## Reusing Components

A component can be used as many times as needed — just add the tag multiple times.

```jsx
function App() {
    return (
        <>
            <Header />
            <Food />
            <Food />
            <Food />
            <Footer />
        </>
    );
}
```

Each `<Food />` renders its own independent copy. This is one of the core advantages of components — write once, use anywhere, as many times as needed.

---

## Styling in React

### className

In JSX, `class` is replaced with `className` — `class` is a reserved word in JavaScript.

```jsx
<div className="card">
```

CSS is written normally in `.css` files and imported where needed. `index.css` is the global stylesheet — styles defined there apply across the whole app.

---

## Importing Images and Assets

Images and other assets are imported at the top of the file just like components.

```jsx
import profilePic from './assets/vite.svg'

function Card() {
    return (
        <img src={profilePic} alt="profile picture" />
    );
}
```

- The import gives the image a variable name
- That variable is used inside `{}` as the `src` value
- This works for SVGs, PNGs, JPGs, and other file types

---

## Props — Passing Data into Components

Right now the `Card` component is hardcoded — every `<Card />` shows the same name and text. **Props** (short for properties) let you pass different data into each instance of a component.

```jsx
// Passing props
function App() {
    return (
        <>
            <Card name="Aashwin Shukla" bio="Learning Frontend, and Playing Games" />
            <Card name="Alice" bio="Designer" />
        </>
    );
}

// Receiving props
function Card(props) {
    return (
        <div className="card">
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.bio}</p>
        </div>
    );
}
```

- Props are passed like HTML attributes on the component tag
- The component receives them as a `props` object
- Each prop is accessed with `props.propName`

Props make components dynamic and reusable — same component, different data each time.

---

## Three Ways to Style in React

### 1. Global CSS — `index.css`

Write CSS in `index.css` and it applies everywhere. Good for base styles, resets, and shared classes.

```css
/* index.css */
.card {
  border-radius: 10px;
  padding: 20px;
}
```

```jsx
<div className="card">
```

---

### 2. Inline Styles

Pass a JavaScript object to the `style` attribute. CSS property names must be **camelCase** — this is a common mistake.

```jsx
function Button() {
    const styles = {
        backgroundColor: "rgb(248, 15, 252)",  // camelCase — not background-color
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
        <button style={styles}>Click</button>
    );
}
```

- `style` takes a JS object, not a string — so it's `style={styles}` with double curly braces when written inline: `style={{ color: "red" }}`
- All hyphenated CSS properties become camelCase — `background-color` → `backgroundColor`, `border-radius` → `borderRadius`
- Values are strings — `"10px"`, `"white"`, `"pointer"`

---

### 3. CSS Modules

A `.module.css` file scopes styles to the component that imports it — class names won't clash with other components even if they have the same name.

```css
/* Button.module.css */
.button {
    background-color: rgb(252, 15, 15);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
```

```jsx
import styles from './Button.module.css'

function Button() {
    return (
        <button className={styles.button}>Click</button>
    );
}
```

- Import the module as `styles` (or any name)
- Access classes with `styles.className`
- Behind the scenes, React generates a unique class name so it never conflicts with other components

---

### Which to use

| Method | Scope | Best for |
|---|---|---|
| Global CSS | Whole app | Base styles, shared classes |
| Inline styles | Single element | Dynamic styles based on JS values |
| CSS Modules | Single component | Component-specific styles, avoiding clashes |

---

## Props

Props (short for properties) let you pass different data into each instance of a component — making it dynamic and reusable.

```jsx
// Passing props
function App() {
    return (
        <>
            <Student name="Aashwin" age={19} isStudent={true} />
            <Student name="Mike" age={25} isStudent={false} />
            <Student />
        </>
    );
}
```

```jsx
// Receiving props — destructured directly in the parameter
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
```

- Props are passed like HTML attributes on the component tag
- Strings use quotes — `name="Aashwin"`
- Everything else uses `{}` — numbers, booleans, variables: `age={19}`, `isStudent={true}`
- Destructuring in the parameter is the clean modern way — `{ name, age }` instead of `props.name`, `props.age`
- Default values are set directly in the destructuring — `{ name = "Guest" }`. If no prop is passed, the default is used
- `<Student />` with no props renders with all defaults

---

## PropTypes

PropTypes validate the type of each prop — if the wrong type is passed, a warning appears in the console.

```jsx
import PropTypes from 'prop-types'

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
```

- Install with `npm install prop-types`
- Defined after the component function
- Only warns in development — doesn't break anything in production
- `defaultProps` was the old way to set default values but is deprecated in React 19 — use default parameter values instead

---

## Conditional Rendering

Components can render different JSX based on a condition — using a ternary operator or `&&`.

```jsx
function UserGreeting(props) {
    const welcomeMsg = <h2>Welcome {props.username}</h2>;
    const loginMsg   = <h2>Please log in to continue</h2>;

    return (props.isLoggedIn ? welcomeMsg : loginMsg);
}
```

- JSX can be stored in a variable and returned just like any value
- The ternary `condition ? a : b` picks which JSX to render
- If `isLoggedIn` is true → shows welcome message, otherwise → shows login message

### Using `&&`

When there's only something to show in one case and nothing in the other:

```jsx
return (props.isLoggedIn && <h2>Welcome {props.username}</h2>);
```

If the condition is false, nothing renders.

---

## Important — defaults only apply when a prop is not passed at all

```jsx
// username defaults to "Guest" — prop not passed
<UserGreeting isLoggedIn={true} />

// username is "" — prop WAS passed, default does NOT apply
<UserGreeting isLoggedIn={true} username="" />
```

Passing an empty string is still passing a value. The default only kicks in when the prop is completely absent.

---

## Rendering Lists

Arrays of data are rendered using `.map()` — each item becomes a JSX element.

```jsx
const fruits = [
    { id: 1, name: "apple",     calories: 95  },
    { id: 2, name: "orange",    calories: 45  },
    { id: 3, name: "banana",    calories: 105 },
    { id: 4, name: "coconut",   calories: 159 },
    { id: 5, name: "pineapple", calories: 37  }
];

const listItems = fruits.map(fruit =>
    <li key={fruit.id}>
        {fruit.name}: <b>{fruit.calories}</b>
    </li>
);

return <ol>{listItems}</ol>;
```

### The `key` prop

Every element in a mapped list needs a `key` — a unique identifier React uses to track which items changed. Use the item's `id` if it has one, never the array index if the list can change.

```jsx
<li key={fruit.id}>
```

Without `key`, React throws a warning and list updates can behave incorrectly.

### Sorting before rendering

Sort the array before mapping — same `.sort()` from JavaScript:

```jsx
// Alphabetical
fruits.sort((a, b) => a.name.localeCompare(b.name));

// By calories ascending
fruits.sort((a, b) => a.calories - b.calories);

// By calories descending
fruits.sort((a, b) => b.calories - a.calories);
```

### Filtering before rendering

```jsx
const lowCalFruits  = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

const lowCalItems = lowCalFruits.map(fruit =>
    <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>
);
```

Filter creates a new array, then map turns it into JSX. Both are standard JS array methods — React doesn't add anything special here.

### `&nbsp;`

`&nbsp;` is an HTML entity for a non-breaking space — adds a small gap between the name and the calorie number without using CSS margin.

---

## Passing Arrays as Props

Arrays of objects can be passed as props and rendered inside the component.

```jsx
// App.jsx
const fruits = [
    { id: 1, name: "apple",     calories: 95  },
    { id: 2, name: "orange",    calories: 45  },
    { id: 3, name: "banana",    calories: 105 },
];

const vegetables = [
    { id: 6, name: "potato",   calories: 110 },
    { id: 7, name: "celery",   calories: 15  },
];

return (
    <>
        <List items={fruits}      category="Fruits" />
        <List items={vegetables}  category="Vegetables" />
    </>
);
```

```jsx
// List.jsx
function List({ items = [], category = "Category" }) {

    const listItems = items.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>
    );

    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}
```

The same `List` component renders both fruits and vegetables — different data, same structure.

---

### PropTypes.shape

When a prop is an array of objects, `PropTypes.arrayOf` and `PropTypes.shape` describe the expected structure:

```jsx
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:       PropTypes.number,
        name:     PropTypes.string,
        calories: PropTypes.number,
    }))
}
```

- `arrayOf` — the prop is an array
- `shape({})` — each item in the array should have this shape
- Uses `{}` with `:` — it's a regular object, not `=`

---

### Conditional rendering in App

Two patterns for conditionally showing a component:

```jsx
// Ternary — show List or null
{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}

// && — show only if true, nothing otherwise
{vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
```

Both do the same thing here. `&&` is shorter when there's nothing to show in the false case.

---

## Event Handling

Events in React work the same as in JavaScript but with camelCase names and JSX syntax.

```jsx
function Button() {
    const handleClick = () => console.log("OUCH!");

    return <button onClick={handleClick}>Click me</button>;
}
```

- `onClick` — camelCase, not `onclick`
- `{handleClick}` — pass the function reference, no `()`. Adding `()` would call it immediately on render, not on click.

### Passing arguments to event handlers

If the handler needs arguments, wrap it in an arrow function:

```jsx
function Button() {
    const handleClick = (name) => console.log(`${name} stop clicking me`);

    return <button onClick={() => handleClick("Aashwin")}>Click me</button>;
}
```

- `onClick={() => handleClick("Aashwin")}` — the arrow function calls the handler with the argument when clicked
- Without the wrapper, `handleClick("Aashwin")` would run immediately on render

### Common events

| Event | Fires when |
|---|---|
| `onClick` | Element is clicked |
| `onChange` | Input value changes |
| `onSubmit` | Form is submitted |
| `onMouseEnter` | Mouse enters element |
| `onMouseLeave` | Mouse leaves element |
| `onKeyDown` | Key is pressed |

---

## The Event Object

Every event handler automatically receives an **event object** — it contains details about what happened.

```jsx
const handleClick = (e) => console.log(e);

return <button onClick={(e) => handleClick(e)}>Click me</button>;
```

The event object has useful properties:

```jsx
e.target           // the element that triggered the event
e.target.textContent  // the text inside that element
e.target.value     // the value of an input
e.type             // "click", "change", etc.
```

### Directly modifying the element via the event object

```jsx
const handleClick = (e) => e.target.textContent = "OUCH!";

return <button onDoubleClick={(e) => handleClick(e)}>Click me</button>;
```

- `e.target` is the button that was clicked
- `.textContent` changes what the button displays
- `onDoubleClick` fires only on a double click

### Note on direct DOM manipulation

Changing `e.target.textContent` directly works but is not the React way — React prefers updating **state** to change what's displayed, which then re-renders the component. Direct DOM manipulation bypasses React's control. State is covered next.

---

## Manipulating Elements via Events

The event object can be used to directly change an element's style when it's interacted with.

```jsx
function ProfilePicture() {
    const imageUrl = './src/assets/vite.svg';

    const handleClick = (e) => e.target.style.display = "none";

    return <img onClick={(e) => handleClick(e)} src={imageUrl} />;
}
```

- `e.target` — the element that was clicked, in this case the `<img>`
- `e.target.style.display = "none"` — hides the image on click
- Uses `=` not `-` — common typo that causes silent bugs since `-` is valid JS (subtraction)

---

## useState — State Hook

State is data that belongs to a component and can change over time. When state changes, React automatically re-renders the component to reflect the new value.

```jsx
import React, { useState } from 'react'
```

### Declaring state

```jsx
const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);
```

- `useState(initialValue)` — sets the starting value
- Returns an array of two things — the current value and a function to update it
- Destructured into `[value, setValue]` — name them whatever makes sense
- Convention is `value` and `setValue`

### Updating state

```jsx
const updateName = () => {
    setName("Aashwin");
}

const updateAge = () => {
    setAge(age + 1);
}

const updateIsEmployed = () => {
    setIsEmployed(!isEmployed);
}
```

- Always use the setter function — never modify the value directly
- React detects the change and re-renders the component
- For values based on the previous state, use the current value in the expression — `age + 1`, `!isEmployed`

### Using state in JSX

```jsx
return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Increase age</button>

        <p>Employment Status: {isEmployed ? "Employed" : "Not Employed"}</p>
        <button onClick={updateIsEmployed}>Change Status</button>
    </div>
);
```

State variables are used in JSX just like regular variables inside `{}`. Every time a setter is called, the component re-renders and the new value is displayed.

### Why not just use a regular variable?

```jsx
let name = "Guest"; // changing this does nothing — React won't re-render
```

Regular variables don't trigger a re-render. `useState` tells React to watch the value and update the UI when it changes.

---

## Counter — useState Practice

A counter built with `useState` — increment, decrement, and reset.

```jsx
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset     = () => setCount(0);

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="dec" onClick={decrement}>Decrease</button>
            <button className="re"  onClick={reset}>Reset</button>
            <button className="inc" onClick={increment}>Increase</button>
        </div>
    );
}
```

- One `useState` manages the entire counter
- Each button has its own handler — `increment`, `decrement`, `reset`
- `count` is read in JSX, `setCount` updates it
- CSS classes applied via `className` for styling each button differently
