function fibonacci(num) {
  let numA = 0;
  let numB = 1;
  let result;

  if(numA === num) {
    return numA;
  } else if (numB == num) {
    return numB;
  } else {
    for ( let i = 0; i < (num-1); i++) {
      result = numA + numB;
      numA = numB;
      numB = result;
    }
}

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
  //create variables for number A and number B
  //create a for loop that will run for as many times as the input
  //Add numA and numB
  //then reassign numB as numA
  //then reassign new value as numB
// And a written explanation of your solution
