//"use strict";
import Axios from "axios";
import { CUSTOMERS_URI } from "../utils/constants";

// module.exports = {
//   get: () => {
//     return Promise.resolve({
//       customers: [
//         {
//           id: "1",
//           firstName: "F1",
//           lastName: "L1",
//           emailAddress: "F1.L1@here.com",
//         },
//         {
//           id: "2",
//           firstName: "F2",
//           lastName: "L2",
//           emailAddress: "F2.L2@here.com",
//         },
//       ],
//     });
//   },
// };

export async function getCustomers() {

  try {
    const { data } = await Axios.post(CUSTOMERS_URI, {});
    return data.id;
  } catch (error) {
  }
}
