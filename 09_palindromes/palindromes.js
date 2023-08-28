const palindromes = function (string) {
  let arrOfString = string.split("");
  let reversedString = [...arrOfString].reverse();
  let joinedString = arrOfString.join();
  let toMatch = //i;
    (joineReversedString = reversedString.join());
  console.log(joinedString.match(toMatch));
  console.log(toMatch.test(joinedString));

  return joinedString == joineReversedString;

  console.log(arrOfString);
  console.log(joinedString);
  console.log(joinedString == joineReversedString);
};
palindromes("121");
// Do not edit below this line
module.exports = palindromes;
