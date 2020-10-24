var bullet,wall;
var speed,weight,thickness;

function setup() {

  createCanvas(1600,400);

speed=random(55,90);

thickness=random(22,83)

weidth=random(400,1500);

  bullet=createSprite(50,200,50,10);
 // bullet.fill("red")
bullet.velocityX=speed;

  wall=createSprite(1500,200,thickness,height/2)
}

function draw() {
  background("lightblue"); 
  var deformation;
if (wall.x-bullet.x<(bullet.width+wall.width)/2) 
{
 bullet.velocityX=0
  Deformation=0.5 * weidth * speed * speed/22509
if (deformation>180) {
  wall.shapeColor=color("230,0,0")
}
   if (deformation<180 && deformation>100) {
     wall.shapeColor=color("230,230,0");
   }
   if (deformation<100) {
     wall.shapeColor=color("0,255,0")
   }
}
 // background("lightblue");  
  drawSprites();
}