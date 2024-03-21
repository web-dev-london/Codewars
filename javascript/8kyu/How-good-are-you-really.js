/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
 */

// My solutions.

const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const myPoint = 75;

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((total, curr) => total + curr, 0) /
      classPoints.length
  );
}
betterThanAverage(classPoints, myPoint);

function betterThanAverage2(classPoints, yourPoints) {
  let classAvr = 0;
  for (
    let points = 0;
    points < classPoints.length;
    points++
  ) {
    classAvr += classPoints[points];
  }
  classAvr = classAvr / classPoints.length;
  return yourPoints > classAvr;
}

betterThanAverage2(classPoints, myPoint);
