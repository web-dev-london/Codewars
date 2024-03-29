/* Description:

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType 
 */

// My solutions

class Ball {
  constructor(ballType) {
    if (ballType === undefined) {
      this.ballType = `regular`;
    } else {
      this.ballType = 'super';
    }
  }
}
const ball1 = new Ball();
console.log(ball1);

class Ball2 {
  constructor(ballType) {
    this.ball1 = ballType || 'regular';
  }
}
const ball2 = new Ball2();
console.log(ball2);
