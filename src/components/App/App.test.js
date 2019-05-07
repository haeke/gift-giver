import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
// setup file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });
const app = shallow(<App />);

const sample = x => x;

it("expects app to work", () => {
  expect(app).toMatchSnapshot();
  expect(sample(2)).toEqual(2);
});
