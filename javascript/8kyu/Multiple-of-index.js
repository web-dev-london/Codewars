// Description
/* 
    Return a new array consisting of elements 
    which are multiple of their own index 
    in input array (length > 1).
 */

// My solution
const numbers = [0, 2, 3, 6, 9];

function multipleOfIndex(array) {
  return array.filter((item, index) => {
    return item === 0 || item % index === 0;
  });
}
multipleOfIndex(numbers);
