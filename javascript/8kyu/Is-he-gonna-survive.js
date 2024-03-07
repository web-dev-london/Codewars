/* 
A hero is on his way to the castle to complete his mission.
 However, he's been told that the castle is surrounded with a couple of powerful dragons!
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
 Assuming he's gonna grab a specific given number of bullets and move forward to fight another
  specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
 */

// My solutions

function hero1(bullets, dragons) {
  return bullets >= dragons * 2;
}
console.log(hero1(4, 2));

function hero2(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}
console.log(hero2(4, 2));
