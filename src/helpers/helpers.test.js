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
        expect(maxNumber([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])).toEqual(
          4
        );
      });
    });
  });
});
