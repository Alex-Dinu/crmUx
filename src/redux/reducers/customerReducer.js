import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_LIST_REMOVE_ONE_CUSTOMER,
  CUSTOMER_GET_REQUEST,
  CUSTOMER_GET_SUCCESS,
  CUSTOMER_GET_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
} from "../constants/customerConstants";

const customersInitialState = { customers: [], loading: true, error: "" };

function customerListReducer(state = customersInitialState, action) {
  console.log(">>> in reducer = " + action.type);
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      console.log(">>> reducer 1");
      return {...state, loading: true };
    case CUSTOMER_LIST_SUCCESS:
      console.log(">>> reducer 2");
      return { ...state, loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      console.log(">>> reducer 3");

      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}


const customerInitialState = {
  customer: {},
  loading: true,
  error: "",
  isDeleted: false,
};


function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case CUSTOMER_GET_REQUEST:
      return { ...state, loading: true, isDeleted: false };
    case CUSTOMER_GET_SUCCESS:
      return { ...state, loading: false, customer: action.payload };
    case CUSTOMER_GET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CUSTOMER_DELETE_REQUEST:
      return { ...state, loading: true };
    case CUSTOMER_DELETE_SUCCESS:
      return {
        ...customerInitialState,
        isDeleted: true,
        // customers: state.filter((c) => c.id !== action.payload),
      };
    case CUSTOMER_DELETE_FAIL:
      return {
        ...state,
        isDeleted: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { customerListReducer, customerReducer };
