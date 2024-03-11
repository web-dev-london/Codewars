/* 
Write a function which calculates 
the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

// My solutions.

const numbers = [1, 2, 3, 4];

function findAverage1(arr) {
  return (
    arr.reduce((total, curr) => total + curr, 0) /
      arr.length || 0
  );
}
findAverage1(numbers);

function findAverage2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / arr.length;
}
findAverage2(numbers);
