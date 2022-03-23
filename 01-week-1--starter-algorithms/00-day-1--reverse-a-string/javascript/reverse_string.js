function reverseString(str) {
  const splitStr = str.split().reverse().toString();

  return splitStr;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// function takes in a string as an argument
  //will turn each character into an array
  //then put the last index into a new arrary
  //then turn that array into a string
// And a written explanation of your solution
