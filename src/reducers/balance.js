import { SET_BALANCE, DEPOSIT } from "../actions/constants";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.balance;
    case DEPOSIT:
      return state + action.deposit;
    default:
      return state;
  }
};
