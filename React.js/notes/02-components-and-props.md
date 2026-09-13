# React — Components and Props

## Components

A component is a function that returns JSX. Every piece of UI is a component.

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

- Function name starts with a capital letter — required. React uses this to distinguish custom components from plain HTML tags.
- `return` wraps JSX in parentheses when it spans multiple lines.
- `export default` makes the component available to import elsewhere.

---

## JSX

JSX looks like HTML but runs inside JavaScript. Differences from regular HTML:

- Tags must be properly closed — `<hr />` not `<hr>`
- `class` becomes `className`
- Attributes use camelCase — `onClick`, `onChange`
- A component can only return one root element

---

## Importing and Using Components

```jsx
import Header from './Header.jsx'

function App() {
    return (
        <Header />
    );
}

export default App
```

- `<Header />` — used as a self-closing tag
- `App` is the root component — everything on the page goes inside it
- `main.jsx` mounts `App` onto the HTML page — runs automatically, rarely touched

---

## File Structure Pattern

```
src/
├── App.jsx       — root component
├── Header.jsx    — individual components
└── main.jsx      — entry point
```

One component per file, imported where needed.

---

## JavaScript in JSX

Variables and expressions are embedded using `{}`.

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

Any JavaScript expression works inside `{}` — variables, method calls, arithmetic, ternary operators.

---

## Fragments

When multiple elements are needed without an extra `<div>`, use a fragment `<>`.

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

`<>` and `</>` group elements without adding any HTML element to the page.

---

## Reusing Components

A component can be used as many times as needed.

```jsx
<Food />
<Food />
<Food />
```

Each renders its own independent copy.

---

## Styling in React

### className

`class` is replaced with `className` — `class` is a reserved word in JavaScript.

```jsx
<div className="card">
```

`index.css` is the global stylesheet — styles there apply across the whole app.

---

### Inline Styles

Pass a JavaScript object to the `style` attribute. CSS properties must be **camelCase**.

```jsx
const styles = {
    backgroundColor: "rgb(248, 15, 252)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
}

<button style={styles}>Click</button>
```

- `style` takes a JS object — double curly braces when written inline: `style={{ color: "red" }}`
- `background-color` → `backgroundColor`, `border-radius` → `borderRadius`

---

### CSS Modules

A `.module.css` file scopes styles to one component — class names never clash.

```css
/* Button.module.css */
.button {
    background-color: red;
    color: white;
}
```

```jsx
import styles from './Button.module.css'

<button className={styles.button}>Click</button>
```

React generates a unique class name behind the scenes.

---

### Which to use

| Method | Scope | Best for |
|---|---|---|
| Global CSS | Whole app | Base styles, shared classes |
| Inline styles | Single element | Dynamic values from state/props |
| CSS Modules | Single component | Component-specific styles |

---

## Importing Images

```jsx
import profilePic from './assets/image.png'

<img src={profilePic} alt="profile picture" />
```

Import gives the image a variable name, used in `src={}`.

---

## Props

Props pass different data into each instance of a component.

```jsx
<Student name="Aashwin" age={19} isStudent={true} />
<Student name="Mike" age={25} isStudent={false} />
<Student />
```

```jsx
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
```

- Strings use quotes — `name="Aashwin"`
- Numbers, booleans, variables use `{}` — `age={19}`, `isStudent={true}`
- Destructure props in the parameter — cleaner than `props.name`
- Default values set in destructuring — `{ name = "Guest" }`
- `<Student />` with no props renders all defaults
- Defaults only apply when the prop is **not passed at all** — passing `""` is still a value

---

## PropTypes

Validates the type of each prop — warns in the console if the wrong type is passed.

```jsx
import PropTypes from 'prop-types'

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
```

- Install with `npm install prop-types`
- Defined after the component
- `defaultProps` is deprecated in React 19 — use default parameter values instead

### PropTypes.shape — for arrays of objects

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
- `shape({})` — each item has this structure

---

## Conditional Rendering

```jsx
function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
    const welcomeMsg = <h2>Welcome {username}</h2>;
    const loginMsg   = <h2>Please log in to continue</h2>;

    return (isLoggedIn ? welcomeMsg : loginMsg);
}
```

JSX can be stored in a variable and returned like any value. Ternary picks which to render.

### `&&` — render only when true

```jsx
{isLoggedIn && <h2>Welcome {username}</h2>}
```

Nothing renders when the condition is false.

---

## Rendering Lists

```jsx
const listItems = fruits.map(fruit =>
    <li key={fruit.id}>
        {fruit.name}: <b>{fruit.calories}</b>
    </li>
);

return <ol>{listItems}</ol>;
```

### key prop

Every mapped element needs a `key` — React uses it to track changes. Use the item's `id`, not the array index if the list can change.

### Sort and filter before rendering

```jsx
fruits.sort((a, b) => a.calories - b.calories);

const lowCal = fruits.filter(fruit => fruit.calories < 100);
```

Standard JS — React adds nothing special.

---

## Passing Arrays as Props

```jsx
<List items={fruits}     category="Fruits" />
<List items={vegetables} category="Vegetables" />
```

```jsx
function List({ items = [], category = "Category" }) {
    const listItems = items.map(item =>
        <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>
    );

    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}
```

Same component, different data each time.

### Conditional rendering in App

```jsx
{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
{vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
```
