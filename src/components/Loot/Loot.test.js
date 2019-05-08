import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Loot from "./Loot";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Loot", () => {
  const loot = shallow(<Loot />);
  // Test to make sure that the loot component renders
  it("renders properly", () => {
    expect(loot).toMatchSnapshot();
  });
});
