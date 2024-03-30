const convertToCelsius = function(tempF) {
  let temp1 = (tempF - 32) * (5 / 9);
  number1 = Math.round(temp1*10)/10
  return number1
};

const convertToFahrenheit = function(tempC) {
  let temp2 = (tempC * (9/5)) + 32
  number2 = Math.round(temp2 * 10) / 10;
  return number2
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
