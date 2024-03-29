/* Description:
Fix the function

I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

Fundamentals
 */

// My solutions.

const addFive = (number) => {
  return number < 0 ? 0 : number + 5;
};
addFive(2);

const plusFive = (number) => {
  return number + 5;
};
plusFive(-3);
