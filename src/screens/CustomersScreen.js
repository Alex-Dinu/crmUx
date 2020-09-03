import React, { useEffect, useState, useRef } from "react";

import data from "./__mocks__/customerService";
import CustomerCard from "../components/customer/CustomerCard";
import { TextField } from "@material-ui/core";
import SkeletonCustomers from "./SkeletonCustomers";
import { AVATAR_IMAGE_PATH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { customerList } from "../redux/actions/customerAction";
import { useSetFocus } from "../utils/customHooks/useSetFocus";
import { useHistory, Redirect } from "react-router-dom";

function CustomersScreen() {
  const state = useSelector((state) => state);
  const { customers, loading, error } = state.customerList;
  const [searchQuery, setSearchQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const history = useHistory();
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //useSetFocus(searchRef);
  useEffect(() => {
    dispatch(customerList(searchQuery));
    //searchRef.target.value = searchQuery;
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
  }, [searchQuery]);

  return (
    <>
      {loading && <SkeletonCustomers />}
      {!loading && (
        <div>
          <div className="customerSearch">
            <TextField
              autoFocus
              className="customerSearch"
              id="standard-basic"
              label="Search for Customers" 
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              ref={searchRef}
            />
          </div>
          <button
            className="button"
            name="button"
            onClick={() => {
              history.push("/customermaintenancescreen/");
            }}
          >
            Add Customer
          </button>
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
