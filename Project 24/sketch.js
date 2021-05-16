var ball1;
var ground1;
var wall1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,650);

	ground1 = new Ground(width/2,690,width,20);

	wall1 = new Wall(750,685,200,20);
	wall2 = new Wall(650,630,20,100);
	wall3 = new Wall(850,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  ball1.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.5,y:-2.5});

	}
}