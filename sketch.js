const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy,boyImg,boyShot;

function preload()
{
	boyImg = loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,500);
	boy.addImage("boyImg",boyImg);
	boy.scale = 0.1;
	tree = new Tree(1050,580);
	
	

	mango1 = new Mango(900,250,18);
	mango2 = new Mango(800,200,18);
	mango3 = new Mango(800,280,18);
	mango4 = new Mango(1000,250,18);
	mango5 = new Mango(670,300,18);
	mango6 = new Mango(950,200,18);
	mango7 = new Mango(1100,300,18);

	stone = new Stone(150,550,15);
	boyShot = new Shot(stone.body,{x:150,y:452});
	ground=new Re(675,600,1350,20)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);
  
  tet();
  background("lightgray");
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
ground.display();
  stone.display();
  boyShot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  drawSprites();
 
}
function mouseDragged(){
   stone.body.position.x=mouseX
   stone.body.position.y=mouseY
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}
function tet(){
	if (mango1.isStatic===false||mango2.isStatic===false||mango3.isStatic===false||mango4.isStatic===false||mango5.isStatic===false||mango6.isStatic===false||mango7.isStatic===false) {
		text("press Space for a second chance",400,100);
		return true
	}else {return false}
}