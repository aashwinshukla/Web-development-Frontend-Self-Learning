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
