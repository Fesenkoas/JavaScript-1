///////////OBJECT///////////////
const person = {
    firsname: "John",
    lastname: "Smith",
    age: 27,
    fullName: function () {
        return `${this.firsname} ${this.lastname}`;
    }
};
console.log(person.firsname, person.lastname, person.age);
person.age = 35;
console.log(person.firsname, person.lastname, person.age);
console.log('=========================');
console.log(person.fullName());

const peter = {
    firsname: "Peter",
    lastname: "Jacson",
    age: 34,
    'best hobby': 'chess',
    fullName: function () {
        return `${this.firsname} ${this.lastname}`;
    }
}
console.log(peter.fullName());
peter.firsname = 'Rabindranat';
console.log(peter.fullName());
console.log(person);
delete peter.age;
console.log(person["age"]);
let key = 'lastname';
console.log(person[key]);
console.log(person.key);
console.log('======================');
printObject(peter);
const mary = new Person(3000, 'Mary', 'Smith', 18);
console.log('======================');
printObject(mary);
const persons = [mary, Person(4000, 'Tigran', 'Petrosyan', 42), peter];
console.log(persons[0]);

function printObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`${key} -> ${obj[key]()}`);
        }
        else console.log(`${key} -> ${obj[key]}`);
    }
}

function Person(id, firstname, lastname, age) {
    this.id = id;
    this.firsname = firstname;
    this.lastname = lastname;
    this.age = +age;
    this.fullName = function () {
        return `${this.firsname} ${this.lastname}`;
    }
}
console.log('======================');
