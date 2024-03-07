// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// # My solution

const text = 'Hello World!';

function reversedString(world) {
  return world.split('').reverse().join('');
}

reversedString(text);

function reversedString1(str) {
  return [...str].reverse().join('');
}
reversedString1(text);

function reversedString2(str) {
  let output = '';
  for (let i = str.length - 1; i >= 0; i--)
    output += str[i];
  return output;
}

reversedString2(text);
