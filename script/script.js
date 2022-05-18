const arr = ['one', 'two', 'thRee', 'eight', 'thrEE', 'three', 'six'];
let res = arr.indexOf('three');//second argument fromIndex...
console.log(`indexOf method is ${res}`);
res = arr.lastIndexOf('three');
console.log(`lastIndexOf method is ${res}`);
res = arr.includes('three');
console.log(`includes method is ${res}`);
res = arr.findIndex(item => 'three' === item.toLowerCase());// second argument fromIndex...
console.log(`findIndex method is ${res}`);

const persons = [
    {
        name: 'Petya',
        age: 23
    },
    {
        name: 'John',
        age: 28
    },
    {
        name: 'Tigran',
        age: 26
    },
    {
        name: 'Rabindranat',
        age: 23
    }
];

res = persons.findIndex(e => e.name === 'Tigran');
console.log(`Tigran is on the ${res} position`);
console.log('forEach method =========================>');
persons.forEach((p, i) => console.log(`${i+1} : ${p.name}, age : ${p.age}`));
console.log('filter method =========================>');
res = persons.filter((p, i) => p.age > 25);
console.log(res);
console.log('map method =========================>');
const list = persons.map((p, i) => `<li> ${p.name}, age : ${p.age}</li>`);
console.log(list);

const numbers = [5,9,11,2,7,13,2];
console.log('reduce method ===================>');
res = numbers.reduce((accum, item) => accum * item);
console.log(res);

const personslist = list.reduce((accum, item) => accum + item, '');
console.log(personslist);

items.innerHTML = personslist;

res = persons.reduce((accum, person) => accum + person.age, 0);
console.log(`summ of ages is : ${res}`);

res = numbers.sort((a,b) => a - b);
console.log(persons);

persons.sort((p1,p2) => {
   let t = p2.age - p1.age;
   if(t !== 0){
       return t;
   }
   else{
       return p2.name.localeCompare(p1.name);
   }
});
console.log(persons);



// arr.customSearchIndex = function (callback){
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i))
//         return i;
//     }
//     return -1;
// }

// res = arr.customSearchIndex(item => item === 'six')
// console.log(`customSearchMethod is ${res}`);

// function search(item, arr){
//     let res = [];
//     let index = arr.indexOf(item);
//     while(index !== -1){
//         res.push(index);
//         index = arr.indexOf(item, index + 1);
//     }
//     return res;
// }

// res = search('three', arr);
// console.log(res);


