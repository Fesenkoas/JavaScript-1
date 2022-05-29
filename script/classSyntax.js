class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get date() {
        return this._birthDate;
    }

    get age() {
        const ageDiff = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiff);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullname = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

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
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee){
        const index = this._employees.findIndex(e => e.id === employee.id);
        if(index < 0){
            this._employees.push(employee);
            return true;
        }
        return false;
    }

    removeEmployee(id){
        const index = this._employees.findIndex(e => e.id === id);
        if(index>=0){
            this._employees.splice(index, 1)
        }
        return index >= 0;
    }
}

const john = new Person(1, 'John', 'Smith', '1991-05-14');
console.log(john);
console.log(john.fullname());
console.log(john.id);
john.lastName = 'Jacson';
console.log(john.lastName);
console.log(john.fullname());
console.log(john.age);

const peter = new Employee(2, 'Peter', 'Parker', '2001-03-12', 18000);
console.log(peter.salary);
peter.salary = 15000;
console.log(peter.salary);
peter.salary = 19000;
console.log(peter.salary);
console.log('======Company======');
const firm = new Company();
firm.addEmployee(peter);
const marry = new Employee(3, 'Marry', 'Smith', '2001-03-12', 20000);
firm.addEmployee(marry);
firm.employees.forEach(e=>console.log(e));
firm.employees.length = 1;
firm.employees.forEach(e=>console.log(e));