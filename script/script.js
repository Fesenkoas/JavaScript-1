// //inharitance
// const human = {
//     hobby: 'chess',
//     fullName: function () { return `${this.firstName} ${this.lastName}` },
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
// }

// console.log(john);

// john.__proto__ = human;

// console.log(john.hobby);
// john.hobby = 'canabis';
// console.log(john.fullName());

// Person.prototype = human;
// const peter = new Person('Peter', 'Jackson');
// const marry = new Person('Marry', 'Smith');
// // peter.__proto__ = person;
// // marry.__proto__ = person;
// console.log(peter.fullName());
// console.log(marry.fullName());
// console.log('========================================');

// Array.prototype.printArray = function () {
//     // this.forEach((a) => console.log(a));// DON'T USE THIS SHIT, USE FOR!
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }
//     console.log('========================================');
// }

// const numbers = new Array(2, 3, 5, 7, 11, 13); //[2, 3, 5, 7, 11, 13];

// numbers.printArray();

// // function printArray(arr){
// //     arr.forEach(a => console.log(a));
// //     console.log('========================================');
// // }

// //printArray(numbers);

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

//Polimorphism
const sum = function (a, b, ...rest) {
    let res = a + b;
        for (let i = 0; i < rest.length; i++) {
            res += rest[i];
        }
        return res;
}
const res = sum(3, 5, 7, 9);
console.log(res);

