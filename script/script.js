const persons = [];
const personId = document.getElementById('personId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');
const stats = document.getElementById('stats');
const personsList = document.getElementById('personsList');
const allFields = document.querySelectorAll('input');
let statsCount = 0;

addPerson.addEventListener('click', newPerson);
calcStats.addEventListener('click', toStats);

function newPerson() {
    if (personId.value !== "" && firstName.value !== "" && lastName.value !== "" && age.value !== "") {
        for (let i = 0; i < persons.length; i++) {
            if (personId.value === persons[i].id) {
                allFields.forEach(input => input.value = '');
                return alert(`sorry, we already have a person with the same id at ${i + 1} number`);
            }
        }
        let person = new Person(personId.value, firstName.value, lastName.value, age.value);
        persons.push(person);
        toOl();
    }
    else {
        return alert(`all fields must be filled`);
    }
}

function toOl() {
    const text = `ID : ${personId.value}; First name : ${firstName.value}; Last name : ${lastName.value}; Age : ${age.value};`
    let li = document.createElement('li');
    personsList.appendChild(li);
    li.append(document.createTextNode(text));
    allFields.forEach(input => input.value = '');
}

function toStats() {
    let avarageAge = persons.reduce((a, b) => a + b.age, 0) / persons.length;
    let minAge = persons.reduce((a, b) => b.age < a ? b.age : a, persons[0].age);
    let maxAge = persons.reduce((a, b) => b.age < a ? a : b.age, persons[0].age);
    if (statsCount === 0) { 
        let text = `The avarage age of those persons is ${avarageAge}`;
        let p = document.createElement('p');
        stats.appendChild(p);
        p.append(document.createTextNode(text));
        text = `The minimum age of those persons is ${minAge}`;
        p = document.createElement('p');
        stats.appendChild(p);
        p.append(document.createTextNode(text));
        text = `The maximum age of those persons is ${maxAge}`;
        p = document.createElement('p');
        stats.appendChild(p);
        p.append(document.createTextNode(text));
        statsCount++;        
    }else{
        text = `The avarage age of those persons is ${avarageAge}`;
        p = document.createElement('p');
        p.append(document.createTextNode(text));
        stats.replaceChild(p, stats.children[1]);
        text = `The minimum age of those persons is ${minAge}`;
        p = document.createElement('p');
        p.append(document.createTextNode(text));
        stats.replaceChild(p, stats.children[2]);
        text = `The maximum age of those persons is ${maxAge}`;
        p = document.createElement('p');
        p.append(document.createTextNode(text));
        stats.replaceChild(p, stats.children[3]);
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}