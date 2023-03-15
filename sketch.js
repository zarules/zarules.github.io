// this is for your game/web toy
var sprite1;
var sprite2;
var ball;
var ballChangeX = 12;
var ballChangeY = 12;
var score = 0;

function setup() {
 new Canvas(2985, windowHeight);
 noStroke();

 sprite1 = new Sprite(15, windowHeight / 2);
   sprite1.width = 15;
   sprite1.height = 90;
   sprite1.color = ('white');
   sprite1.vel.y = 0;


 sprite2 = new Sprite(985, windowHeight / 2);
   sprite2.width = 15;
   sprite2.height = 90;
   sprite2.color = ('white');

  
 ball = new Sprite(windowWidth / 2, windowHeight / 2);
   ball.width = 13 ;
   ball.height = 13;
   ball.color = ('red');
}


function draw() {

  background(0, 0, 0, 85); 

  ball.position.x += ballChangeX;
  ball.position.y += ballChangeY;
  sprite2.position.y = ball.position.y - 2;
  sprite2.position.x = windowWidth - 30;
  sprite1.position.x = 15; 

  if (ball.position.y < 25 ||
  ball.position.y > windowHeight - 50) {
  ballChangeY *= -1;
 }

 if (ball.collide(sprite2)) {
 ballChangeX *= -1;
 ballChangeY *= -1;
 }

 if (ball.collide(sprite1)) {
  ballChangeX *= -1;
  ballChangeY *= -1;
 }
 
  if (kb.pressing('w')){
   sprite1.vel.y = -15;
  }
  else if (kb.pressing('s')){
    sprite1.vel.y = 15;
  }
  else sprite1.vel.y = 0;

  if (ball.position.x < 0) {
   ball.position.y = windowHeight;
  }

  ball.position.y = sprite2.position.y;
 if (kb.pressing('a')){
  ball.position.y = windowHeight /2;
  ball.position.x = windowWidth /2;
 sprite1.position.y = windowHeight /2;
 }

 if (ball.position.x > windowWidth) {
   score++;
   fill(255, 255, 255);
   textSize(24);
   text("Score: " + score, 500, 25);
   ball.position.x = windowWidth / 2;
   ball.position.y = windowHeight / 2;
   }
  }





