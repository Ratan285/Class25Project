const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper = new Paper(50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  //paper.y = paper.y+1;
  if(keyDown(DOWN_ARROW)){
	  paper.velocityX=+10;
	  paper.velocityY = +5;
  }
  groundObject.display();
  dustbinObj.display();
  paper.display();

}

