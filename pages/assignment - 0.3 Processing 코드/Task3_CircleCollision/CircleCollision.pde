/**
 * Circle Collision with Swapping Velocities
 * by Ira Greenberg. 
 * 
 * Based on Keith Peter's Solution in
 * Foundation Actionscript Animation: Making Things Move!
 */
 
Ball[] balls =  { 
  new Ball(200, 400, 20), 
  new Ball(700, 400, 80),
  new Ball(100,100,100)
};

void setup() {
  size(640, 360);
}

void draw() {
  background(51);

  for (Ball b : balls) {
    b.update();
    b.display();
    b.checkBoundaryCollision();
  }
  balls[0].checkCollision(balls[1]);
  balls[0].checkCollision(balls[2]);
  balls[1].checkCollision(balls[2]);
}
