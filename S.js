


// Global scope
const company = "Sourcecube";

function displayEmployee() {
    // Function scope
    const employeeName = "Rajvi";

    if (true) {
        // Block scope
        const department = "IT";
        console.log("Department:", department);
        console.log("Employee:", employeeName);
    }

    console.log("Company:", company);
}

displayEmployee();

// company is accessible outside the function
console.log("Company outside:", company);
