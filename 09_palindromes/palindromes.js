const palindromes = function (string) {
  let arrOfString = string.replace(/[^a-z0-9]/g, "").split("");
  let reversedString = [...arrOfString].reverse();
  let joinedString = arrOfString.join();
  joineReversedString = reversedString.join();

  console.log(arrOfString);
  console.log(joinedString);
  console.log(joinedString == joineReversedString);
};
palindromes("121");
// Do not edit below this line
module.exports = palindromes;
