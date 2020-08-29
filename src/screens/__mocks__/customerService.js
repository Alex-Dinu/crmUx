//import Axios from "axios";
//import { CUSTOMERS_URI } from "../utils/constants";

module.exports = {
  get: () => {
    return Promise.resolve({
      customers: [
        {
          id: "1",
          firstName: "Alex",
          lastName: "Dinu",
          emailAddress: "Alex.Dinu@here.com",
        },
        {
          id: "2",
          firstName: "Bob",
          lastName: "Marley",
          emailAddress: "Bob.Marley@here.com",
        },
        {
          id: "3",
          firstName: "James",
          lastName: "Bond",
          emailAddress: "James.Bond@here.com",
        },
        {
          id: "4",
          firstName: "AVerLongFirdtName",
          lastName: "AVerLongLastName",
          emailAddress: "Bob.Marley@here.com",
        },
        {
          id: "5",
          firstName: "F5",
          lastName: "L5",
          emailAddress: "Bob.Marley@here.com",
        },
        {
          id: "6",
          firstName: "F6",
          lastName: "L6",
          emailAddress: "Bob.Marley@here.com",
        },
        {
          id: "7",
          firstName: "F7",
          lastName: "L7",
          emailAddress: "Bob.Marley@here.com",
        },
      ],
    });
  },

  getCustomer: () => {
    return Promise.resolve({
      customer: {
        id: "1",
        firstName: "Alex",
        lastName: "Dinu",
        emailAddress: "Alex.Dinu@here.com",
      },
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
