const convertToCelsius = function (fr) {
  let c = (fr - 32) / 1.8;
  let rounded = c.toFixed(1);
  return +rounded;
};

const convertToFahrenheit = function (c) {
  let fr = c * 1.8 + 32;
  let rounded = fr.toFixed(1);
  return +rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
