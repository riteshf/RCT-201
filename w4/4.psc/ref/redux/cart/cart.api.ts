import { Cart } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    "http://localhost:8080/carts"
  );
  return response.data;
};
