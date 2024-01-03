// Function to validate URLs
function validateURL(url) {
    // Regular expression for validating URLs
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]$/;
  
    // Test if the provided URL matches the regex
    if (urlRegex.test(url)) {
      console.log(`${url} is a valid URL.`);
    } else {
      console.log(`${url} is not a valid URL.`);
    }
  }
  
  // Example usage
  validateURL('http://www.example.com'); // Valid URL
  validateURL('https://example.org');    // Valid URL
  validateURL('ftp://invalid-url.com');  // Invalid URL
  