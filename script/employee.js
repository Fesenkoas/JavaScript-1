class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = +salary;
        }
    }


    get toString() {
        return `ID: ${this.id}, First name: ${this.firstName}, Last name: ${this.lastName}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

