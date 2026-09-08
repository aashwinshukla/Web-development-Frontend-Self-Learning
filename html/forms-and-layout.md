# HTML — Forms and Layout

## Lists

### Unordered List
Items with bullet points. Use when order doesn't matter.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Ordered List
Numbered items. Use when order matters.

```html
<ol>
  <li>Boil water</li>
  <li>Add pasta</li>
  <li>Cook for 10 minutes</li>
</ol>
```

Customise the numbering with the `type` attribute:

```html
<ol type="A">    <!-- A, B, C -->
<ol type="a">    <!-- a, b, c -->
<ol type="I">    <!-- I, II, III -->
<ol type="i">    <!-- i, ii, iii -->
<ol start="5">   <!-- starts counting from 5 -->
```

### Description List
Term-definition pairs — useful for glossaries, FAQs, metadata.

```html
<dl>
  <dt>HTML</dt>
  <dd>The structure of a webpage.</dd>

  <dt>CSS</dt>
  <dd>The styling of a webpage.</dd>

  <dt>JavaScript</dt>
  <dd>The behaviour of a webpage.</dd>
</dl>
```

- `<dl>` — the list wrapper
- `<dt>` — the term
- `<dd>` — the definition (indented by default)

### Nested Lists
Place any list inside an `<li>` to create sub-levels.

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

You can mix ordered and unordered in nested lists:

```html
<ol>
  <li>Step one</li>
  <li>Step two
    <ul>
      <li>Sub-step A</li>
      <li>Sub-step B</li>
    </ul>
  </li>
  <li>Step three</li>
</ol>
```

---

## Tables

Used to display data in rows and columns.

```html
<table>
  <caption>Student Results</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>24</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>88</td>
    </tr>
  </tbody>
</table>
```

| Tag         | Purpose                                        |
|-------------|------------------------------------------------|
| `<table>`   | The table wrapper                              |
| `<caption>` | Title shown above the table                    |
| `<thead>`   | Groups the header row(s)                       |
| `<tbody>`   | Groups the data rows                           |
| `<tr>`      | A table row                                    |
| `<th>`      | Header cell — bold and centered by default     |
| `<td>`      | Data cell                                      |

### Spanning columns and rows
```html
<!-- Stretch a cell across 2 columns -->
<td colspan="2">Merged columns</td>

<!-- Stretch a cell across 2 rows -->
<td rowspan="2">Merged rows</td>
```

> Tables are for tabular data only — not for page layout. Use CSS for layout.

---

## Buttons

```html
<button>Click Me</button>
```

### Button types

| Type       | Behaviour                                                    |
|------------|--------------------------------------------------------------|
| `submit`   | Submits the form it's inside                                 |
| `reset`    | Clears all inputs in the form                                |
| `button`   | Does nothing by default — used with JavaScript               |

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>
```

Always set `type="button"` when using a button outside a form or with JavaScript. Without it, some browsers default to `type="submit"` and trigger unintended form submissions.

### Disabled button
```html
<button type="button" disabled>Not Available</button>
```
Greyed out and unclickable.

### `<button>` vs `<input type="button">`
```html
<!-- Older style — plain text only -->
<input type="button" value="Click Me" />

<!-- Preferred — can contain HTML like icons -->
<button type="button">Click Me</button>
```
Use `<button>` — it's more flexible since it can hold HTML content inside it.

---

## Forms

Forms collect input from the user — login screens, search bars, contact forms, sign-up pages.

```html
<form action="/submit" method="POST">
  <!-- inputs go here -->
</form>
```

- `action` — URL where the form data is sent on submission. Defaults to the current page if omitted.
- `method`:
  - `GET` — data is appended to the URL. Used for searches. Visible in the address bar.
  - `POST` — data is sent in the request body. Used for sensitive data like passwords.

### Input Fields

The `<input>` tag is the most-used form element. The `type` attribute controls what kind of input it renders.

```html
<input type="text"     placeholder="Name" />
<input type="email"    placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="number"   min="1" max="100" />
<input type="date" />
<input type="checkbox" /> Remember me
<input type="radio" name="gender" value="male" />   Male
<input type="radio" name="gender" value="female" /> Female
<input type="file" />
<input type="color" />
<input type="range" min="0" max="100" />
<input type="hidden" name="userId" value="42" />
```

> Radio buttons with the same `name` are grouped — only one can be selected at a time.

### Labels

Labels describe what an input is for. Clicking the label focuses the input — better usability and accessibility.

```html
<!-- Connect via matching for/id -->
<label for="username">Username</label>
<input type="text" id="username" name="username" />

