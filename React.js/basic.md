# React — Introduction

## What is React?

React is a JavaScript **library** for building user interfaces. It was created by Facebook (now Meta) in 2013 and has since become one of the most widely used tools in frontend development.

The key word is *library* — not framework. React does one thing and does it well: it helps you build the visual parts of a web application. Everything else — routing, data fetching, state management at scale — you bring in separately as needed. This makes React flexible but also means you have more decisions to make as your project grows.

---

## The Problem React Solves

Before React, building interactive web pages meant manually finding elements in the DOM, updating them, tracking what changed, and making sure everything stayed in sync. For simple pages this was fine. But as applications grew larger — think a social media feed, a dashboard with live data, an e-commerce site with a cart — it became extremely difficult to manage.

Imagine a Facebook page. The notification count in the header, the live comment section, the like button on a post, the chat sidebar — all of these need to update at the right time in response to user actions or incoming data. Keeping all of that in sync with plain JavaScript becomes messy very quickly.

React was built to solve exactly this. Instead of you telling the browser *how* to update the page step by step, you describe *what the page should look like* given the current data — and React figures out the most efficient way to make it happen.

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

With plain JavaScript you built your weather app by:
- Manually selecting DOM elements
- Manually updating `.textContent`, `.style`, `.classList`
- Manually keeping track of state (like `count`, `gameOver`, `elapsedTime`)
- Manually handling what happens when data changes

In React all of that is handled for you. You describe the UI, React updates the DOM. You update the data, React re-renders the right parts automatically. The bigger the app, the more time this saves.

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

React has a learning curve, but if you already know HTML, CSS, and JavaScript — which you do — you have everything you need to start. The concepts you'll encounter:

- **JSX** — writing HTML-like syntax inside JavaScript
- **Components** — functions that return UI
- **Props** — passing data into components
- **State** — data that changes over time and triggers re-renders
- **Hooks** — functions like `useState` and `useEffect` that give components superpowers
- **Events** — handling clicks, inputs, submissions inside components

Each of these builds on what you already know. `useState` is just a variable that React watches. `useEffect` is just a way to run code when something changes. Events work exactly like they do in plain JS.

---

## The Bottom Line

React is the industry standard for building modern web UIs. Learning it opens the door to building full applications, landing frontend jobs, and working with the Next.js ecosystem. It is opinionated enough to give you structure but flexible enough to work with almost any backend or design system.

You are in a good position to start. Everything you built in JavaScript — the DOM manipulation, events, fetch, array methods, destructuring, modules — is directly applicable. React does not replace that knowledge, it builds on top of it.
