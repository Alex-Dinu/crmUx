import axios from "axios";
import { CUSTOMERS_URI } from "../../utils/constants";
import { search, getCust } from "../../services/customerService";
const {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_GET_REQUEST,
  CUSTOMER_GET_SUCCESS,
  CUSTOMER_GET_FAIL,
} = require("../constants/customerConstants");

const customerList = (searchBy) => async (dispatch) => {
  try {
    console.log(">>> in dispatch CUSTOMERS_URI=" + CUSTOMERS_URI);
    dispatch({ type: CUSTOMER_LIST_REQUEST });

    const data = await search(searchBy); //axios.get(CUSTOMERS_URI);
    console.log(">>> in dispatch CUSTOMERS_URI= + got data");
    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(">>> in dispatch error=" + error);
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: error });
  }
};

const customerGet = (id) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_GET_REQUEST });

    const customer = await getCust(id);

    dispatch({ type: CUSTOMER_GET_SUCCESS, payload: customer });
  } catch (error) {
    dispatch({ type: CUSTOMER_GET_FAIL, payload: error });
  }
};
export { customerList, customerGet };
