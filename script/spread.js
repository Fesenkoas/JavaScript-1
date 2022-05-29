console.log('Array spread ---->>');
const arr1 = [2, 3, 5];
const arr2 = [7, 11];
// const arrClone = [];
// arr1.forEach(e => arrClone.push(e));
// console.log(arr1 === arrClone);
// console.log(arrClone);
const arrClone = [...arr1, ...arr2, 1, 0];
console.log(arr1 === arrClone);
console.log(arrClone);
let res = Math.min(...arrClone);
console.log(res);
//////////////////////////////////////////////////////
console.log('Objects spread ---->>');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
}
const job = {
    company: 'Motorolla',
    position: 'Developer',
}
const personClone = { ...person, hobby: 'Chess', age: 28, ...job, arr1 };
console.log(personClone === person);
console.log(personClone);
const firstName = 'Peter';
const lastName = 'Jacson';
const peter = {
    firstName,
    lastName
};
console.log(peter);
const legacyClone = Object.assign({}, personClone, job, {age : 28, hobby : 'Vodka'});
console.log(legacyClone === personClone);
console.log(legacyClone);