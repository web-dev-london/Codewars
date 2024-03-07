/* Very simple, given a number 
(integer / decimal / both depending on the language),
 find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34 */

/* My solutions */

const number = -2;

function opposite1(number) {
  return (number *= -1);
}
opposite1(number);

function opposite2(number) {
  return -number;
}

opposite2(number);
