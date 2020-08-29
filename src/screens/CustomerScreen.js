import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import data from "../screens/__mocks__/customerService";
import inter from "../screens/__mocks__/InteractionService";
import InteractionListItem from "../components/interactions/InteractionListItem";
import CustomerCard from "../components/customer/CustomerCard";

function CustomerScreen(props) {
  const customerId = new URLSearchParams(props.location.search).get(
    "customerId"
  );
  const [customer, setCustomer] = useState({});
  const [interactions, setInteractions] = useState([]);
  const imagePath = "../images/avatars";
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  useEffect(() => {
    data.getCustomer().then((res) => {
      setCustomer(res.customer);
    });

    inter.get().then((res) => {
      setInteractions(res.interactions);
    });
    return () => {};
  }, []);

  const deleteCustomerHandler = (customerId) => {
    console.log(">>> Deleting customer");
  };

  const updateCustomerHandler = (customer) => {
    console.log(">>> Updating customer");
  };

  return (
    <div>
      <CustomerCard
        customer={customer}
        imagePath={imagePath + "/" + getRandomInt(6) + ".png"}
      ></CustomerCard>

      <ul className="customers">
        {interactions.map((interaction) => (
          <li key={interaction.id}>
            <InteractionListItem
              interaction={interaction}
            ></InteractionListItem>
          </li>
        ))}
      </ul>
      <div>
        <InteractionListItem></InteractionListItem>
      </div>
    </div>
  );
}

CustomerScreen.propTypes = {};

export default CustomerScreen;
