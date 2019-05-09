import rootReducer from "./index";
// Test that the combineReducer creates the overall reducer with an initial object
describe("The rootReducer", () => {
  it("initializes the combined default state", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
