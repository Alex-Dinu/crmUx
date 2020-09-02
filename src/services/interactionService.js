import axios from "axios";
import { INTERACTIONS_URI } from "../utils/constants";

export const getInteractions = async (customerId) => {
  var uri = INTERACTIONS_URI + customerId;
  var data = await axios.get(uri);
  return data.data;
};

