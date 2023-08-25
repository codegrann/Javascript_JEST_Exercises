const leapYears = function (year) {
  let isLeap;
  isLeap = year % 4 == 0 ? true : false;
  return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
