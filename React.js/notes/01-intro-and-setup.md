# React — Introduction and Setup

## What is React?

React is a JavaScript **library** for building user interfaces. Created by Facebook (now Meta) in 2013, it has become one of the most widely used tools in frontend development.

The key word is *library* — not framework. React does one thing: it handles the visual parts of a web application. Everything else — routing, data fetching, state management at scale — comes in separately as needed.

---

## The Problem React Solves

Building interactive pages with plain JavaScript means manually finding DOM elements, updating them, and keeping everything in sync. For small pages this is fine. For larger applications — a social media feed, a live dashboard, an e-commerce cart — it gets hard to manage fast.

React solves this by flipping the approach. Instead of telling the browser *how* to update the page step by step, you describe *what the page should look like* given the current data — React handles the updates.

---

## The Core Idea — Components

The central concept in React is the **component**. A component is a self-contained piece of the UI — like a button, a card, a navbar, or an entire page.

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

---

## Where React is Used

- **Facebook** and **Instagram** — React was built for these
- **WhatsApp Web**
- **Netflix**
- **Airbnb**
- **Atlassian** — Jira, Confluence
- **Dropbox**

It's also the foundation for **Next.js**, which is what most production React applications use today.

---

## React vs Plain JavaScript

In a plain JS project, everything is manual:
- Selecting DOM elements
- Updating `.textContent`, `.style`, `.classList`
- Tracking state variables like `count`, `gameOver`, `elapsedTime`
- Handling what happens when data changes

In React, describing the UI is enough — React handles the DOM updates when data changes.

---

## The React Ecosystem

| Tool | What it does |
|---|---|
| **Next.js** | Framework built on React — routing, server-side rendering |
| **React Router** | Client-side routing for single-page apps |
| **Redux / Zustand** | Managing shared state across many components |
| **Tailwind CSS** | Utility-first CSS, commonly paired with React |
| **React Query** | Fetching and caching server data |
| **Vite** | Build tool used to set up modern React projects |

---

## What Learning React Looks Like

- **JSX** — writing HTML-like syntax inside JavaScript
- **Components** — functions that return UI
- **Props** — passing data into components
- **State** — data that changes over time and triggers re-renders
- **Hooks** — functions like `useState` and `useEffect` that add functionality to components
- **Events** — handling clicks, inputs, submissions inside components

---

## The Bottom Line

React is the industry standard for building modern web UIs. Everything from the JavaScript notes — DOM manipulation, events, fetch, array methods, destructuring, modules — applies directly in React. It builds on that foundation rather than replacing it.

---

## Installation and Setup

### What you need first

Node.js must be installed — it gives you `npm` which is how React and its dependencies are installed.

```
node -v
npm -v
```

Both should return version numbers. If not, download Node from [nodejs.org](https://nodejs.org) — get the LTS version.

---

### Creating a React project with Vite

The current standard is **Vite** — fast, lightweight, and what most developers use today. Older tutorials use `create-react-app` — that tool is outdated.

```
npm create vite@latest
```

Prompts:
1. **Project name**
2. **Framework** — React
3. **Variant** — JavaScript
4. **Linter** — ESLint

Then:

```
cd my-app
npm install
npm run dev
```

Open `http://localhost:5173` — the app is running.

---

### What gets created

```
my-app/
├── node_modules/       — installed packages, never touch this
├── public/             — static files
├── src/                — all code lives here
│   ├── App.jsx         — root component, starting point
│   ├── main.jsx        — mounts App to the page, rarely touched
│   └── index.css       — global styles
├── index.html
├── package.json
└── vite.config.js
```

---

### The `.jsx` extension

Files use `.jsx` instead of `.js` — JSX is the syntax React uses to write HTML-like code inside JavaScript. The extension tells the build tool to handle it.

---

### Cleaning up the default files

Strip `App.jsx` down to a blank slate:

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

Clear `App.css` and `index.css` if starting fresh.

---

### Development workflow

1. Open the project folder in VS Code
2. Run `npm run dev` in terminal
3. Go to `http://localhost:5173`
4. Edit files in `src/` — browser updates automatically on every save

No Live Server needed — Vite handles hot reloading.
