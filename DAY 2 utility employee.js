
// ================================================
// DAY 2: EMPLOYEE DATA UTILITY
// 25 Employees
// ================================================


// 1. EMPLOYEE DATA
const employees = [
    { id: 1, name: "Aarav", department: "IT", salary: 50000 },
    { id: 2, name: "Diya", department: "HR", salary: 42000 },
    { id: 3, name: "Kabir", department: "IT", salary: 65000 },
    { id: 4, name: "Meera", department: "Finance", salary: 58000 },
    { id: 5, name: "Rohan", department: "HR", salary: 39000 },
    { id: 6, name: "Anaya", department: "Finance", salary: 72000 },
    { id: 7, name: "Ishaan", department: "IT", salary: 60000 },
    { id: 8, name: "Nisha", department: "HR", salary: 45000 },
    { id: 9, name: "Vivaan", department: "IT", salary: 55000 },
    { id: 10, name: "Kiara", department: "Finance", salary: 68000 },
    { id: 11, name: "Arjun", department: "IT", salary: 48000 },
    { id: 12, name: "Pooja", department: "HR", salary: 52000 },
    { id: 13, name: "Rahul", department: "Finance", salary: 62000 },
    { id: 14, name: "Sneha", department: "HR", salary: 47000 },
    { id: 15, name: "Dev", department: "IT", salary: 80000 },
    { id: 16, name: "Mira", department: "Finance", salary: 75000 },
    { id: 17, name: "Yash", department: "IT", salary: 43000 },
    { id: 18, name: "Riya", department: "HR", salary: 61000 },
    { id: 19, name: "Om", department: "Finance", salary: 40000 },
    { id: 20, name: "Tara", department: "IT", salary: 70000 },
    { id: 21, name: "Neel", department: "Marketing", salary: 46000 },
    { id: 22, name: "Ira", department: "Marketing", salary: 54000 },
    { id: 23, name: "Karan", department: "Sales", salary: 59000 },
    { id: 24, name: "Aisha", department: "Sales", salary: 63000 },
    { id: 25, name: "Manav", department: "Marketing", salary: 51000 }
];


// 2. SEARCH EMPLOYEE
function searchEmployees(data, searchText) {
    const query = searchText.toLowerCase().trim();

    return data.filter(employee =>
        employee.name.toLowerCase().includes(query)
    );
}


// 3. FILTER EMPLOYEE
function filterByDepartment(data, department) {
    return data.filter(employee =>
        employee.department.toLowerCase() ===
        department.toLowerCase()
    );
}

function filterByMinimumSalary(data, minimumSalary) {
    return data.filter(employee =>
        employee.salary >= minimumSalary
    );
}


// 4. SORT EMPLOYEE
function sortEmployees(data, order = "asc") {
    return [...data].sort((a, b) => {
        if (order === "desc") {
            return b.salary - a.salary;
        }

        return a.salary - b.salary;
    });
}


// 5. GROUP BY DEPARTMENT
function groupByDepartment(data) {
    return data.reduce((groups, employee) => {
        const department = employee.department;

        if (!groups[department]) {
            groups[department] = [];
        }

        groups[department].push(employee);

        return groups;
    }, {});
}


// 6. AVERAGE SALARY
function calculateAverageSalary(data) {
    if (data.length === 0) {
        return 0;
    }

    const totalSalary = data.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    return totalSalary / data.length;
}


// 7. HIGHEST PAID EMPLOYEE
function findHighestPaidEmployee(data) {
    if (data.length === 0) {
        return null;
    }

    return data.reduce((highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
    );
}


// 8. TEST CODE: CALL ALL FUNCTIONS

console.log("===== ALL 25 EMPLOYEES =====");
console.table(employees);


console.log("===== SEARCH EMPLOYEE: 'an' =====");
console.table(searchEmployees(employees, "an"));


console.log("===== FILTER: IT DEPARTMENT =====");
console.table(filterByDepartment(employees, "IT"));


console.log("===== FILTER: SALARY 60000 OR MORE =====");
console.table(filterByMinimumSalary(employees, 60000));


console.log("===== SORT: LOW TO HIGH SALARY =====");
console.table(sortEmployees(employees, "asc"));


console.log("===== SORT: HIGH TO LOW SALARY =====");
console.table(sortEmployees(employees, "desc"));


console.log("===== GROUP BY DEPARTMENT =====");

const groupedEmployees = groupByDepartment(employees);

for (const department in groupedEmployees) {
    console.log("Department:", department);
    console.table(groupedEmployees[department]);
}


console.log("===== AVERAGE SALARY =====");

const averageSalary = calculateAverageSalary(employees);

console.log("Average Salary: ₹" + averageSalary.toFixed(2));


console.log("===== HIGHEST PAID EMPLOYEE =====");

const highestPaidEmployee = findHighestPaidEmployee(employees);

console.table([highestPaidEmployee]);
