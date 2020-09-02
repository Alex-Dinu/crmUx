import React from "react";
import PropTypes, { shape } from "prop-types";
import { Link } from "react-router-dom";

function CustomerCard(props) {
  return (
    // Route to the customer screen, sending the customerId as a quert string parameter.
    <Link
      className="link"
      to={{
        pathname: "/customerscreen",
        search: "?customerid=" + props.customer.id,
      }}
    >
      <div className="customer">
        <img
          className="customer-image"
          src={props.imagePath}
          alt={props.customer.emailAddress}
        />
        <div className="customer-name">
          {props.customer.firstName + " " + props.customer.lastName}
        </div>
        <label className="customer-email">{props.customer.emailAddress}</label>
        {/* <a
          className="customer-email"
          href={"mailto:" + props.customer.emailAddress}
        >
          {props.customer.emailAddress}
        </a> */}
      </div>
    </Link>
  );
}

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    emailAddress: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
  imagePath: PropTypes.string,
};

export default CustomerCard;
