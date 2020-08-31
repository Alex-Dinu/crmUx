import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/combineReducers";

const initialState = {};

// Add this to view redux dev tools in the browser dev tools.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, // All the reducers combined.
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
