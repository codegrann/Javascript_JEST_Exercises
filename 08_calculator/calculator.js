const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, el) => {
    return total + el;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((product, el) => {
    return product * el;
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
