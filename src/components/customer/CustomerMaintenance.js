import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

function CustomerMaintenance(props) {
  useEffect(() => {
    switch (props.action) {
      case "UPDATING":
        break;

      default:
        break;
    }

    return () => {};
  }, []);
  return (
    <div>
      <div className="form-group">
        <label>Customer First Name: </label>
        <input
          type="text"
          className="form-control"
          value={this.state.person_name}
          onChange={this.onChangePersonName}
        />
      </div>
      <Button id="DeleteButton" variant="contained" color="primary">
        Delete
      </Button>
      <Button onClick={onUpdateHandler(e)} variant="contained" color="primary">
        Update
      </Button>
      <Button id="SaveButton" variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

CustomerMaintenance.propTypes = {
  onDeleteHandler: PropTypes.func.isRequired,
  onUpdateHandler: PropTypes.func.isRequired,
  onSaveHandler: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default CustomerMaintenance;
