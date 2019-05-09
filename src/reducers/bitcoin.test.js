import bitcoinReducer from "./bitcoin";
import { FETCH_BITCOIN } from "../actions/constants";

describe("bitcoin reducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };

  it("fetches and sets the bitcoin data", () => {
    // Test calling the FETCH_BITCOIN action type on the bitcoin reducer, this should return some bitcoin data
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })
    ).toEqual(bitcoinData);
  });
});
