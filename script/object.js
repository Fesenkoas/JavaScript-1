const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: '34',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let arr = Object.keys(person);
arr.forEach(i => console.log(i));
console.log('=====================');

arr = Object.values(person);
arr.forEach(i => console.log(i));
console.log('=====================');

arr = Object.entries(person);
arr.forEach(i => console.log(i));
console.log('=====================');