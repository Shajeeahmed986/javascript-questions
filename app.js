function fibonacci(n) {
    // Base cases for 0 and 1
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    // Initialize variables to store the previous two Fibonacci numbers
    let prevPrev = 0;
    let prev = 1;
  
    // Iterate from 2 to n and compute Fibonacci numbers
    for (let i = 2; i <= n; i++) {
      // Compute the current Fibonacci number by adding the previous two
      let current = prevPrev + prev;
  
      // Update the previous two Fibonacci numbers for the next iteration
      prevPrev = prev;
      prev = current;
    }
  
    // Return the n-th Fibonacci number
    return prev;
  }
  
  // Example usage:
  console.log(fibonacci(0)); // Output: 0
  console.log(fibonacci(1)); // Output: 1
  console.log(fibonacci(2)); // Output: 1
  console.log(fibonacci(5)); // Output: 5
  console.log(fibonacci(10)); // Output: 55
  