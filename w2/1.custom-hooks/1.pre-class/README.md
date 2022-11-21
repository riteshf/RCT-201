# [Custom Hooks](https://www.canva.com/design/DAFRQK1zIbg/wkxICQR28RsWOZ89u3fyTw/view?utm_content=DAFRQK1zIbg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### [What are Hooks ?](https://reactjs.org/docs/hooks-intro.html)

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- Hooks are used for interacting with state.

### Are Hooks Needed ?

- Hooks are needed to persisting information across re-render.
- Hooks are needed to inform DOM for the changes happended in the component to trigger re-render.

### Example of Known Hooks ?

- useState

```ts
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### [Rules of Hooks ?](https://reactjs.org/docs/hooks-rules.html)

Hooks are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:

1. Only Call Hooks at the Top Level.
2. Only Call Hooks from React Functions.
   - Call Hooks from React function components.
   - Call Hooks from custom Hooks

### What is a Custom Hook ?

A Hook function that is created by us and does not come from react or any other library.

### What is the purpose of creating a Custom Hooks ?

- We create Hooks to share Logic.
- Context API there is used to share infroamtion across components.
- But when we want a similar logic at multiple places we use Custom Hook.

### What are the rules of creating a Custom Hooks ?

- The function name should start with `use`, e.g: useAlpha, useBeta, etc.

### [Lets Create Our Own Hook](https://reactjs.org/docs/hooks-custom.html)

1. Create a new React app

```cmd
npx create-react-app record
```
