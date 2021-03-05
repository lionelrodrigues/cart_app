import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (id) => {
  return { type: ADD_TO_CART, id: id };
};

export const removeFromCart = (id) => {
  return { typr: REMOVE_FROM_CART, id: id };
};
