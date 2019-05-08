import balanceReducer from "./balance";
import { SET_BALANCE } from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(balanceReducer(0, { type: SET_BALANCE, balance })).toEqual(balance);
  });
});
