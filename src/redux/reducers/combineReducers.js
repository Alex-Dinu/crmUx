import { combineReducers } from "redux";
import { customerListReducer, customerReducer } from "./customerReducer";

export default combineReducers({
  customerList: customerListReducer,
  customer: customerReducer
});
