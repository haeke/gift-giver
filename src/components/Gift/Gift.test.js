import React from "react";
// Shallow renders the root node and returns a shallow wrapper around it. It must be a single-node wrapper.
//
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Gift from "./Gift";

// required to make enzyme work
configure({ adapter: new Adapter() });

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("expects Gift to work", () => {
    expect(gift).toMatchSnapshot();
  });

  it("expects the `state` to contain an object with person and present properties", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the the person input", () => {
    const person = "Uncle";
    beforeEach(() => {
      // desribes testing the person input such that it receives a value of Uncle
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("updates the person object in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the present input", () => {
    const present = "Calculator";
    beforeEach(() => {
      // test the present input such that it received a value of Calculator
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });

    it("updates the present object in `state`", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("when clicking on the remove gift button", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");

      it("called the removeGift function", () => {
        expect(mockRemove).toHaveBeenCalledWith(id);
      });
    });
  });
});
