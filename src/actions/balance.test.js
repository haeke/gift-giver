import { SET_BALANCE, DEPOSIT } from "./constants";
import { setBalance } from "./balance";
import { depositAction } from "../actions/balance";

it("creates an action to set the balance", () => {
  const balance = 0;
  // The redux action and payload item
  const expectedAction = { type: SET_BALANCE, balance };
  // the action creator that will set the object inside the reducer
  expect(setBalance(balance)).toEqual(expectedAction);
});

it("creates an action to deposit into the balance", () => {
  const deposit = 20;

  const expectedAction = { type: DEPOSIT, deposit };

  expect(depositAction(deposit)).toEqual(expectedAction);
});
