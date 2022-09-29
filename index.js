function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}


/* 
  Add your pseudocode here
  make a function that returns true if a word is a palindrome. That means 
  that if the first letter is the same as the last later, it spells out the same 
  word regardless the direction those letters are being read, meaning you can read
   if you were reading backward .

   for this example:iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

  for word length -- 
      new string += letter 
  return word = new string 
*/

/*
  Add written explanation of your solution here
  is palindrome is a function that accepts 1 pramator. the first pramator
  is a string. we have a second function called reverse string that takes
  the same pramator. inside the revorse string function, we have a forLoop
  that goes in reverse and will add each letter into new string. Once it is
  retrun it will do a comparison to check if the string is the same or if
  it is "true" or "false".
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPallindrome("civic"));

  console.log("Expecting: false"); 
  console.log("=>", isPalindrome("home"));
}

module.exports = isPalindrome;
