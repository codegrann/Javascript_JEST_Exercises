const sumAll = function (a, b) {
  let sum = 0;
  let max = a < b ? b : a;
  let min = a < b ? a : b;
  if (!typeof a == Number && !typeof b == number) return "ERROR";

  function ns(a, b) {
    if (!typeof a == Number && !typeof b == Number) console.log("ERROR");
  }
  ns(2, 4);

  if (a > 0 && b > 0) {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};
console.log(typeof (1 === Number) || typeof (2 == Number));

// Do not edit below this line
module.exports = sumAll;
