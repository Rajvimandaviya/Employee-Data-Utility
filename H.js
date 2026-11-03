// Function declaration can be called before its definition
greet();

function greet() {
    console.log("Hello from Modern JavaScript!");
}

// var is hoisted and initialized as undefined
console.log(employeeName);

var employeeName = "Rajvi";

console.log(employeeName);

// let and const cannot be accessed before declaration
// console.log(age); // ReferenceError
const age = 20;

console.log(age);
