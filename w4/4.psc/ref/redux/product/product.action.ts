import { getProductsAPI } from "./product.api";
import { AppDispatch } from "../store";
import { PRODUCTS_LOADING, PRODUCTS_ERROR, GET_PRODUCTS } from "./product.type";

export const getProducts = () => async (dispatch: AppDispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    let data = await getProductsAPI();
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCTS_ERROR });
  }
};
