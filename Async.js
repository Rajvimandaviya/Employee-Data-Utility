// Create a function that returns a Promise.
function getData() {
    return new Promise((resolve) => {

        // Simulate an asynchronous operation.
        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 1000);
    });
}

// The async keyword defines an asynchronous function.
async function displayData() {
    try {
        // Wait for the Promise to resolve.
        const result = await getData();

        // Display the returned data.
        console.log(result);
    } catch (error) {
        // Handle errors.
        console.log("Error:", error.message);
    }
}

// Call the asynchronous function.
displayData();