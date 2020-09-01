import React from "react";
import PropTypes from "prop-types";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorFallback;
