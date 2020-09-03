import React from "react";
import PropTypes from "prop-types";
import { ACTIONS_IMAGE_PATH } from "../../utils/constants";

//http://nicolasgallagher.com/pure-css-speech-bubbles/demo/
function InteractionCard(props) {
  function handleTextChange(e) {
    props.interaction.comments = e.target.value;
  }

  const renderIconButtons = () => {
    if (props.mode != "add" && props.mode != "edit") {
      return (
        <div className="iconButtons">
          &nbsp;&nbsp;&nbsp;
          <img
            alt="Edit"
            src={ACTIONS_IMAGE_PATH + "/edit.png"}
            onClick={() => {
              props.editInteractionHandler(props.interaction.id);
            }}
          />
          &nbsp;
          <img
            alt="Delete"
            src={ACTIONS_IMAGE_PATH + "/delete.png"}
            onClick={() => {
              props.deleteInteractionHandler(props.interaction.id);
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  };
  const renderComment = () => {
    if (props.mode == "add" || props.mode == "edit") {
      return (
        <div>
          <p>
            <textarea
              className="interactionCardTextarea"
              id="comment"
              onChange={handleTextChange}
            >
              {props.interaction.comments}
            </textarea>
          </p>
          <div>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.saveInteractionHandler(props.interaction, props.mode);
              }}
            >
              Save
            </button>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.cancelInteractionHandler();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>{props.interaction.comments}</p>
        </div>
      );
    }
  };
  return (
    <>
      <blockquote className="example-twitter">
        <div>
          {props.interaction.dateTime}
          {renderIconButtons()}
        </div>
        {renderComment()}
      </blockquote>
    </>
    // <div className="interactionCard">
    //   <div>{props.interaction.date}</div>
    //   <div>{props.interaction.comments}</div>
    //   <div>
    //     <button
    //       className="button"
    //       name="button"
    //       onClick={() => {
    //         props.deleteInteractionHandler(props.interaction.id);
    //       }}
    //     >
    //       Delete Interaction
    //     </button>
    //   </div>

    // </div>
  );
}

InteractionCard.propTypes = {
  // TODO: interaction shape.
  deleteInteractionHandler: PropTypes.func,
};

export default InteractionCard;
