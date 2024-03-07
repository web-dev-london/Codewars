// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// # My solution

function reversedString(world) {
  let output = '';
  for (let i = world.length - 1; i >= 0; i--) {
    output += world[i];
  }
  return output;
}
