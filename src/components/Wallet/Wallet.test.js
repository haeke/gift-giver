import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Wallet } from "./Wallet";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance from props", () => {
    // Tests that the balance prop is being passed to the Wallet component
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });
});
