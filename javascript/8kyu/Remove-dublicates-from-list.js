/* 
  Define a function that removes duplicates from an array 
  of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
 */

const numbers = [1, 2, 1, 1, 3, 2];

function distinct1(a) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (output.indexOf(a[i]) === -1) output.push(a[i]);
  }
  return output;
}
distinct1(numbers);

function distinct2(a) {
  return a.filter((el, index) => a.indexOf(el) === index);
}
distinct2(numbers);

function distinct3(a) {
  return [...new Set(a)];
}
distinct3(numbers);
