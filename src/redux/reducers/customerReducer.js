import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
} from "../constants/customerConstants";

const initialState = { customers: {} };

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return { loading: true, customers: {} };
    case CUSTOMER_LIST_SUCCESS:
      return { loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { customerReducer };
