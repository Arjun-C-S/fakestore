import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUTCS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removedSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
