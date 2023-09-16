function isPalindrome(str) {
  // Remove any non-letter characters and convert to lowercase
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam")); // Should return true
console.log(isPalindrome("robot")); // Should return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
