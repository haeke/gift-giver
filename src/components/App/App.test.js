import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

// required to make enzyme work
configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("expects app to work", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the `state` to contain an empty array of gifts", () => {
  // checks the state object inside of the app component for an object called gift. The gift object should contain an empty array.
  expect(app.state().gifts).toEqual([]);
});

it("adds a new gift to the `state` by clicking the add gift button", () => {
  // use the find method to look for the react component that contains the class .btn-add
  // use the simulate function to mock user interaction
  app.find(".btn-add").simulate("click");
  //
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it("adds a new gift to the rendered list when clicking the add gift button", () => {
  // use the find method
  // use the simulate function to mock user interaction
  app.find(".btn-add").simulate("click");
  // find the dom node with gift-list then look at all of its children nodes and check that the length is equal 1.
  expect(app.find(".gift-list").children().length).toEqual(2);
});
