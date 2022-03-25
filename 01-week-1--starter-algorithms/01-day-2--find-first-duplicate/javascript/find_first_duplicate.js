function findFirstDuplicate(arr) {
  const duplicateArray = [];

  for ( let i = 0; i < arr.length; i++){

    if ( duplicateArray.find( number => number === arr[i] )) {
      return arr[i]
    }

    duplicateArray.unshift(arr[i])
  }

  return -1;
}

// let previousNumber;

//   for( let i = 0; i < arr.length; i++ ) {
//     if ( arr[i] === previousNumber) {
//       return arr[i];
//     } else {
//       previousNumber = arr[i];
//     }
//   }

//   return -1;

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
  // has an empty array that is filled 
  // will go through each character and compare it to the previous
  //
// And a written explanation of your solution
// an empty array is created that will get elements crammed into it in a loop as long as the new array does not find the element within it.
