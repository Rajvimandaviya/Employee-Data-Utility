const storeName = "Chai Tapri";
let dailyOrderCount = 42;
var city = "Surat";

dailyOrderCount = 43;

function prepareBill() {
  if (true) {
    let itemPrice = 50;
    var discount = 5;
  }
  console.log("Discount:", discount);
}

function calculateGST(amount) {
  return amount * 0.18;
}

const calculateTotal = (price, tax) => price + tax;

const pricesInINR = [100, 250, 400, 800];

const expensiveItems = pricesInINR.filter(price => price > 300);
const discountedPrices = pricesInINR.map(price => price * 0.9);
const grandTotal = pricesInINR.reduce((acc, curr) => acc + curr, 0);

const user = {
  name: "Aarav",
  age: 26,
  greet() {
    console.log(`Namaste, my name is ${this.name}.`);
  }
};

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increment = createCounter();

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 101, user: "Priya" });
    }, 1000);
  });
};

async function loadDashboard() {
  console.log("Fetching user data...");
  const data = await fetchUserData();
  console.log(`Welcome back, ${data.user}!`);
}

function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.start = function() {
  console.log(`${this.type} engine started.`);
};
const myCar = new Vehicle("Sedan");

const student = { studentName: "Rohan", grade: "A" };
const { studentName, grade } = student;

const array1 = [1, 2, 3];
const combinedArray = [...array1, 4, 5];

function collectScores(...scores) {
  return scores.reduce((sum, score) => sum + score, 0);
}

prepareBill();
console.log("Total Price with GST:", calculateTotal(100, calculateGST(100)));
console.log("Expensive Items:", expensiveItems);
console.log("Discounted Prices:", discountedPrices);
console.log("Grand Total:", grandTotal);
user.greet();
console.log("Counter 1:", increment());
console.log("Counter 2:", increment());
myCar.start();
console.log(`Student: ${studentName}, Grade: ${grade}`);
console.log("Combined Array:", combinedArray);
console.log("Total Score:", collectScores(10, 20, 30));
loadDashboard();