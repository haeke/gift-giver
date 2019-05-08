export const maxNumber = numbers => {
  // get a list of all of the ids inside the array
  let ids = numbers.map(number => number.id);
  // get the maximum id inside of the ids array account for the possiblity of there being no items
  let maxId = ids.length > 0 ? Math.max(...ids) : 0;

  return maxId;
};
