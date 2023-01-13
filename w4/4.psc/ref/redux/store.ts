import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DisppatchFn = () => AppDispatch;
export const useAppDispatch: DisppatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
