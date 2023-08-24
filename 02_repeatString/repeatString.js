const repeatString = function (string, count) {
  let word = "";
  word = count < 0 ? "ERROR" : count == 0 ? "" : run();
  function run() {
    for (let i = 1; i <= count; i++) {
      word += string;
    }
    if (word == "") return word;
    return word;
  }
  //   console.log(word);
  return word;
};

//repeatString("hey", 4);

// Do not edit below this line
module.exports = repeatString;
