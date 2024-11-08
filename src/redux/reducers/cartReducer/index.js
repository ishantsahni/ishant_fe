// src/store/reducers/exampleReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const newState = state;
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
