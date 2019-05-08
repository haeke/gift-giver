import balanceReducer from "./balance";
import { SET_BALANCE, DEPOSIT } from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(balanceReducer(0, { type: SET_BALANCE, balance })).toEqual(balance);
  });

  it("deposits into the balance", () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: DEPOSIT, deposit })).toEqual(
      initialState + deposit
    );
  });
});
