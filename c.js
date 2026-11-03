
/* Topic 2: Closures */

const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(`Count: ${count}`);
    };
};

const counter = createCounter();

counter();
counter();
counter();
