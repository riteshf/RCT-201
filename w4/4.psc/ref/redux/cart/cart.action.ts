import { getCartAPI } from "./cart.api";
import { AppDispatch } from "../store";
import { CART_LOADING, CART_ERROR, GET_CART } from "./cart.type";

export const getCart = () => async (dispatch: AppDispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let data = await getCartAPI();
    dispatch({ type: GET_CART, payload: data });
  } catch (e) {
    dispatch({ type: CART_ERROR });
  }
};
