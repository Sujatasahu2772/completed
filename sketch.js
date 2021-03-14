
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,675,800,50);
	box1=new Dustbin(600,650,200,20);
	box2=new Dustbin(500,610,20,100);
	box3=new Dustbin(700,610,20,100);
	ball=new Paper(200,200,20);
	Engine.run(engine);
  
}


function draw() {
	background(0);
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-85});
		
	}
}


