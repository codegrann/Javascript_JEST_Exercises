const palindromes = function (string) {
  // let arrOfString = string.replace(/[^a-z0-9]/g, "").split("");
  let arrOfString = string.replace(/\b/g, "").split("");
  let reversedString = [...arrOfString].reverse();
  // return arrOfString.join() == reversedString.join();

  console.log(arrOfString.join() == reversedString.join());
};
palindromes("121");
// Do not edit below this line
module.exports = palindromes;
