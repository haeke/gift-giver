// https://api.coindesk.com/v1/bpi/currentprice.json
// dev dependencies to test async calls redux-mock-store fetch-mock --save-dev

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { FETCH_BITCOIN } from "./constants";
import { fetchBitcoin } from "./bitcoin";

// pass the thunk middleware to the mock store
// we are using thunk to make async calls in redux
const createStore = configureMockStore([thunk]);
// pass an initial object to the store called bitcoin that is just an empty object
const store = createStore({ bitcoin: {} });
// the mock response is what fetchMock is going to return
const mockResponse = { body: '{"bpi":"bitcoin price index"}' };
// fetchMock supports all HTTP verbs
// pass the mockResponse as the second argument
fetchMock.get(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  mockResponse
);

it("creates an async action to fetch the bitcoin value", () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  // mock calling dispatch from the mock store that calls the fetchBitcoin action creator, when making async calls jest requires that we return the async call.
  return store.dispatch(fetchBitcoin()).then(() => {
    // expect to have called the action FETCH_BITCOIN with response data
    expect(store.getActions()).toEqual(expectedActions);
  });
});
