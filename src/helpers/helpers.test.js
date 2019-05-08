import { maxNumber } from "./helpers";

describe("the maxNumber", () => {
  describe("given an empty array", () => {
    it("returns 0", () => {
      expect(maxNumber([])).toEqual(0);
    });
  });
});
