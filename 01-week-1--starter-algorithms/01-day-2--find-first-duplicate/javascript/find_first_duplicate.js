function findFirstDuplicate(arr) {
  let previousNumber;

  for( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === previousNumber) {
      return arr[i];
    } else {
      previousNumber = arr[i];
    }
  }

  return -1;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Loop that iterates through an array
  // has a variable that starts at 0 and will change to the iterated character.
  // will go through each character and compare it to the previous
  //
// And a written explanation of your solution
  //Created a variable for the previous number and then iterated over the array and if the number was already in there then 
