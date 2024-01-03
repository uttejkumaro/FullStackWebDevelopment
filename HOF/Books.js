// Sample list of books with authors and publication years
const books = [
    { title: 'Book1', author: 'author1', year: 2005 },
    { title: 'Book2', author: 'author2', year: 2015 },
    { title: 'Book3', author: 'author3', year: 2008 },
    // Add more books as needed
  ];
  
  // Function to filter and capitalize author names
  function filterAndCapitalize(booksList) {
    const currentYear = new Date().getFullYear();
  
    // Filter books published after 2010
    const filteredBooks = booksList.filter((book) => book.year >= 2010);
  
    // Capitalize author names in the filtered books
    const capitalizedBooks = filteredBooks.map((book) => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year,
      };
    });
  
    return capitalizedBooks;
  }
  
  // Use the function to filter and capitalize books
  const filteredAndCapitalizedBooks = filterAndCapitalize(books);
  
  // Display the original and filtered/capitalized books
  console.log('Original Books:', books);
  console.log('Filtered and Capitalized Books:', filteredAndCapitalizedBooks);
  
