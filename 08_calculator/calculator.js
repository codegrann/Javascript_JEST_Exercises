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

const factorial = function (a) {
  let fac = 1;
  if (a == 0 || a == 1) return 1;
  // USING A FOR LOOP
  for (i = 1; i <= a; i++) {
    fac *= i;
  }
  return fac;

  // USING RECURRING OF A FUNCTION
  //  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
