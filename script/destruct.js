console.log('destruct arrays');
const arr = [2, 3, 5, 7, 11];
let [a, b, ...c]= arr;
console.log(a, b, c);

console.log('=======================');
fn(arr);

function fn([a,b]) {
    console.log(a+b);    
}

console.log('=======================');
console.log('swap');
let x = 5;
let y = 7;
console.log(x, y);
[y,x] = [x,y];
console.log(x, y);

console.log('=======================');
console.log('destruct objects');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: '34',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
// let firstName = person.firstName;
// let lastName = person.lastName;
let{firstName, lastName, ...obj} = person;
console.log(firstName, lastName);
console.log(obj);
personInfo(person)

function personInfo({firstName, lastName}){
    console.log(lastName, firstName);
}

console.log('=======================');



