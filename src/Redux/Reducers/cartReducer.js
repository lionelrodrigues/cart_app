import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_ITEM,
} from "../Actions/constants";
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
      const addedItem = state.items.find((item) => item.id === action.id); //getting the value from items array which equals to action.id
      const existItem = state.addedItems.find((item) => item.id === action.id); //checking weather the item exist in cartItemArray
      if (existItem) {
        addedItem.quantity += 1; //adding quantity propery
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
    case REMOVE_FROM_CART: {
      const removedItem = state.addedItems.find(
        (item) => item.id === action.id
      ); //getting the id of item to be removed
      const filteredItems = state.addedItems.filter(
        //filter from addedItems array
        (item) => action.id !== item.id
      );
      let newTotal = state.total - removedItem.price * removedItem.quantity;
      return {
        ...state,
        addedItems: filteredItems,
        total: newTotal,
        cartItem: state.cartItem - removedItem.quantity,
      };
    }
    case SEARCH_ITEM: {
      if (action.text === "" || action.text === " ") {
        return {
          ...state,
          items: items,
        };
      } else {
        let aitems = state.items.filter((e) => action.text === e.title);
        return aitems
          ? {
              ...state,
              items: aitems,
            }
          : {
              ...state,
              items: items,
            };
      }
    }
    default:
      return state;
  }
};
