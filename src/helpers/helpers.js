export const maxNumber = numbers => {
  return numbers.length > 0 ? Math.max(...numbers) : 0;
};

// make two calculations in one traversal using the reduce function
export const minMaxReduce = (acc, item) => {
  return {
    minReading: Math.min(acc.minReading, item),
    maxReading: Math.max(acc.maxReading, item)
  };
};
