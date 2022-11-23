### [react-redux](https://react-redux.js.org/)

A Library that allows us to use redux with react.

### Getting started

1. npx create-react-app lec.
2. npm i redux react-redux.
3. create a simple todo app.
   - create types
   - create actions
   - create reudcer
   - create store
4. Bind this with react app, by wrapping react app with react-redux provider.

```jsx
//index.js
import { Provider } from "react-redux";
import { store } from "./redux/store";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

5. Now we can access this redux store in react app using react-redux hooks.

- useSelector : to read values

```js
import { useSelector } from "react-redux";

const todos = useSelector((store) => store.todos);
console.log(todos); // [{"id": 1, "value": "Todo 1", "isCompleted": false }]
```

- useDispatch: gives us a dispatch fucntion used to update the redux store.

```js
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

dispatch({
  type: "ADD_TODO",
  payload: { id: 1, value: "Todo 1", isCompleted: false },
});
```
