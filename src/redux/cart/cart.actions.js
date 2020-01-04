import { cartActionTypes } from "./cart.types";

export const toggleDropDown = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const reduceQuantity = item => ({
  type: cartActionTypes.REDUCE_QUANTITY,
  payload: item
});

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});
