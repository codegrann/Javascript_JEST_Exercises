const fibonacci = function (n) {
  let array = [];
  array[0] = 1;
  array[1] = array[0];
  console.log(array[1]);
  if (n == 0) return 0;
  if (n == 1) return 1;

  for (i = 1; i <= array.length; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
};
fibonacci();

// Do not edit below this line
module.exports = fibonacci;
