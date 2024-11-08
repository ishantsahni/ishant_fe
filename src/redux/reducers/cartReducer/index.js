// src/store/reducers/exampleReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      var newState = state;
      newState.push(action.payload);
      return newState;
    case "INCREASE_QUANTITY":
      var newState = state;
      const addedNewState = newState.map((value) => {
        console.log("value ", value);
        if ((value.productId = action.payload)) {
          value.quantity = value.quantity + 1;
        }
        return value;
      });
      return addedNewState;
    default:
      return state;
  }
};

export default cartReducer;
