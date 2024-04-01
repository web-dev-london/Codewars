/* If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

// My solutions.

const sheeps = 3;

function countSheep(sheep) {
  let output = '';
  for (count = 1; count <= sheep; count++) {
    output += count.toString() + ' sheep...';
  }
  return output;
}
countSheep(sheeps);

const countSheeps1 = (sheep) => {
  return [...Array(sheep).keys()]
    .map((el) => `${el + 1} sheep...`)
    .join('');
};
countSheeps1(sheeps);

const countSheeps2 = (length) =>
  Array.from(
    { length },
    (_, idx) => ++idx + ' sheep...',
  ).join('');

countSheeps2(sheeps);
