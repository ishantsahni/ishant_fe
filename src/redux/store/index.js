// src/store/store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Combine all reducers here

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For using Redux DevTools
);

export default store;
