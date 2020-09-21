
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,bob1,bob2,bob3,bob4,chain,chain2,chain3,chain4;

var bob1,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,100,width,10);

	bob1=new Bob(360,300,30)

	bob2=new Bob(400,300,30)
	bob3=new Bob(440,300,30)
	bob4=new Bob(480,300,30)
	bob5=new Bob(520,300,30);
	chain=new Chain(bob1.body,roof.body,-40,0);
	chain1=new Chain(bob2.body,roof.body,2,0);
	chain2=new Chain(bob3.body,roof.body,45,0);
	chain3=new Chain(bob4.body,roof.body,90,0);
	chain4=new Chain(bob5.body,roof.body,130,0);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  drawSprites();

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();

  
  roof.display();
  bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof.display();
 
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40})
	}
}