<!-- Or wrap the input inside the label -->
<label>
  Email
  <input type="email" name="email" />
</label>
```

Always add labels — screen readers depend on them.

### Textarea

For multi-line text input.

```html
<label for="message">Message</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Write here..."></textarea>
```

- `rows` and `cols` set the default visible size.
- Unlike `<input>`, `<textarea>` needs a closing tag.

### Select Dropdown

```html
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">-- Select --</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="in" selected>India</option>
</select>
```

- `selected` on an `<option>` makes it the default selection.
- The `value` of the chosen option is what gets submitted.

### Grouped options
```html
<select name="car">
  <optgroup label="German">
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </optgroup>
  <optgroup label="Japanese">
    <option value="toyota">Toyota</option>
    <option value="honda">Honda</option>
  </optgroup>
</select>
```

### Common Input Attributes

| Attribute     | What it does                                              |
|---------------|-----------------------------------------------------------|
| `name`        | The key sent with the form data — required for submission |
| `id`          | Links to a `<label>` and allows targeting with CSS/JS     |
| `placeholder` | Hint text shown inside the input when empty               |
| `value`       | Pre-filled value                                          |
| `required`    | Field must be filled before the form can submit           |
| `disabled`    | Visible but not editable or submittable                   |
| `readonly`    | Visible and selectable but not editable                   |
| `maxlength`   | Maximum number of characters allowed                      |
| `min` / `max` | Min and max values for number and date inputs             |

### Fieldset and Legend

Groups related inputs and gives the group a visible label.

```html
<fieldset>
  <legend>Personal Information</legend>

  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname" />

  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname" />
</fieldset>
```

`<fieldset>` draws a box around the group. `<legend>` is the title of that box.

### Complete Form Example

```html
<form action="/register" method="POST">
  <fieldset>
    <legend>Create Account</legend>

    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="">-- Select --</option>
      <option value="us">United States</option>
      <option value="in">India</option>
    </select>

    <label>
      <input type="checkbox" name="terms" required />
      I agree to the terms and conditions
    </label>

    <button type="submit">Register</button>
  </fieldset>
</form>
```

---

## Header, Footer, and Semantic Layout

These are semantic elements — they give meaning to the structure of a page beyond just `<div>`. Browsers, search engines, and screen readers all understand them.

### `<header>`

The top section of a page or content block. Typically holds the logo, site name, and navigation.

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>
```

> `<header>` is not the same as `<head>`. The `<head>` is invisible metadata. The `<header>` is visible page content.

### `<nav>`

Wraps navigation links. Often placed inside a `<header>`.

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

### `<footer>`

The bottom section of a page or content block. Typically holds copyright info, links, or contact details.

```html
<footer>
  <p>&copy; 2026 My Website. All rights reserved.</p>
  <nav>
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms of Service</a>
  </nav>
</footer>
```

`&copy;` is an HTML entity that renders as the © symbol.

### Full Page Structure

These semantic elements work together to give a page a clear, meaningful layout:

```html
<body>

  <header>
    <!-- logo, nav -->
  </header>

  <main>
    <!-- the primary content — only one <main> per page -->

    <section>
      <!-- a themed group of related content -->
    </section>

    <article>
      <!-- self-contained content, e.g. a blog post or news item -->
    </article>

    <aside>
      <!-- secondary content, e.g. a sidebar or related links -->
    </aside>

  </main>

  <footer>
    <!-- copyright, links -->
  </footer>

</body>
```

| Element     | Purpose                                                  |
|-------------|----------------------------------------------------------|
| `<header>`  | Intro/top area of the page or a section                  |
| `<nav>`     | Navigation links                                         |
| `<main>`    | The primary content — unique per page, only use once     |
| `<section>` | A thematic group of content                              |
| `<article>` | Self-contained, independently reusable content           |
| `<aside>`   | Tangentially related content — sidebars, callouts        |
| `<footer>`  | Closing/bottom area of the page or a section             |

None of these add visual style on their own — but they make the page structure clear and meaningful, which matters for SEO, accessibility, and maintainability.
