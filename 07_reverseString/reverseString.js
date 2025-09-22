const reverseString = function (str) {
  let arr = str.split("");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;

    left++;
    right--;
  }
  return arr.join("");
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
