const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper;	
var world, paper1;
var dustbinImage, dustbin;

function preload(){
dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
   
	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(1350,535,20,20);
	dustbin.addImage(dustbinImage)
	dustbin.shapeColor = "green";
	dustbin.scale = 0.79

	paper = new Paper(50,50);
	groundObject=new ground(width/2,670,width,20);
	box1 = new Box(1265, 570,20,170)
	box2 = new Box(1435,570,20,170)
	box3 = new Box(1350,650,190,20)
	
	console.log(dustbinObj);
   
	Engine.run(engine);
}


function draw() {
  background(230);

  groundObject.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode = 40){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:220,y:-200});
	}  
}

