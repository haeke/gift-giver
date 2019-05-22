export class User {
  constructor(name, email, quizScores, currentScore) {
    this.name = name;
    this.email = email;
    this.quizScores = quizScores;
    this.currentScore = currentScore;
  }

  saveScore(scoreToAdd) {
    this.quizScores.push(scoreToAdd);
  }

  showNameAndScores() {
    let scores =
      this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";

    return this.name + " scores: " + scores;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    return "New Email Saved : " + this.email;
  }
}

// Array methods that are useful

const inventory = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 20 },
  { name: "Computer", price: 540 },
  { name: "Keyboard", price: 20 }
];

// The filter method helps you filter out items inside of an array. It returns a list of items.
const filteredItems = inventory.filter(item => item.price < 100);
// returns an array of items that have a price that is higher than 100.
// filter is an ES6 method that is immutable, meaning that the original array is not modified.
console.log(filteredItems);
// Use the map function to perform a task on all the items inside of an array, a new array with the items that you return is created instead of directly modifying the array.
const doublePrice = inventory.map(item => {
  return {
    name: item.name,
    price: item.price * 2
  };
});

console.log(doublePrice);
// The find method will return the first instance for whatever condition we want.
let findItem = inventory.find(item => item.name === "Book");

console.log(findItem);

// Use the reduce function as an accumulator. aka when you want to get the sum of all the items inside of an array. The first argument is the accumulator and the second is the array item.

// Example of the sum of the prices in the inventory array.

let total = inventory.reduce((subTotal, item) => {
  return (item.price += subTotal);
}, 0);

console.log(total);

// The forEach function can be used just like the map function except that nothing is returned, you may want to use this method if you don't mind mutating the original array.

inventory.forEach(item => (item.price *= 2));
// Will directly mutate the price property on each element in the inventory array.
console.log(inventory);

// The some function will run on all items of an array, it will return a boolean on a condition that you set.

let expensive = inventory.some(item => {
  return item.price > 200;
});

console.log(expensive);

// Remove duplicates from an array

let a = [1, 2, 3, 4, 5, 5, 3, 2];
// Use a second array to add any elements that are not currently present.
let b = [];

for (let i = 0; i < a.length; i++) {
  // use the indexOf method to check if the current item in array a present inside of b. When indexOf returns -1 that means the item was not found so we should add it to the array b.
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

// Remove duplicates from an array using an object

let obj = {};

// use the for of loop to set the items in the array to the keys of the object
for (let i of a) {
  obj[i] = true;
}

// iterate over the objects keys to get an array of all the unique items in the object

let items = Object.keys(obj);

console.log(items);

// Use the Set method to get a list of unique values

console.log([...new Set(a)]);
