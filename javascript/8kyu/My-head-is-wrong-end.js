/* Description:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
 */

// My solutions

const zoo = ['tail', 'body', 'head'];

const fixTheMarket = (arr) => {
  let end = arr.shift();
  let begin = arr.pop();

  arr.push(end);
  arr.unshift(begin);

  return arr;
};
fixTheMarket(zoo);

const fixTheMarket2 = (arr) => {
  return arr.reverse();
};
fixTheMarket2(zoo);

function fixTheMarket3(arr) {
  return [arr[2], arr[1], arr[0]];
}
fixTheMarket3(zoo);

const fixTheZoo = ([tail, body, head]) => [
  head,
  body,
  tail,
];
fixTheZoo(zoo);
