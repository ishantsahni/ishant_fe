export const addItemToCart = (data) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: data,
  };
};
