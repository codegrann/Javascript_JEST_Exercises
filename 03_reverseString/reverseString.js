const reverseString = function (string) {
  let splitString = string.split("");
  let reversedString = splitString.reverse();
  string = reversedString.join("");

  console.log(string);
  return string;
  //   console.log(typeof splitString);
  //   console.log(splitString);
};
reverseString("1234");
// Do not edit below this line
module.exports = reverseString;
