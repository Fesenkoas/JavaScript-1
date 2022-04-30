const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log('before');
printArray(arr);
bubbleSort(arr);
console.log('after');
printArray(arr);//0,1,1,2,2,2,4,5,9,9
const persons = [new Person(3000, 'Mary', 'Smith', 18), new Person(4000, 'Tigran', 'Petrosian', 42),
new Person(2000, 'Peter', 'Jackson', '42'), new Person(1000, 'John', 'Smith', 27)];
console.log('before');
printArray(persons);
bubbleSortByAge(persons);
console.log('after');
printArray(persons);

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0, rem; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                rem = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = rem;
            }
        }
    }
}

function bubbleSortByAge(persons) {
    for (let j = 0; j < persons.length - 1; j++) {
        for (let i = 0, rem; i < persons.length - 1; i++) {
            if (+persons[i].age > +persons[i + 1].age) {
                rem = persons[i];
                persons[i] = persons[i + 1];
                persons[i + 1] = rem;
            }
        }
    }
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========================');
}

function printObject(obj) {
    for (let k in obj) {
        if (typeof obj[k] === 'function') {
            console.log(`${k} -> ${obj[k]()}`);
        } else {
            console.log(`${k} -> ${obj[k]}`);
        }
    }
    console.log('======================');
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
