import { ADD_TO_CART } from "./constants";

export const addToCart = (id) => {
  return { type: ADD_TO_CART, id: id };
};
