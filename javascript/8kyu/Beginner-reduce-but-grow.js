/* 
DESCRIPTION:
Given a non-empty array of integers, 
return the result of multiplying the 
values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

// My solutions

const numbers = [1, 2, 3, 4];

function multipliedValue1(number) {
  return number.reduce((total, current) => {
    return total * current;
  }, 1);
}
console.log(multipliedValue1(numbers));

function multipliedValue2(number) {
  let sum = 1;
  for (let i = 0; i < number.length; i++)
    sum *= number[i];

  return sum;
}
console.log(multipliedValue2(numbers));
