import React, { useEffect } from "react";
import Customer from "../components/Customer";
import { getCustomers } from "../services/customerService";

function Customers(props) {
  return (
    <div>
      Customer Screen
      <Customer></Customer>
    </div>
  );
}
export default Customers;
