export const addItemToCart = (data) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: data,
  };
};

export const increaseQuantity = (data) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: data,
  };
};

export const decreaseQuantity = (data) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: data,
  };
};
