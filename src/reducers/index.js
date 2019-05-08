import { combineReducers } from "redux";
import balanceReducer from "./balance";

// The root reducer object will make adding new reducers maintainable
export default combineReducers({
  balance: balanceReducer
});
