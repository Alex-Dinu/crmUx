import { combineReducers } from "redux";

import { customerListReducer, customerReducer } from "./customerReducer";
import {interactionListReducer, interactionReducer} from "./interactionReducer"


export default combineReducers({
  customerList: customerListReducer,
  customer: customerReducer,
  interactionList: interactionListReducer,
  interaction: interactionReducer
});
