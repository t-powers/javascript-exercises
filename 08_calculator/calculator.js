const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
};

const multiply = function (arr) {
    return arr.reduce((acc, currentValue) => acc * currentValue, 1);
};

const power = function (a, b) {
    console.log(a ** b);
};
power(2, 2)

const factorial = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

//just a test
// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
