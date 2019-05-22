import { maxNumber, minMaxReduce } from "./helpers";

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

describe("Return an object containing the minimum and maximum for a list of numbers", () => {
  const items = [0.1, 0.3, 0.4, 0.5, 0.9];
  // min and max values object passed to the reduce function
  const minMax = {
    minReading: Number.MAX_VALUE,
    maxReading: Number.MIN_VALUE
  };

  const minMaxValues = items.reduce(minMaxReduce, minMax);
  console.log(minMaxValues);
  it("returns an object with {minReading: 0.1, maxReading: 0.9}", () => {
    expect(minMaxValues).toEqual({ minReading: 0.1, maxReading: 0.9 });
  });
});
