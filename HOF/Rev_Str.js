// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  // Main function to perform the operation with a delay
  function reverseAfterDelay(input) {
    // Print the original string
    console.log('Original String:', input);
  
    // Use setTimeout to introduce a delay of 2 seconds
    setTimeout(function () {
      // Reverse the string after the delay
      const reversedString = reverseString(input);
  
      // Print the reversed string
      console.log('Reversed String:', reversedString);
    }, 2000); // 2000 milliseconds (2 seconds)
  }
  
  // Example usage
  const inputString = "Hello, World!";
  reverseAfterDelay(inputString);
  