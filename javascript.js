// This code runs in the global execution context.
let company = "Sourcecube";

// Calling a function creates a function execution context.
function calculateTotal(price, quantity) {

    // This variable belongs to the function context.
    let total = price * quantity;

    // Return the calculated result.
    return total;
}

// Call the function with two arguments.
let bill = calculateTotal(100, 3);

// Display the results.
console.log(company);
console.log(bill);