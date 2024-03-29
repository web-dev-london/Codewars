/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
 */

// My solutions.

const uefaEuro2016 = (teams, scores) => {
  const allTeams = [...teams];
  const allScores = [...scores];

  if (allScores[0] === allScores[1])
    return `At match ${allTeams[0]} - ${allTeams[1]}, teams played draw.`;
  if (allScores[0] < allScores[1])
    return `At match ${allTeams[0]} - ${allTeams[1]}, ${allTeams[1]} won!`;
  return `At match ${allTeams[0]} - ${allTeams[1]}, ${allTeams[0]} won!`;
};

uefaEuro2016(['Germany', 'Ukraine'], [2, 1]);
