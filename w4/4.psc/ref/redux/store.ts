import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
