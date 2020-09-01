import axios from "axios";
import { CUSTOMERS_URI } from "../utils/constants";
const resources = {};

// const getCustomer = () => {
//   return async (id) => {
//     const { data } = await axios.get(CUSTOMERS_URI + "/" + id);
//     return data;
//   };
// };

export const getCust = async (id) => {
  var data = await axios.get(CUSTOMERS_URI + id);
  return data.data;
};

//export const get = getCustomer();

const getCustomers = () => {
  let cancel;

  return async (query) => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        // Return result if it exists
        return resources[query];
      }
      const {
        data,
      } = await axios.get(
        "http://localhost:8080/api/customer/search/" + query,
        { cancelToken: cancel.token }
      );

      // Store response
      resources[query] = data;

      return data;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = getCustomers();
