import { SET_BALANCE, DEPOSIT, WITHDRAWAL } from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

export default (state = 0, action) => {
  let balance;
  switch (action.type) {
    case SET_BALANCE:
      balance = action.balance;
      break;
    case DEPOSIT:
      balance = state + action.deposit;
      break;
    case WITHDRAWAL:
      balance = state - action.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  // save the new balance to the cookie
  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};
