import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
} from "../constants/customerConstants";

const initialState = { customers: [], loading: false, error: "" };

function customerListReducer(state = initialState, action) {
  console.log(">>> in reducer = " + action.type);
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      console.log(">>> reducer 1");
      return { loading: true, state };
    case CUSTOMER_LIST_SUCCESS:
      console.log(">>> reducer 2");
      return { loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      console.log(">>> reducer 3");
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { customerListReducer };
