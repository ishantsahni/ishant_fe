// src/store/reducers/index.js
import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer"; // Your specific reducers
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  cart: cartReducer,
});

export default rootReducer;
