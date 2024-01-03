// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    // Regular expression for validating LinkedIn profile URLs
    const linkedinUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/;
  
    // Test if the provided URL matches the regex
    if (linkedinUrlRegex.test(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  }
  
  // Example usage
  validateLinkedInURL('https://www.linkedin.com/in/johndoe123');   // Valid LinkedIn URL
  validateLinkedInURL('https://www.linkedin.com/in/susan_smith');  // Valid LinkedIn URL
  validateLinkedInURL('https://www.linkedin.com/in/user_name');    // Invalid LinkedIn URL (contains underscore)
  validateLinkedInURL('http://www.linkedin.com/in/invalid-url');   // Invalid LinkedIn URL (does not start with https://www.linkedin.com/in/)
  