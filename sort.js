function sortNumbers(numbers) {
    // Use the sort() method to sort the numbers array in ascending order
    return numbers.sort(function(a, b) {
      return a - b;
    });
  }
  
  // Example usage:
  const numbers = [5, 2, 9, 1, 7];
  const sortedNumbers = sortNumbers(numbers);
  console.log(sortedNumbers); // Output: [1, 2, 5, 7, 9]
  