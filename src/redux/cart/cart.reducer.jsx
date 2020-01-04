import { cartActionTypes } from "./cart.types";
import { addItemToCart, reduceQuantity } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
      case cartActionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: reduceQuantity(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default CartReducer;
