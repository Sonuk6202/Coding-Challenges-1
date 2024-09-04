// Store's inventory with items and their prices in USD
const storeInventory = {
    "Apple": 1.2,
    "Banana": 0.5,
    "Orange": 0.8,
    "Milk": 1.5,
    "Bread": 2.0
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices to INR using map
function convertPricesToINR(inventory, rate) {
    const inventoryEntries = Object.entries(inventory);
    const convertedEntries = inventoryEntries.map(([item, priceInUSD]) => {
        const priceInINR = priceInUSD * rate;
        return [item, priceInINR];
    });
    return Object.fromEntries(convertedEntries);
}

// Function to display prices in the DOM
function displayPrices(prices, elementId) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = ''; // Clear previous content
    for (const [item, price] of Object.entries(prices)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item}: ${price.toFixed(2)}`;
        listElement.appendChild(listItem);
    }
}

// Display initial prices in USD
displayPrices(storeInventory, 'usdPrices');

// Handle conversion to INR
document.getElementById('convertButton').addEventListener('click', function() {
    const inventoryInINR = convertPricesToINR(storeInventory, exchangeRate);
    displayPrices(inventoryInINR, 'inrPrices');
});
