const convertToCelsius = function (fr) {
  return (fr - 32) / 1.8;
};

const convertToFahrenheit = function (c) {
  return c * 1.8 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
