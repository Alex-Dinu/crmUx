import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import data from "../screens/__mocks__/customerService";
import inter from "../screens/__mocks__/InteractionService";
import CustomerCard from "../components/customer/CustomerCard";

import InteractionCard from "../components/interactions/InteractionCard";
import { AVATAR_IMAGE_PATH } from ".././utils/constants";

function CustomerScreen(props) {
  const [customer, setCustomer] = useState({});
  const [interactions, setInteractions] = useState([]);
  const history = useHistory();

  // Get the customerId from the query string parameter.
  const customerId = new URLSearchParams(props.location.search).get(
    "customerid"
  );

  // This is just a random integer generator function used
  // to pick a random avatar for the demo.
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    if (customer.id == undefined) {
      data.getCustomer().then((res) => {
        setCustomer(res.customer);
      });
    }
    inter.get().then((res) => {
      setInteractions(res.interactions);
    });
    return () => {};
  }, []);

  const deleteCustomerHandler = (customerId) => {
    console.log(">>> CustomerScreen.Deleting customer");
  };

  const addInteractionHandler = () => {
    console.log(
      ">>> CustomerScreen.addInteractionHandler customerId=" + customerId
    );
    history.push({
      pathname: "/interaction",
      search: "?customerid=" + customerId,
    });
  };

  const deleteInteractionHandler = (interactionId) => {
    console.log(
      ">>> CustomerScreen.deleteInteractionHandler interactionId = " +
        interactionId
    );
  };
  return (
    <div>
      <CustomerCard
        customer={customer}
        imagePath={AVATAR_IMAGE_PATH + "/" + getRandomInt(6) + ".png"}
      ></CustomerCard>
      <button
        className="button"
        name="button"
        onClick={() => {
          deleteCustomerHandler();
        }}
      >
        Delete Customer
      </button>

      <button
        className="button"
        name="button"
        onClick={() => {
          addInteractionHandler();
        }}
      >
        Add Interaction
      </button>
      <ul className="interactions">
        {interactions.map((interaction) => (
          <li key={interaction.id}>
            <InteractionCard
              interaction={interaction}
              deleteInteractionHandler={deleteInteractionHandler}
            ></InteractionCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerScreen;
