
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,ballSprite,ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);




	engine = Engine.create();
	world = engine.world;

  ball = new Paper(65,630,70);
   ground = new Ground(360,710,800,100);

   ball.debug = true;

   

   bin1 = new Bin(428,589,10,100);
   bin2 = new Bin(533,688,200,10);
   bin3 = new Bin(638,589,10,100);


   // 503,648
   ball.debug = true;
   ground.debug = true;

  


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  var x = mouseX;
  var y = mouseY;

  fill("white");

  text(x + "," + y,380,40);

  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();
  drawSprites();
 
}



function keyPressed() {

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:527,y:627});
  }
}


