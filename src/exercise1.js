const moment = require("moment");

const sortProduct = input => {
  // Your future job begins here ...
  console.log('Test 1');
  var date = input[0].dateAdded;
  var dateM = moment(date).year();

  console.log('Test ' + dateM);
  return input.filter( value => moment(value.dateAdded).year() < 2000);
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
