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
            totalSalary += this.employees[i].salary;
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