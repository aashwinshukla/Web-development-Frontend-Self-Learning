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
