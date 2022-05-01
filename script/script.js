//number
let x = 10.4;
let res = Math.round(x);
console.log(res);
res = Math.trunc(x);
console.log(res);
res = Math.floor(x);
console.log(res);
console.log(Math.PI);
res = Math.max(7, 2, 9, 11, 4);
console.log(res);
res = Math.pow(3, 4);
console.log(res);
res = Math.random();
console.log(res);
console.log(rndm(1, 4));
console.log('=========================');
//////////////////////////////////////////////////////////////////////////
//String
x = '             Two beer or not two beer                    ';
console.log(x);
x = x.trim();
console.log(x);
res = x.split(' ');
console.log(res);
res = x.toUpperCase();
console.log(res);
res = x.toLowerCase();
console.log(res);
res = x.length;
console.log(res);
res = x.charAt(1);
console.log(res);
res = x[1];
console.log(res);
res = x.indexOf('e');
console.log(res);
res = x.lastIndexOf('e');
console.log(res);
res = x.startsWith('Two');
console.log(res);
res = x.substring(4, 8);
console.log(res);
res = x.slice(4, 8);
console.log(res);
console.log('=========================');
//////////////////////////////////////////////////////////////////////////
//arrays
const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);
arr.push(6);
console.log('===push===');
console.log(arr);
console.log('===pop===');
res = arr.pop();
console.log(arr);
console.log(res);
console.log('===shift===');
res = arr.shift();
console.log(arr);
console.log(res);
console.log('===unshift===');
arr.unshift(1);
console.log(arr);
const arr1 = ['one', 'two', 'three'];
const arr2 = ['four', 'five'];
console.log('===concat===');
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('===slice===');
res = arr.slice(2, 4);
console.log(arr);
console.log(res);
console.log('===splice===');
//arr.splice(1,2, -10, -20, -30);
//arr.splice(1, 0, -30);
//arr.splice(0, 1);//arr.shift()
//arr.splice(0, 0, -10, -20);//arr.unshift()
//arr.splice(arr.length - 1, 1);//arr.pop()
arr.splice(arr.length, 0, 100);//arr.push()
console.log(arr);
//////////////////////////////////////////////////////////////////////////
//modals
// alert('Hello');

// const check = confirm('are you elder then 18?');
// alert(check);

// const nickname = prompt('What is your name');
// alert(nickname);
//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
function rndm(a, b) {
    return Math.trunc(Math.random() * (b - a) + a);
}

