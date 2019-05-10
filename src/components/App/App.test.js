import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);

  it("expects app to work", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` to contain an empty array of gifts", () => {
    // checks the state object inside of the app component for an object called gift. The gift object should contain an empty array.
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `add-gift` button", () => {
    const id = 1;
    // we can use beforeEach inside of a describe the user interaction that is run when testing for a new array item and rendering a new item to the DOM.
    beforeEach(() => {
      // use the find method to look for the react component that contains the class .btn-add
      // use the simulate function to mock user interaction
      app.find(".btn-add").simulate("click");
    });
    // Use after each to set the state of the gifts object back to the original state, this is done to make sure that the rendered list test contains one child node.
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("adds a new gift to the `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("adds a new gift to the rendered list", () => {
      // find the dom node with gift-list then look at all of its children nodes and check that the length is equal 1.
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a Gift component", () => {
      // Use the find function to look for an instance of the Gift component, the exists component will return a boolean, use the toBe function to test that the component should exist.
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift.", () => {
      beforeEach(() => {
        // use the instance function to get access to the removeGift function defined in the app component.
        app.instance().removeGift(id);
      });

      it("removes the gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });

  it("contains a connected Loot component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });
});
