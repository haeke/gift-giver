import { SET_BALANCE, DEPOSIT, WITHDRAWAL } from "./constants";

export const setBalance = balance => {
  return {
    type: SET_BALANCE,
    balance
  };
};

export const depositAction = amount => {
  return {
    type: DEPOSIT,
    deposit: amount
  };
};

export const withdrawalAction = withdrawal => {
  return {
    type: WITHDRAWAL,
    withdrawal
  };
};
