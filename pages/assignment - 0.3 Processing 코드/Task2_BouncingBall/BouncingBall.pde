/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */
 
PVector location;  // Location of shape
PVector location_2;
PVector velocity;  // Velocity of shape
PVector velocity_2;
PVector gravity;   // Gravity acts at the shape's acceleration
PVector gravity_2;


void setup() {
  size(640,360);
  location = new PVector(100,100);
  location_2 = new PVector (500, 50);
  velocity = new PVector(1.5,2.1);
  velocity_2 = new PVector(2.0,5.0);
  gravity = new PVector(0,0.2);
  gravity_2 = new PVector(0,0.5);
    
}

void draw() {
  background(0);
  
  // Add velocity to the location.
  location.add(velocity);
  location_2.add(velocity_2);
  // Add gravity to velocity
  velocity.add(gravity);
  velocity_2.add(gravity_2);
  
  // Bounce off edges
  if ((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  
  if ((location_2.x>width)||(location_2.x<0)){
    velocity_2.x = velocity_2.x * -1;
  }
  
  if (location.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity.y = velocity.y * -0.95; 
    location.y = height;
  }
  
    if (location_2.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity_2.y = velocity_2.y * -0.95; 
    location_2.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127,0,0);
  ellipse(location.x,location.y,48,48);
  fill(100,50,100);
  rect(location_2.x,location_2.y,30,30);
}
