import axios from "axios";
import { CUSTOMERS_URI } from "../../utils/constants";
const {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
} = require("../constants/customerConstants");

const getCustomers = () => async (dispatch) => {
  try {
    console.log(">>> in dispatch CUSTOMERS_URI=" + CUSTOMERS_URI);
    dispatch({ type: CUSTOMER_LIST_REQUEST });

    const { data } = await axios.get(CUSTOMERS_URI);

    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: error });
  }
};

export { getCustomers };
