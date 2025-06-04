/*
Given an array, find the sum of all even values inside the array and return it.

Check out these examples

console.log( sum([1]) ); // 0
console.log( sum([1, 2, 3, 4]) ); // 6
console.log( sum([1, 1, 4, 1, 1]) ); // 4

*/

function sumEven(array) {
  let sum = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

module.exports = sumEven;