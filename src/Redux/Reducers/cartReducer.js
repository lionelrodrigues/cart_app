import { ADD_TO_CART } from "../Actions/constants";
import { items } from "../items";

const initalState = {
  items: items,
  addedItems: [],
  cartItem: 0,
  total: 0,
};

export const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const addedItem = state.items.find((item) => item.id === action.id);
      const existItem = state.addedItems.find((item) => item.id === action.id);
      if (existItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
          cartItem: state.cartItem + 1,
        };
      } else {
        let newTotal = state.total + addedItem.price;
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          cartItem: state.cartItem + addedItem.quantity,
        };
      }
    }

    default:
      return state;
  }
};
