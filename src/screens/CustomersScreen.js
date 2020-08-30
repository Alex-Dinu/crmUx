import React, { useEffect, useState } from "react";

import data from "./__mocks__/customerService";
import CustomerCard from "../components/customer/CustomerCard";
import { TextField } from "@material-ui/core";
import SkeletonCustomers from "./SkeletonCustomers";
import { AVATAR_IMAGE_PATH } from "../utils/constants";

function CustomersScreen(props) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    setLoading(true);
    const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

    data
      .get()

      .then((res) => {
        setCustomers(res.customers);
      })
      .then(() => delay(3000))
      .then(() => setLoading(false));

    return () => {};
  }, []);

  return (
    <>
      {loading && <SkeletonCustomers />}
      {!loading && (
        <div>
          <div className="customerSearch">
            <TextField
              className="customers-search"
              id="standard-basic"
              label="Search for Customers"
            />
          </div>
          <ul className="customers">
            {customers.map((customer) => (
              <li key={customer.id}>
                <CustomerCard
                  customer={customer}
                  imagePath={AVATAR_IMAGE_PATH + "/" + getRandomInt(6) + ".png"}
                ></CustomerCard>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CustomersScreen;
