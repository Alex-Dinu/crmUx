import React from "react";
import PropTypes from "prop-types";

function InteractionCard(props) {
  return (
    <>
      <blockquote class="example-twitter">
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
  interaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string,
    comments: PropTypes.string,
  }),
  deleteInteractionHandler: PropTypes.func,
};

export default InteractionCard;
