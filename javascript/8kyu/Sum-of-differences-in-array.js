/* 
  Descriptions

  Your task is to sum the differences between 
  consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element
 the result should be 0 (Nothing in Haskell, None in Rust).
 */

const numbers = [2, 1, 10];

function sumOfDifferences1(arr) {
  return arr.length > 1
    ? Math.max(...arr) - Math.min(...arr)
    : 0;
}
console.log(sumOfDifferences1(numbers));

function sumOfDifferences2(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((total, curr) => total + curr, 0);
}
console.log(sumOfDifferences2(numbers));
