// Global variable
let name = "Rajvi";

function greet() {
    // Global variable can be accessed inside this function
    console.log(name);
}

greet(); // Rajvi

// Global variable can also be accessed here
console.log(name); // Rajvi