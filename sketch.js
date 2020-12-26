var wall, car;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(50, 200, 50, 50);
  wall.shapeColor(80,80,80);
  car = createSprite(1500,200,60,height/2);
  car.shapeColor = "white";
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0,0,0);  
  
  if(hasCollided(car,wall))
  {
    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/25509;

    if(deformatio>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformatio<180 &&  deformation>100)
    {
      car.shapeColor=color(230,230,0)
    }

    if(deformatio<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}


function hasCollided (bullet,wall){
  carRightEdge=car.x + car.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  } else{
    return false
  }
}