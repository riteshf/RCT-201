### Redux-Thunk

Redux Thunk is a middleware used in Redux to handle async requests

### Getting started

- `npx create-react-app record`
  - Note: Vite App is also fine
- `npm i redux react-redux redux-thunk`
- update store file

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

### Goal

- ## Create a Todo App with API integrations
