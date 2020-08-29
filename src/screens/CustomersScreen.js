import React, { useEffect, useState } from "react";
import Customer from "../components/customer/Customers";
import data from "./__mocks__/customerService";
import CustomerCard from "../components/customer/CustomerCard";
import { TextField } from "@material-ui/core";

function CustomersScreen(props) {
  const [customers, setCustomers] = useState([]);
  const imagePath = "../images/avatars";
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    data.get().then((res) => {
      setCustomers(res.customers);
    });

    return () => {};
  }, []);

  return (
    <>
      <TextField
        className="customers-search"
        id="standard-basic"
        label="Search for Customers"
      />
      <ul className="customers">
        {customers.map((customer) => (
          <li key={customer.id}>
            <CustomerCard
              customer={customer}
              imagePath={imagePath + "/" + getRandomInt(6) + ".png"}
            ></CustomerCard>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CustomersScreen;
