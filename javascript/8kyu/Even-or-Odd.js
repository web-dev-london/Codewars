/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

// My solution

const number = 2;
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd(number);
