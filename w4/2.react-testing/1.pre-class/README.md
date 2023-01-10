### React Testing

[Testing Library](https://testing-library.com/)
[Queries](https://testing-library.com/docs/dom-testing-library/api-queries)
Packages required

```javascript
@testing-library/react
react-test-renderer
```

### Writing your first test case of a button.

```javascript
// checking if the button will render without any errors

it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button label="button"></Button>, div);
});

// checking if the button accepts the label and renders that on the dom

it("should render button correctly with label click me", () => {
  const { getByTestId } = render(<Button label="click me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me");
});
```

#### data attribute

getByTestId('button') gives a way to match the element which has a data-testid attribute.

check out the data attribute in html for more information. [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

The data-\* attribute is used to store custom data private to the page or application.

The data-\* attribute gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The data-\* attribute consist of two parts:

The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-" The attribute value can be any string

Note: Custom attributes prefixed with "data-" will be completely ignored by the user agent.

### Cleanup after each test case

```javascript
afterEach(cleanup);
```

### Creating snapshots

```javascript
it("matches snapshot", () => {
  const tree = renderer.create(<Button label="ADD"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
```

it will create a snapshot and it compare to that if there is a change to the application snapshot if it doesn't match it will throw an error

### Mocking functions

We also need to mock sometimes the click of a button etc. to write better tests.

```javascript
import { fireEvent } from "@testing-library/react";
// test ...
fireEvent.click(button);
fireEvent.click(button);
```

### firing events

we can fire a click event by using the fireEvent

we can also mock a function from jest by using jest.fn()

one of the things we can do by mocking a function is to assert the no of times a function was called.

### selecting multiple elements

if we need to select multiple items, we can use getAllByTestId, ( getAllBy\* ). It will contain an array of all the matched elements.
