/* 
Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
Strings
Fundamentals
 */

// My solutions.

const text = 'scHOOl counselOr';

function stringOutcome(string) {
  let pattern = new RegExp(string, 'gi');
  if (pattern.test('School Counselor'))
    return 'Anything with Alcohol';
  if (pattern.test('Jabroni')) return `Patron Tequila`;
  if (pattern.test('Programmer'))
    return `Hipster Craft Beer`;
  if (pattern.test('Bike Gang Member'))
    return `Moonshine`;
  if (pattern.test('Politican'))
    return `Your tax dollars`;

  return `Beer`;
}
stringOutcome(text);

function getDrinkByProfession(param) {
  var list = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };
  return list[param.toLowerCase()] || 'Beer';
}

getDrinkByProfession(text);
