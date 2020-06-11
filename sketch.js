
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(10,200,50,10);
  movingRect=  createSprite(800, 200, 50, 50);
  
  fixedRect.shapeColor="BLUE";
  movingRect.shapeColor="BLUE";

  movingRect.velocityX=-3;
  fixedRect.velocityX=3;
  
}

function draw() {
  background(0,0,0);  

  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 ) {

    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1);

    console.log(fixedRect.velocityX);
  } 
  
  if (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ) {

    fixedRect.velocityY=fixedRect.velocityY*(-1);
    movingRect.velocityY=movingRect.velocityY*(-1);

    console.log(fixedRect.velocityY);
  } 


  /*else {
    fixedRect.shapeColor="BLUE";
    movingRect.shapeColor="BLUE";
  }*/



  drawSprites();
}