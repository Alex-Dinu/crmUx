import { getInteractions } from "../../services/interactionService";

const {
  INTERACTION_LIST_REQUEST,
  INTERACTION_LIST_SUCCESS,
  INTERACTION_LIST_FAIL
} = require("../constants/interactionConstants");

const interactionList = (customerId) => async (dispatch) => {
  try {
    dispatch({ type: INTERACTION_LIST_REQUEST });

    const data = await getInteractions(customerId);
    dispatch({ type: INTERACTION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INTERACTION_LIST_FAIL, payload: error });
  }
};

export { interactionList };
