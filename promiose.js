// Create a function that returns a Promise.
function checkResult(marks) {
    return new Promise((resolve, reject) => {

        // Check whether the student has passed.
        if (marks >= 35) {
            resolve("Student Passed");
        } else {
            reject(new Error("Student Failed"));
        }
    });
}

// Call the function with 75 marks.
checkResult(75)
    .then((result) => {
        // Handle successful completion.
        console.log(result);
    })
    .catch((error) => {
        // Handle a rejected Promise.
        console.log(error.message);
    })
    .finally(() => {
        // Run after the Promise settles.
        console.log("Result Check Completed");
    });