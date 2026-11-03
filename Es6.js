// Declare an object using const.
const student = {
    studentName: "Rajvi",
    grade: "A"
};

// Extract object properties using destructuring.
const { studentName, grade } = student;

// Create an array.
const array1 = [1, 2, 3];

// Use spread syntax to create a new array.
const combinedArray = [...array1, 4, 5];

// Create an arrow function.
const greet = (name) => `Hello, ${name}!`;

// Display the results.
console.log(`Student: ${studentName}, Grade: ${grade}`);
console.log("Combined Array:", combinedArray);
console.log(greet(studentName));