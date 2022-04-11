//  HW:
/*
let res = sumDigits(1234);
let res = luckyNumber(123870);

fuction sumDigits(x){
    returen !!res = 10!!;
}

function luckyNumber(x){
    return  !!res ? "lucky" : "unlucky"!!
}
*/


function sumDigits(n){
    let sum = 0;
    for ( ; n != 0; n = Math.floor(n / 10)) {
    sum += n % 10;
    }
    return sum;
}

let res = sumDigits(1234);
console.log(`first task : ${res}`);

function luckyNumber(x){
    let rem = 0, even = 0, odd = 0;
    for( ; x != 0; x = Math.floor(x / 10)){
        rem = x % 10;
        rem % 2 == 0 ? even += rem : odd += rem;
    }
    even === odd ? rem = "lucky" : rem = "unlucky";
    return rem;
}

res = luckyNumber(123870);
console.log(`second task : ${res}`);