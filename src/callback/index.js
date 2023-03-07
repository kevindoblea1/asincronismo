function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, calc) {
    return calc(num1, num2);
};

console.log(calc(2,2, sum));
console.log(calc(2,2, rest));
console.log(calc(2,2, div));
console.log(calc(2,2, mult));

//empty function
setTimeout(function () {
    console.log("Hello Js");
}, 2000)
//gretting function
function grettin(name) {
    console.log(`Hello ${name}`);
}

setTimeout(grettin, 2000, 'Kevin')