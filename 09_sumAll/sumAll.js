const sumAll = function (num1, num2) {
  let counter = 0;
  
  if((!Number.isInteger(num1) || !Number.isInteger(num2)) || (num1 < 0 || num2 < 0 )) return "ERROR";

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      counter += i;
    }
  }
  for (let i = num1; i <= num2; i++) {
    counter += i;
  }

  return counter;
};

// Do not edit below this line

module.exports = sumAll;
