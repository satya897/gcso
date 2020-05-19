
var car,car2,car1,wall,wall1,wall2;
var speed,weight;


function setup() {

  createSprite(750,0,1600,1600);
  createCanvas(1600,1600);
  rectMode(CENTER);

  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50,60,20,20);
  car1.shapeColor=color(250,250,250);

  wall1=createSprite(750,70,60,100);
  wall1.shapeColor=color(80,80,80);

  car1.velocityX = speed;

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,290,20,20);
  car.shapeColor=color(250,250,250);

  wall=createSprite(750,300,60,100);
  wall.shapeColor=color(80,80,80);

  car.velocityX = speed;

  speed=random(55,90);
  weight=random(400,1500);

  car2=createSprite(50,550,20,20);
  car2.shapeColor=color(250,250,250);

  wall2=createSprite(750,560,60,100);
  wall2.shapeColor=color(80,80,80);

  car2.velocityX = speed;
}

  function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x < (wall.width + car.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
  car.shapeColor=color(255,0,0);
  car.velocityX=0;
  }

  if(deformation<180 && deformation>100)
  {
  car.shapeColor=color(230,230,0);
  car.velocityX=0;
  }

  if(deformation<100)
  {
  car.shapeColor=color(0,255,0);
  car.velocityX=0;
  }
  }

  if(wall1.x - car1.x < (wall1.width + car1.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
  car1.shapeColor=color(255,0,0);
  car1.velocityX=0;
  }

  if(deformation<180 && deformation>100)
  {
  car1.shapeColor=color(230,230,0);
  car1.velocityX=0;
  }

  if(deformation<100)
  {
  car1.shapeColor=color(0,255,0);
  car1.velocityX=0;
  }
  }

  if(wall2.x - car2.x < (wall2.width + car2.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
  car2.shapeColor=color(255,0,0);
  car2.velocityX=0;
  }

  if(deformation<180 && deformation>100)
  {
  car2.shapeColor=color(230,230,0);
  car2.velocityX=0;
  }

  if(deformation<100)
  {
  car2.shapeColor=color(0,255,0);
  car2.velocityX=0;
}
  }

  drawSprites();
}