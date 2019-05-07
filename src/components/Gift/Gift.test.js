import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Gift from "./Gift";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("expects Gift to work", () => {
    expect(gift).toMatchSnapshot();
  });

  it("expects the `state` to contain an object with person and present properties", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });
});
