import { Product } from "@/utils/types";
import { GET_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_LOADING } from "./product.type";

type ProductState = {
  loading: boolean;
  error: boolean;
  data: Product[];
};

type ProductAction = {
  type: string;
  payload?: any;
};

const initialState: ProductState = {
  loading: false,
  error: false,
  data: [],
};

const productReducer = (
  state: ProductState = initialState,
  { type, payload }: ProductAction
): ProductState => {
  switch (type) {
    case PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
