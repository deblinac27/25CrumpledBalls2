
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var trashcan;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 670, 1600, 20);
	trashcan = new Trashcan(1400, 660);
	paper = new Paper(200, 45, 70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(227, 227, 227);
  
  ground.display();
  trashcan.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});
	}
}


