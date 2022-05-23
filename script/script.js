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
let statsCount = false;

addPerson.addEventListener('click', newPerson);
calcStats.addEventListener('click', toStats);

function newPerson() {
    if (personId.value && firstName.value && lastName.value && age.value) {
        for (let i = 0; i < persons.length; i++) {
            if (personId.value === persons[i].id) {
                allFields.forEach(input => input.value = '');
                return alert(`sorry, we already have a person with the same id at ${i + 1} number`);
            }
        }
        let person = new Person(personId.value, firstName.value, lastName.value, age.value);
        persons.push(person);
        toOl();
        if (statsCount) {
            toStats();
        };
    }
    else {
        return alert(`all fields must be filled`);
    }
}

function toOl() {
    const text = `ID : ${personId.value}; First name : ${firstName.value}; Last name : ${lastName.value}; Age : ${age.value};`
    let li = document.createElement('li');
    let closeButton = document.createElement('button');
    closeButton.append('X');
    personsList.appendChild(li);
    li.append(document.createTextNode(text), " ", closeButton);
    allFields.forEach(input => input.value = '');
    closeButton.onclick = e => {
        let res = e.target.parentElement.textContent;
        let elements = res.split(';', 4);
        for (i = 0; i < persons.length; i++) {
            if (elements[0] === 'ID : ' + persons[i].id) {
                persons.splice(i, 1);
            }
        }
        e.target.parentElement.remove();
        toStats();
    }
}

function toStats() {
    if (persons.length > 0) {
        let avarageAge = persons.reduce((a, b) => a + b.age, 0) / persons.length;
        let minAge = persons.reduce((a, b) => b.age < a ? b.age : a, persons[0].age);
        let maxAge = persons.reduce((a, b) => b.age < a ? a : b.age, persons[0].age);
        if (!statsCount) {
            let text = `The avarage age of those persons is ${avarageAge.toFixed(1)}`;
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
            statsCount = true;
        } else {
            while (stats.firstElementChild.nextElementSibling) {
                stats.removeChild(stats.firstElementChild.nextElementSibling);
            }
            statsCount = false;
        }
    }
    else{
        while (stats.firstElementChild.nextElementSibling) {
            stats.removeChild(stats.firstElementChild.nextElementSibling);
        }
        statsCount = false;
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}