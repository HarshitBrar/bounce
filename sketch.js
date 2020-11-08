var square1,square2;

function setup() {
  createCanvas(800,400);
  square1 = createSprite(600,300, 50, 50);
  square1.shapeColor = "green";
  square1.velocityY = -4;
  square2 = createSprite(600,100,50,50);
  square2.shapeColor = "green";
  square2.velocityY = 4;

}

function draw() {
  background(0);  
  if(square1.y - square2.y < square1.height/2 + square2.height/2 && square2.y - square1.y < square2.height/2 + square1.height/2){
  square1.velocityY = square1.velocityY * (-1);
  square2.velocityY = square2.velocityY * (-1);
 
  }
  
  drawSprites();
}