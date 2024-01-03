// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Adjust the range as needed
  }
  
  // Function to display progress indication
  function displayProgress(timeRemaining) {
    console.log(`Time remaining: ${timeRemaining} seconds`);
  }
  
  // Main function to perform the operation with a customizable delay
  function generateNumberWithDelay(delayInSeconds) {
    let timeRemaining = delayInSeconds;
  
    // Display progress every second until the delay is over
    const progressInterval = setInterval(function () {
      displayProgress(timeRemaining);
      timeRemaining--;
  
      // When the delay is over, generate and display the random number
      if (timeRemaining < 0) {
        clearInterval(progressInterval); // Stop the progress interval
        const randomNumber = generateRandomNumber();
        console.log(`Random Number Generated: ${randomNumber}`);
      }
    }, 1000); // Progress indication every 1 second
  
    // Use setTimeout to introduce the overall delay
    setTimeout(function () {
      // Nothing needs to be done here as progress indication handles the rest
    }, delayInSeconds * 1000); // Convert seconds to milliseconds
  }
  
  // Example usage with a delay of 3 seconds
  const delayInSeconds = 3;
  generateNumberWithDelay(delayInSeconds);
  