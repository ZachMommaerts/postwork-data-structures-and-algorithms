function reverseString(str) {
  const stringArray = [];

  for(let i = 0; i <str.length; i++) {
    const letter = str.charAt(i);
    stringArray.unshift(letter);
  }

  const reversedString = stringArray.join('')

  return reversedString;
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
  //then as it iterates through each character, it puts the next character in front in the new array
  //then join that array into a string again
// And a written explanation of your solution
