import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Wallet from "./Wallet";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Wallet", () => {
  const wallet = shallow(<Wallet />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });
});
