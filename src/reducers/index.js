import { combineReducers } from "redux";
import balanceReducer from "./balance";
import bitcoinReducer from "./bitcoin";

// The root reducer object will make adding new reducers maintainable
export default combineReducers({
  balance: balanceReducer,
  bitcoin: bitcoinReducer
});
