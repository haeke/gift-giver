import { SET_BALANCE } from "./constants";
import { setBalance } from "./balance";

it("creates an action to set the balance", () => {
  const balance = 0;
  // The redux action and payload item
  const expectedAction = { type: SET_BALANCE, balance };
  // the action creator that will set the object inside the reducer
  expect(setBalance(balance)).toEqual(expectedAction);
});
