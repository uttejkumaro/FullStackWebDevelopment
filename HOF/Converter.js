// Store's inventory with prices in USD
const storeInventory = {
    item1: 20,
    item2: 30,
    item3: 15,
    // Add more items as needed
  };
  
  // Function to convert prices from USD to INR
  function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  const inventoryInRupees = Object.fromEntries(
    Object.entries(storeInventory).map(([item, priceUSD]) => [
      item,
      convertToINR(priceUSD),
    ])
  );
  
  // Display the original and converted inventory
  console.log('Original Inventory (USD):', storeInventory);
  console.log('Converted Inventory (INR):', inventoryInRupees);
  
  