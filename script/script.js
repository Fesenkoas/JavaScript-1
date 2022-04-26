
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 13];
reverceArray(primes);
printarray(primes);
console.log('====================');
let index = search(13, primes);
console.log(index)

function reverceArray(arr){
    for(let i=0,j=arr.length-1; i<j; i++,j--){
        let rem = arr[j];
        arr[j] = arr[i];
        arr[i] = rem;
    }
}

function search(item, arr){
    let moreThenOne = [];
    for(let i=0, j = 0, rem; i < arr.length; i++, rem === -1 ? j : j++){
        arr[i] === item ? rem = i : rem = -1;
        rem != -1 ? moreThenOne[j] = rem : moreThenOne[j];
        }
    return moreThenOne;
}

function printarray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}