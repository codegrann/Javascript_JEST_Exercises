const removeFromArray = function (array, ...args) {
  let arrOfArgs = [...args];
  let newArray = [];
  let set;
  for (e of array) {
    if (!args.includes(e)) {
      newArray.push(e);
      // set = new Set(array);
      // set.delete(e);
      // newArray = Array.from(set);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
