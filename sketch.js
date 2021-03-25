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

	paper = new Paper(50,50);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,560);
   

	Engine.run(engine);
}


function draw() {
  background(230);

  groundObject.display();
  paper.display();
  dustbinObj.display();

}
function keyPressed(){
	if(keyCode = 40){
	   Matter.Body.applyForce(paper,20,5);
	}   
}

