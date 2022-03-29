function selectionSort(arr) {
  let lowestNumber;
  const sortedArray = [];

  for(let i = 0; i < arr.length; i++) {
    lowestNumber = Math.min(...arr);
    sortedArray.push(lowestNumber);
    arr.filter(number => number === lowestNumber);
  }

  return sortedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
