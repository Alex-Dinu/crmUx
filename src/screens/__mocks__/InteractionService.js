//import Axios from "axios";
//import { CUSTOMERS_URI } from "../utils/constants";

module.exports = {
    get: () => {
      return Promise.resolve({
        interactions: [
          {
            id: "1",
            customerId: "1",
            date: "12/8/2020 18:00:00",
            comments: "Talking points"
          },
          {
            id: "2",
            customerId: "1",
            date: "13/8/2020 18:00:00",
            comments: "Talking points"
          },          {
            id: "3",
            customerId: "1",
            date: "12/8/2020 18:00:00",
            comments: "Talking points"
          },
        ],
      });
    },
  };
  
  // export async function getCustomers() {
  
  //   // try {
  //   //   const { data } = await Axios.post(CUSTOMERS_URI, {});
  //   //   //console.log(">>>CartScreen.getNewCartId cartid=" + data.id);
  //   //   return data.id;
  //   // } catch (error) {
  //   //   //.log(">>>CartScreen.updateCartDataStore error=" + error.message);
  //   // }
  // }
  