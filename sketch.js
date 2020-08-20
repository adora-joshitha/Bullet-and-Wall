var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223, 321);
  weight = random(30, 52);

  thickness=random(22, 83);

  bullet = createSprite(200, 200, 40, 20);
  bullet.velocityX = speed;

  wall= createSprite(1200, 200, thickness, height/2 )
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet, wall)){
      bullet.velocityX = 0;

      var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

      if(damage > 10){
        wall.shapeColor = "green";
      }
      if(damage < 10){
        wall.shapeColor = "red";
      }
    }
  
  drawSprites();
}

function hasCollided(bulleta, walla){
  bulletaRightEdge=bulleta.x + bulleta.width;
  wallaLeftEgde=walla.x;

  if(bulletaRightEdge>=wallaLeftEdge){
    return true;
  }
  return false;
}