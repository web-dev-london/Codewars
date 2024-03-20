/* 
    You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */

// My solutions.

const string = [
  'bitcoin',
  'take',
  'over',
  'the',
  'world',
  'maybe',
  'who',
  'knows',
  'perhaps',
];

function twoSort(string) {
  return string.sort()[0].split('').join('***');
}
twoSort(string);

function twoSort2(str) {
  return [...str.sort()[0]].join('***');
}
twoSort2(string);
