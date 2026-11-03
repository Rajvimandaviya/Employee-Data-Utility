console.log("1. Start");

setTimeout(() => {
    console.log("4. Timer callback");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise callback");
});

console.log("2. End");
