
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(315, 200, 250, 40);
	bobObject1 = new Bob(250, 400, 30);
	bobObject2 = new Bob(280, 400, 30);
	bobObject3 = new Bob(310, 400, 30);
	bobObject4 = new Bob(340, 400, 30);
	bobObject5 = new Bob(370, 400, 30);

	rope1 = new Rope(bobObject1.body, roof.body);
	rope2 = new Rope(bobObject2.body, roof.body);
	rope3 = new Rope(bobObject3.body, roof.body);
	rope4 = new Rope(bobObject4.body, roof.body);
	rope5 = new Rope(bobObject5.body, roof.body);

	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
 
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



