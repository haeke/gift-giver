import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

// required to make enzyme work
configure({ adapter: new Adapter() });

const app = shallow(<App />);

const sample = x => x;

it("expects app to work", () => {
  expect(app).toMatchSnapshot();
  expect(sample(2)).toEqual(2);
});

it("initializes the `state` to contain an empty array of gifts", () => {
  // checks the state object inside of the app component for an object called gift. The gift object should contain an empty array.
  expect(app.state().gifts).toEqual([]);
});
