import { Cart } from "@/utils/types";
import { GET_CART, CART_ERROR, CART_LOADING } from "./cart.type";

type CartState = {
  loading: boolean;
  error: boolean;
  data: Cart[];
};

type CartAction = {
  type: string;
  payload?: any;
};

const initialState: CartState = {
  loading: false,
  error: false,
  data: [],
};

const cartReducer = (
  state: CartState = initialState,
  { type, payload }: CartAction
): CartState => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART: {
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

export default cartReducer;
