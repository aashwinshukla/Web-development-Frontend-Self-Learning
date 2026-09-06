# JavaScript — DOM and Events

## DOM

The DOM (Document Object Model) is the browser's representation of the HTML page as a tree of objects. JavaScript uses it to read, change, add, or remove anything on the page.

---

### Selecting elements

```javascript
document.getElementById("id")            // one element or null
document.getElementsByClassName("class") // HTMLCollection (live)
document.getElementsByTagName("p")       // HTMLCollection (live)
document.querySelector(".class")         // first match or null
document.querySelectorAll(".class")      // NodeList (static)
```

`querySelector` accepts any CSS selector:

```javascript
document.querySelector("#id")
document.querySelector("input[type='text']")
document.querySelector("ul > li:first-child")
```

---

### Reading and changing content

```javascript
el.textContent           // get plain text
el.textContent = "Hello" // set plain text
el.innerHTML             // get/set HTML — avoid with user content (XSS risk)
input.value              // get/set input value
```

---

### Changing styles

```javascript
// Inline styles — camelCase
el.style.color = "red";
el.style.backgroundColor = "#1a1a2e";
el.style.display = "none";
el.style.display = "";    // remove inline, revert to CSS

// classList — preferred
el.classList.add("active")
el.classList.remove("active")
el.classList.toggle("active")
el.classList.contains("active") // true/false
el.classList.replace("old", "new")
el.classList.toggle("active", isLoggedIn) // force based on condition
```

---

### Changing attributes

```javascript
el.getAttribute("src")
el.setAttribute("src", "new.jpg")
el.removeAttribute("alt")
el.hasAttribute("src")       // true/false

// Direct property access
img.src = "new.jpg"
link.href = "https://example.com"
input.disabled = true
```

---

### Traversing

```javascript
el.parentElement
el.children              // HTMLCollection of direct children
el.firstElementChild
el.lastElementChild
el.nextElementSibling
el.previousElementSibling
```

---

### Creating and inserting elements

```javascript
const div = document.createElement("div")
div.textContent = "Hello"
div.classList.add("card")

parent.appendChild(div)          // add to end
parent.prepend(div)              // add to beginning
parent.insertBefore(div, ref)    // before a specific element
ref.insertAdjacentElement("afterend", div)
// positions: "beforebegin" "afterbegin" "beforeend" "afterend"
```

---

### Removing elements

```javascript
el.remove()                     // modern
el.parentElement.removeChild(el) // old way
```

---

### Hide and Show

```javascript
// display — removes from layout entirely
el.style.display = "none"
el.style.display = "block"

// visibility — hides but keeps space
el.style.visibility = "hidden"
el.style.visibility = "visible"

// opacity — transparent but still takes space and clickable
el.style.opacity = "0"
el.style.opacity = "1"

// classList toggle — cleanest approach
el.classList.toggle("hidden") // define .hidden { display: none } in CSS
```

| Method             | Space kept? | Clickable? |
|--------------------|-------------|------------|
| `display: none`    | No          | No         |
| `visibility: hidden` | Yes       | No         |
| `opacity: 0`       | Yes         | Yes        |

---

## NodeList

Returned by `querySelectorAll`. Looks like an array but isn't one.

```javascript
const items = document.querySelectorAll("li");

items[0]         // index access
items.length     // length
items.forEach(item => console.log(item.textContent)) // forEach works
```

Array methods like `.map()` and `.filter()` don't work — convert first:

```javascript
const arr = [...items];         // spread
const arr = Array.from(items);  // Array.from
arr.map(item => item.textContent) // now works
```

### Static vs Live

```javascript
document.querySelectorAll(".item")      // static — snapshot, doesn't update
document.getElementsByClassName("item") // live — updates when DOM changes
```

| Feature       | NodeList     | HTMLCollection | Array |
|---------------|--------------|----------------|-------|
| `forEach`     | Yes          | No             | Yes   |
| `map/filter`  | No           | No             | Yes   |
| Live updates  | No           | Yes            | No    |

---

## classList

```javascript
el.classList.add("a", "b")         // add one or more
el.classList.remove("a", "b")      // remove one or more
el.classList.toggle("active")      // add if absent, remove if present
el.classList.toggle("active", bool) // force based on boolean
el.classList.contains("active")    // true or false
el.classList.replace("old", "new") // swap classes
el.classList.length                // number of classes
el.className                       // full string — use to replace all
```

---

## Event Listeners

```javascript
btn.addEventListener("click", function(event) {
    console.log(event.type);   // "click"
    console.log(event.target); // element that triggered it
});
```

### Common events

| Event             | Fires when                          |
|-------------------|-------------------------------------|
| `click`           | Clicked                             |
| `dblclick`        | Double-clicked                      |
| `mouseover`       | Mouse enters                        |
| `mouseout`        | Mouse leaves                        |
| `keydown`         | Key pressed (fires while held)      |
| `keyup`           | Key released                        |
| `input`           | Every keystroke in input            |
| `change`          | Input loses focus after change      |
| `submit`          | Form submitted                      |
| `DOMContentLoaded`| HTML parsed, before images load     |
| `scroll`          | User scrolls                        |
| `resize`          | Window resized                      |

### Removing listeners

```javascript
function handleClick() { console.log("clicked"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // same reference required
```

### Event delegation

One listener on the parent handles all children — works for dynamically added elements too.

```javascript
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```

### Preventing default

```javascript
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload
});

link.addEventListener("click", function(event) {
    event.preventDefault(); // stop navigation
});
```

---

## Key Events

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);     // "a", "Enter", "ArrowUp", " "
    console.log(event.code);    // "KeyA" — physical key, unaffected by shift
    console.log(event.repeat);  // true if held down
});
```

### Modifier keys

```javascript
event.shiftKey  // Shift held
event.ctrlKey   // Ctrl held
event.altKey    // Alt held
event.metaKey   // Cmd / Win key held

// Ctrl + S
if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    console.log("Save");
}
```

### Common key names

| Key         | `event.key`   |
|-------------|---------------|
| Enter       | `"Enter"`     |
| Space       | `" "`         |
| Backspace   | `"Backspace"` |
| Escape      | `"Escape"`    |
| Arrow keys  | `"ArrowUp"` / `"ArrowDown"` / `"ArrowLeft"` / `"ArrowRight"` |
| Tab         | `"Tab"`       |

### keydown vs keyup

- `keydown` — fires immediately and repeatedly while held. Use for movement, shortcuts.
- `keyup` — fires once on release. Use for one-shot actions.

---

## DOM Quick Reference

| Task                    | Code                                          |
|-------------------------|-----------------------------------------------|
| Select by id            | `document.getElementById("id")`              |
| Select first match      | `document.querySelector(".class")`           |
| Select all matches      | `document.querySelectorAll(".class")`         |
| Get/set text            | `el.textContent`                              |
| Get/set HTML            | `el.innerHTML`                                |
| Get input value         | `el.value`                                    |
| Add class               | `el.classList.add("name")`                    |
| Toggle class            | `el.classList.toggle("name")`                 |
| Set inline style        | `el.style.property = "value"`                 |
| Get attribute           | `el.getAttribute("attr")`                     |
| Set attribute           | `el.setAttribute("attr", "val")`              |
| Create element          | `document.createElement("tag")`               |
| Add to page             | `parent.appendChild(el)`                      |
| Remove from page        | `el.remove()`                                 |
| Add event listener      | `el.addEventListener("event", fn)`            |
| Prevent default         | `event.preventDefault()`                      |
