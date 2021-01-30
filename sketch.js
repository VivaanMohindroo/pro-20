var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="80,80,80"
  car.velocityX=speed;

  if(car.x-wall.x<=car.width/2+wall.width/2 && 
    wall.x-car.x<=wall.width/2+car.width/2 ){
      car.velocityX=car.velocityX*(-1);
      wall.velocityX=wall.velocityX*(-1);
    }  
    if(car.y-wall.y<=car.height/2+wall.height/2 && 
      wall.y-car.y<=wall.height/2+car.height/2 ){
        car.velocityY=car.velocityY*(-1);
        wall.velocityY=wall.velocityY*(-1);
      }  
      deformation=05*weight*speed/22500
  drawSprites();
}