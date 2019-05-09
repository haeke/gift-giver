import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import { SET_BALANCE, DEPOSIT, WITHDRAWAL } from "../actions/constants";

describe("balanceReducer", () => {
  describe("when the reducer is initialized", () => {
    const balance = 10;
    it("sets a balance", () => {
      expect(balanceReducer(0, { type: SET_BALANCE, balance })).toEqual(
        balance
      );
    });

    describe("re-initializing balance with balanceReducer2", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it("creates an action to deposit into the balance", () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: DEPOSIT, deposit })).toEqual(
      initialState + deposit
    );
  });

  it("creates an action to withdraw from the balance", () => {
    const withdrawal = 10;
    const initialState = 20;

    expect(
      balanceReducer(initialState, { type: WITHDRAWAL, withdrawal })
    ).toEqual(initialState - withdrawal);
  });
});
