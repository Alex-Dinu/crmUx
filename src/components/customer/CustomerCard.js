import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomerCard(props) {
  return (
    <Link
      to={{
        pathname: "/CustomerScreen",
        search: "?customerId=" + props.customer.id,
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
        <a
          className="customer-email"
          href={"mailto:" + props.customer.emailAddress}
        >
          {props.customer.emailAddress}
        </a>
      </div>
    </Link>
  );
}

CustomerCard.propTypes = {
  customer: PropTypes.object,
  imagePath: PropTypes.string,
};

export default CustomerCard;
