import { combineReducers } from "redux";
import { customerListReducer, customerReducer } from "./customerReducer";
import {interactionListReducer} from "./interactionReducer"

export default combineReducers({
  customerList: customerListReducer,
  customer: customerReducer,
  interactionList: interactionListReducer
});
