import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Loot } from "./Loot";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Loot", () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  let loot = shallow(<Loot {...props} />);
  // Test to make sure that the loot component renders
  it("renders properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      // Use the mount method to add the new balance after calling the fetchBitcoin function
      loot = mount(<Loot {...props} />);

      it("dispatches the `fetchBitcoin()` action that it recieves from props", () => {
        expect(mockFetchBitcoin).toHaveBeenCalled();
      });
    });
  });

  describe("when there are valid bitcoin props", () => {
    beforeEach(() => {
      // update thr props object
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: "1,000" } } } };
      loot = shallow(<Loot {...props} />);
    });

    it("displays the correct bitcoin value", () => {
      expect(loot.find("p").text()).toEqual("Conversion Bitcoin: 0.01");
    });
  });
});
