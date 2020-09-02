import {
  INTERACTION_LIST_REQUEST,
  INTERACTION_LIST_SUCCESS,
  INTERACTION_LIST_FAIL
} from "../constants/interactionConstants";

const interactionsInitialState = { interactions: [], loading: true, error: "" };

function interactionListReducer(state = interactionsInitialState, action) {
  switch (action.type) {
    case INTERACTION_LIST_REQUEST:
      return {...state, loading: true};
    case INTERACTION_LIST_SUCCESS:
      return { ...state, loading: false, interactions: action.payload };
    case INTERACTION_LIST_FAIL:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export { interactionListReducer };
