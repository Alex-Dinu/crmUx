import React from "react";
import PropTypes from "prop-types";
//http://nicolasgallagher.com/pure-css-speech-bubbles/demo/
function InteractionCard(props) {
  return (
    <>
      <blockquote className="example-twitter">
        <div>Interaction date: {props.interaction.date}</div>
        <p>{props.interaction.comments}</p>
        <div>
          <button
            className="button"
            name="button"
            onClick={() => {
              props.deleteInteractionHandler(props.interaction.id);
            }}
          >
            Delete Interaction
          </button>
        </div>
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
