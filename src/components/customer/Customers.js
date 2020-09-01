import React from "react";
import PropTypes from "prop-types";
import CustomerCard from "./CustomerCard";
import { TextField } from "@material-ui/core";
import { AVATAR_IMAGE_PATH } from "../../utils/constants";
function Customers(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div>
      <div className="customerSearch">
        <TextField
          className="customers-search"
          id="standard-basic"
          label="Search for Customers"
        />
      </div>
      <ul className="customers">
        {props.customers.map((customer) => (
          <li key={customer.id}>
            <CustomerCard
              customer={customer}
              imagePath={AVATAR_IMAGE_PATH + "/" + getRandomInt(6) + ".png"}
            ></CustomerCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

Customers.propTypes = {
  customers: PropTypes.object.isRequired,
  avatarImagePath: PropTypes.string,
};

export default Customers;
