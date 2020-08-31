import React, { useEffect, useState } from "react";

import data from "./__mocks__/customerService";
import CustomerCard from "../components/customer/CustomerCard";
import { TextField } from "@material-ui/core";
import SkeletonCustomers from "./SkeletonCustomers";
import { AVATAR_IMAGE_PATH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../services/customerService";

function CustomersScreen() {
  const state = useSelector((state) => state);
  const customers = state.customers;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    console.log(">>>customers=" + customers);
    dispatch(getCustomers());
    
    // setLoading(true);
    // const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

    // data
    //   .get()

    //   .then((res) => {
    //     setCustomers(res.customers);
    //   })
    //   .then(() => delay(3000))
    //   .then(() => setLoading(false));

    return () => {};
  }, []);

  return (
    <>
      {state.loading && <SkeletonCustomers />}
      {!state.loading && (
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
