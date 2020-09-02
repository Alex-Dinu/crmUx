import React from "react";
import PropTypes from "prop-types";
//http://nicolasgallagher.com/pure-css-speech-bubbles/demo/
function InteractionCard(props) {

  function handleTextChange(e)
  {
    props.interaction.comments = e.target.value;
  }

  const renderComment = () => {
    if( props.add == "true")
    {
      return(
        <div>
          <p>
            <textarea className="interactionCardTextarea" id="comment" onChange={handleTextChange}>{props.interaction.comments}</textarea>
          </p>
          <div>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.saveInteractionHandler(props.interaction);
              }}>
              Save
            </button>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.cancelInteractionHandler();
              }}>
              Cancel
            </button>
          </div>
        </div>
      );
    }
    else{
      return (
        <div>
          <p>{props.interaction.comments}</p>
          <div>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.deleteInteractionHandler(props.interaction.id);
              }}>
              Delete Interaction
            </button>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <blockquote className="example-twitter">
        <div>{props.interaction.dateTime}</div>
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
