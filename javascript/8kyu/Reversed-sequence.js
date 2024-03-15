// Description
/* 
  Build a function that returns an array of integers from n to 1 where n>0.

  Example : n=5 --> [5,4,3,2,1]
 */

// My solutions

const number = [5];

function reversedSeq(num) {
  let output = [];
  for (i = num; i > 0; i--) output.push(i);

  return output;
}
reversedSeq(number);

function reversedNumbers(number) {
  return Array.from(
    { length: number },
    (_, i) => i + 1,
  ).reverse();
}
console.log(reversedNumbers(number));
