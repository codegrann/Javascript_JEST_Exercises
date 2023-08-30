const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();
  console.log(currentYear);

  let ageDiff = people.map((person) => {
    person.yearOfDeath - person.yearOfBirth;
  });
  return currentYear;
};

// findTheOldest()
// Do not edit below this line
module.exports = findTheOldest;
