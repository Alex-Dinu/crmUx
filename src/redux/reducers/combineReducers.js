import { combineReducers } from "redux";
import { customerListReducer } from "./customerReducer";

export default combineReducers({
  customerList: customerListReducer,
});
