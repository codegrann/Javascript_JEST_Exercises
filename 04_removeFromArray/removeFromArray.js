const removeFromArray = function (array, args) {
  let newArray;
  let set;
  for (e of array) {
    if (e == args) {
      set = new Set(array);
      set.delete(e);
      newArray = Array.from(set);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
