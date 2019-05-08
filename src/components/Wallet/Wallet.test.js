import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Wallet } from "./Wallet";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Wallet", () => {
  // mock test the deposit action
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  // make sure the prop names are the same as the prop names of the Wallet component
  const props = {
    balance: 20,
    depositAction: mockDeposit,
    withdrawalAction: mockWithdraw
  };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance from props", () => {
    // Tests that the balance prop is being passed to the Wallet component
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });

  it("creates an input to deposit into or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when the user types into the wallet input", () => {
    const userBalance = "25";

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("updated the local balance in `state` and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("and the user wants to make a deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"));

      it("dispatches the `depositAction()` that it receives from props with local amount", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("and the user wants to make a withdrawal", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));

      it("dispatches the `withdrawalAction()` that received from props with local amount", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
