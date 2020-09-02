import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import data from "../screens/__mocks__/customerService";
import inter from "../screens/__mocks__/InteractionService";
import CustomerCard from "../components/customer/CustomerCard";


import { interactionList } from "../redux/actions/interactionAction";

import { customerGet, customerDelete } from "../redux/actions/customerAction";

import InteractionCard from "../components/interactions/InteractionCard";
import { AVATAR_IMAGE_PATH } from ".././utils/constants";
import SkeletonCustomerScreen from "./SkeletonCustomerScreen";

function CustomerScreen(props) {
  const state = useSelector((state) => state);


  const { interactions } = state.interactionList;
  const interactionsLoading = state.interactionList.loading;
  

  const { customer, loading, error, isDeleted } = state.customer;

  //const [customer, setCustomer] = useState({});
  //const [interactions, setInteractions] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

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
    dispatch(customerGet(customerId));
    dispatch(interactionList(customerId));

    // inter.get().then((res) => {
    //   setInteractions(res.interactions);
    // });
    return () => {};
  }, []);

  const deleteCustomerHandler = (customerId) => {
    dispatch(customerDelete(customerId));
  };

  const afterDeleteHandler = () => {
    history.push("/customersscreen");
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


  if (loading == true) {
    return <SkeletonCustomerScreen></SkeletonCustomerScreen>;
  } else if (isDeleted == true) {
    return (
      <>
        <div className="SuccessMessage">Customer deleted.</div>
        <button className="button" onClick={() => afterDeleteHandler()}>
          OK
        </button>
      </>
    );
  } else if (loading == false && customer) {
    return (
      <>
        <div className="padding">
          <CustomerCard
            customer={customer}
            imagePath={AVATAR_IMAGE_PATH + "/" + getRandomInt(6) + ".png"}
          ></CustomerCard>
          <div className="padding"></div>
          <button
            className="button"
            name="button"
            onClick={() => {
              deleteCustomerHandler(customer.id);
            }}
          >
            Delete Customer
          </button>
            <button
              className="button"
              name="button"
              onClick={() => {
                addInteractionHandler();
              }}>Add Interaction
            </button>
            <ul className="interactions">
              {interactions.map((interaction) => {
                return (
                  <li key={interaction.id}>
                    <InteractionCard
                      interaction={interaction}
                      deleteInteractionHandler={deleteInteractionHandler}
                    ></InteractionCard>
                  </li>
                );
              })}
            </ul> 
        </div>
      </>
    );
  }

}

export default CustomerScreen;
