import balanceReducer from "./balance";
import { SET_BALANCE, DEPOSIT } from "../actions/constants";
import { depositAction } from "../actions/balance";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(balanceReducer(0, { type: SET_BALANCE, balance })).toEqual(balance);
  });

  it("creates an action to deposit into the balance", () => {
    const deposit = 20;

    const expectedAction = { type: DEPOSIT, deposit };

    expect(depositAction(deposit)).toEqual(expectedAction);
  });
});
