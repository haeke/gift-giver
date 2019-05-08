import { SET_BALANCE } from "./constants";
import { setBalance } from "./balance";

it("creates an action to set the balance", () => {
  const balance = 0;

  const expectedAction = { type: SET_BALANCE, balance };

  expect(setBalance(balance)).toEqual(expectedAction);
});
