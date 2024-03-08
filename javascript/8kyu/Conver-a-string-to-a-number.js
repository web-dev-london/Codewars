/* 
Description
We need a function that can transform a string into a number. 
What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, 
and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */

// My solutions

const stringNumbers = '1234';

function stringToNumber1(str) {
  return Number(str);
}
stringToNumber1(stringNumbers);

function stringToNumber2(str) {
  return parseInt(str);
}
stringToNumber2(stringNumbers);

function stringToNumber3(str) {
  return +str;
}
stringToNumber3(stringNumbers);
