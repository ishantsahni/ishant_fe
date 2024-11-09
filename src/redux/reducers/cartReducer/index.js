// src/store/reducers/exampleReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return [...state, action.payload];
    case "INCREASE_QUANTITY":
      return state.map((value) => {
        if (value.productId === action.payload) {
          return {
            ...value,
            quantity: value.quantity + 1,
          };
        }
        return { ...value };
      });
    case "DECREASE_QUANTITY":
      return state
        .map((value) => {
          if (value.productId === action.payload) {
            return {
              ...value,
              quantity: value.quantity - 1,
            };
          }
          return { ...value };
        })
        .filter((item) => item.quantity !== 0);
    default:
      return state;
  }
};

export default cartReducer;
