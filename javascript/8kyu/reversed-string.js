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
