let person = {
    name: 'Peter',
}
person = null;
printName(person);
console.log('===========================');

try {
    let res = solution(0, 10);
    console.log(res);
} catch (e) {
    console.log(e.message);
}

function solution(a, b) {
    if (a !== 0) {
        return b / a;
    }
    if (b === 0) {
        throw new Error('solution any number');
    }
    throw {message : 'no solution'};
}

function printName(obj) {
    try {
        console.log(obj.name);
    } catch (e) {
        //console.log(e.message);
        console.log('error');
    } finally {
        console.log('Finally in printName');
    }
}


