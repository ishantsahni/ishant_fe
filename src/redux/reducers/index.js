// src/store/reducers/index.js
import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer"; // Your specific reducers

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
