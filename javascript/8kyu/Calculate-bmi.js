/* 
DESCRIPTION:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

 */

// My solution

function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  if (bmi <= 18) return `Underweigth`;
  if (bmi <= 25.0) return `Normal`;
  if (bmi <= 30.0) return `Overweigth`;
  if (bmi > 30) return `Obese`;
}

bmi(3, 5);
