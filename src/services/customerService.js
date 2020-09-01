import axios from "axios";

const resources = {};

const makeCustomerRequest = () => {
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

export const search = makeCustomerRequest();
