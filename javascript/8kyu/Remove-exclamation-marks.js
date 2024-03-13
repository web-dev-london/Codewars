/* 
    Write function RemoveExclamationMarks which removes all
     exclamation marks from a given string.
 */

// My solutions.

const message = 'Hello World!!!!';

function RemoveExclamationMarks(str) {
  return str.replace(/\!/g, '');
}
RemoveExclamationMarks(message);

function removeAll1(str) {
  return str.replaceAll('!', '');
}
removeAll1(message);

function removeAll2(str) {
  return str.split('!').join('');
}
removeAll2(message);
