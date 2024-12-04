const sumAll = function (a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (a < 0 || b < 0) {
      return "ERROR";
    } else if (isNaN(a) === false || isNaN(b) === false) {
      return "ERROR";
    } else {
      sum += i;
    }
  }
  return sum;
};

module.exports = sumAll;
