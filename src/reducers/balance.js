import { SET_BALANCE, DEPOSIT, WITHDRAWAL } from "../actions/constants";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.balance;
    case DEPOSIT:
      return state + action.deposit;
    case WITHDRAWAL:
      return state - action.withdrawal;
    default:
      return state;
  }
};
