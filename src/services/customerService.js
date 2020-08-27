import Axios from "axios";
import { CUSTOMERS_URI } from "../utils/constants";

export async function getCustomers() {
  return `[
    {
      "id":"1",
      "firstName":"F1",
      "lastName":"L1",
      "emailAddress":"F1.L1@here.com"
    },
    {
      "id":"2",
      "firstName":"F2",
      "lastName":"L2",
      "emailAddress":"F2.L2@here.com"
    },
    {
      "id":"3",
      "firstName":"F3",
      "lastName":"L3",
      "emailAddress":"F3.L3@here.com"
    }
  ]`;

  // try {
  //   const { data } = await Axios.post(CUSTOMERS_URI, {});
  //   //console.log(">>>CartScreen.getNewCartId cartid=" + data.id);
  //   return data.id;
  // } catch (error) {
  //   //.log(">>>CartScreen.updateCartDataStore error=" + error.message);
  // }
}
