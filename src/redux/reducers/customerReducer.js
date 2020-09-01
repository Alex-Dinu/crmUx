import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_GET_REQUEST,
  CUSTOMER_GET_SUCCESS,
  CUSTOMER_GET_FAIL,
} from "../constants/customerConstants";

const customersInitialState = { customers: [], loading: false, error: "" };

function customerListReducer(state = customersInitialState, action) {
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

const customerInitialState = { customer: {}, loading: false, error: "" };

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case CUSTOMER_GET_REQUEST:
      return { loading: true, state };
    case CUSTOMER_GET_SUCCESS:
      return { loading: false, customer: action.payload };
    case CUSTOMER_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { customerListReducer, customerReducer };
