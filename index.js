function isPalindrome(word) {
  let wordArray = word.split('').reverse().join('')
  return word === wordArray
}

/* 
  isPalindrome takes in a string as an argument
    make a copy of the string reversed
      .split to split string into an array of individual characters
      .reverse to reverse the order of the characters within the array
      .join to put the array elements back together into a string
    check if new string is strictly equal to original string, return the value  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
