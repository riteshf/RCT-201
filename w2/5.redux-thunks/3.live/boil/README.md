### Instructions to follow before Starting class:

### Getting started

- `npm i `
- `json-server --watch db.json --port 8080`
- in second terminal: `npm start`

## Note:

- Go through the code to understand the structure.

### Goal

- Migrate the given multi-page auth based application with API integrations to redux application.

## Redux Thunk code

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));
```
