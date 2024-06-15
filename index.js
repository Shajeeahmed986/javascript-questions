function countCharacters(str) {
    // Create an empty object to store character counts
    let charCount = {};
  
    // Loop through each character in the string
    for (let char of str) {
      // If the character already exists in the charCount object, increment its count
      if (charCount[char]) {
        charCount[char]++;
      } else {
        // If the character doesn't exist in the charCount object, initialize its count to 1
        charCount[char] = 1;
      }
    }
  
    // Return the charCount object
    return charCount;
  }
  
  // Example usage:
  const result = countCharacters("hello");
  console.log(result); // Output: { h: 1, e: 1, l: 2, o: 1 }
  