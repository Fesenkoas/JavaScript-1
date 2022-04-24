let str = 0;

let NickName = str || null || NaN || false;
console.log(NickName);

greeting();
greeting(str);

function greeting(nname){
    nname = nname ?? "Anonymous";
    console.log(`Hello ${nname}`);
}
///////////////////////////////////////////////////////////////////////////
///////////////ARRAYS//////////////////////////////////////////////////////
console.log("Arrays->>>>>>");
const arr = [1,2,3, 'four', 'five', true];
console.log(typeof(arr));
console.log(arr[3]);
console.log(arr.length);
arr[10] = 100;
prinarray(arr);
console.log('+++++++++')

function prinarray(arr){
    console.log("=======================");
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log("=======================");
}

const greeting1 = function (name) {
    console.log(`Hello ${name}`);
}

greeting1("John");

console.log('==========================================');
function pow2(x){
    return x*x;
}

function factorial(n){
    let res = 1;
    for(let i = 1; i<=n; i++){
        res *= i;
    }
    return res;
}

function uniFunc(x, fn1, fn2){
    if(x >= 0){
        return fn1(x);
    }
    else return fn2(x);
}

let res = uniFunc(5, factorial, pow2);
console.log(res);


//HW! ====================================================>
