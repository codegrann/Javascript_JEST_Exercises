const sumAll = function (a, b) {
  let sum = 0;
  let max = a < b ? b : a;
  let min = a < b ? a : b;

  // if (typeof a != "number" && typeof b != "number") return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

  if (a > 0 && b > 0) {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
