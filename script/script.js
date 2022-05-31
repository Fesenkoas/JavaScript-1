const company = new Company;

addPerson.onclick = function () {
    const person = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value);
    company.addEmployee(person);
    
};

calcStats.onclick = company.static();



