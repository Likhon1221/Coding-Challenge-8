// Task 1. Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    };
    getDetails() {
        return `${this.name} Position ${this.position} Salary $${this.salary}`;
    };
    getTotalSalary() {
        return this.salary;
    };

};

// Task 2. Create a Department Class

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    };

    addEmployee(employee) {
        this.employees.push(employee);
    };

    getDepartmentSalary() {
        let totalSalary = 0;
        for (let i = 0; i < this.employees.length; i++) {
            totalSalary += this.employees[i].getTotalSalary();
        }
        return totalSalary;
    };

    // Task 4: Calculate total salary including bonuses using a for loop

    calculateTotalSalaryWithBonus() {
        let total = 0;
        for (let i = 0; i < this.employees.length; i++) {
            total += this.employees[i].getTotalSalary();
        }
        return total;
    };
};

// Task 3. Create a Manager Class using composition
class Manager {
    constructor(employee, bonus) {
        this.employee = employee;
        this.bonus = bonus;
    };

    getDetails() {
        return `${this.employee.getDetails()} and has bonus of $${this.bonus}`;
    }
    getTotalSalary() {
        return this.employee.salary + this.bonus;
    };
};

// Task 5: Create and Manage Departments and Employees

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");

// Create managers using composition
const charlieEmployee = new Employee("Charlie", 120000, "Engineering Manager", "Engineering");
const charlie = new Manager(charlieEmployee, 20000);

const dianaEmployee = new Employee("Diana", 130000, "Marketing Manager", "Marketing");
const diana = new Manager(dianaEmployee, 25000);

// Add employees and managers to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);