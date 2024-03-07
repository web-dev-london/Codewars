/* 
Your task is to make two functions 
( max and min, or maximum and minimum, etc., depending on the language )
 that receive a list of integers as input, 
 and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
 */

// My solutions

const numbers = [4, 2, -1, 5, -33, 10];

function min1(number) {
  return Math.min(...number);
}
min1(numbers);

function max1(number) {
  return Math.max(...number);
}
max1(numbers);

function min2(number) {
  number.sort((a, b) => a - b);
  return number[0];
}
min2(numbers);

function max2(number) {
  number.sort((a, b) => b - a);
  return number[0];
}
max2(numbers);
