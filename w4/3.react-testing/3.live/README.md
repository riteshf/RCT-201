# Testing

Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free.

## The different types of tests

### Unit tests

Unit tests are the most basic type of testing, close to the source of your application. They consist in testing individual methods and functions of the classes, components or modules used by your software. Unit tests are in general quite easier to automate and can be run very quickly by a continuous integration server.

### Integration tests

Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

### End-to-end tests

End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc. Functional tests. Products like cypress.io can be used to do end to end UI testing.

Other forms of testing:

- Acceptance testing
- Performance testing
- Smoke testing
- Penetration Testing

## [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- Simple and complete testing utilities that encourage good testing practices.
- React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
- Used along side Jest for assertion.
- Projects created with `Create React App` have out of the box support for React Testing Library. If that is not the case, you can add it via npm like so.

### Getting Started

If you are using `create-react-app` you do not need to do anything extra.

### Topics

```js
// Sample Test
import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

test("should show login form", () => {
  render(<Login />);
  const input = screen.getByLabelText("Username");
  // Events and assertions...
});
```

1. `render`: a function used to render react component, a little similar to react-dom render function.
2. `screen`: a object we get in return of render with which we can access the whole screen of that component.

### Queries

1. [getByText](https://testing-library.com/docs/queries/bytext): To select element by matching text.

```jsx
// html code
<a href="/about">About</a>;

// test file code
import { render, screen } from "@testing-library/react";

render(<MyComponent />);
const aboutAnchorNode = screen.getByText(/about/i);
```

2. [getByTestId](https://testing-library.com/docs/queries/bytestid): To select element by matching test-id.

```jsx
// html code
<div data-testid="custom-element" />;

// test file code
import { screen } from "@testing-library/dom";

const element = screen.getByTestId("custom-element");
```

### User Actions

1. [Fire Events](https://testing-library.com/docs/dom-testing-library/api-events): use to trigger Syntetic Events

```jsx
// change event

// html code
<input data-testid="input-1" />;

// test file code
fireEvent.change(screen.getByTestId("input-1"), {
  target: { value: "2020-05-24" },
});
```

```jsx
// click event

// html code
<button data-testid="button-1" />;

// test file code
fireEvent.click(screen.getByTestId("button-1"));

// assertion to make sure that the button was clicked
expect(handleClick).toHaveBeenCalledTimes(1);
```

### [Debug](https://testing-library.com/docs/queries/about#screendebug)

For convenience screen also exposes a debug method in addition to the queries. This method is essentially a shortcut for console.log(prettyDOM()). It supports debugging the document, a single element, or an array of elements.

```js
import { screen } from "@testing-library/dom";

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`;

// debug document
screen.debug();
// debug single element
screen.debug(screen.getByText("test"));
// debug multiple elements
screen.debug(screen.getAllByText("multi-test"));
```

### Playground

For debugging using testing-playground, screen exposes this convenient method which logs and returns a URL that can be opened in a browser.

```js
import { screen } from "@testing-library/dom";

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`;

// log entire document to testing-playground
screen.logTestingPlaygroundURL();
// log a single element
screen.logTestingPlaygroundURL(screen.getByText("test"));
```

### Assertions

1. Document

- `expect(element).toBeInTheDocument()`: Check if element is present in DOM.
- `expect(element).not.toBeInTheDocument()`: Check if element is not present in DOM.

2. Basic expectations:

- expect(value)
- .toBe(value)
- .toEqual(value)

3. Boolean expectations:

- .toBeFalsy()
- .toBeNull()
- .toBeTruthy()
- .toBeUndefined()
- .toBeDefined()
- .toBeNaN()

4. Numbers:

- .toBeGreaterThan(number | bigint)
- .toBeGreaterThanOrEqual(number | bigint)
- .toBeLessThan(number | bigint)
- .toBeLessThanOrEqual(number | bigint)

5. Objects:

- .toBeInstanceOf(Class)
- .toMatchObject(object)
- .toHaveProperty(keyPath, value?)
- .toContain(item)
- .toContainEqual(item)
- .toHaveLength(number)
- .arrayContaining(array)
- .toStrictEqual(value)
