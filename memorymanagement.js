// Create an object and store its reference.
let employee = {
    name: "Rajvi",
    department: "Development"
};

// Access the object property.
console.log(employee.name);

// Remove this variable's reference to the object.
employee = null;

// If no other reachable references exist,
// the object becomes eligible for garbage collection.