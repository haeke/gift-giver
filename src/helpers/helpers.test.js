import { maxNumber } from "./helpers";

describe("the maxNumber", () => {
  describe("given an empty array", () => {
    it("returns 0", () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe("given an array of numbers", () => {
    describe("returns the max number", () => {
      it("returns 3", () => {
        expect(maxNumber([1, 2, 3, 4])).toEqual(4);
      });
    });
  });
});
