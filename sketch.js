const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);


ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingshot = new  SlingShot(this.ball,{x:200,y:200});



   
}

function draw() {
  background(255);
  Engine.update(engine); 
  
  ground.display();

  stand1.display();
  stand2.display();

fill("black")
 block1.display();
 block2.display();
 block3.display();
 block4.display(); 
 block5.display();
 block6.display();
 block7.display();
 block8.display();
fill("orange")
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 fill("red")
 block15.display();
 block16.display();
 
fill("green")
 blocks1.display();
 blocks2.display();
 blocks3.display();
 blocks4.display(); 
 blocks5.display();
 fill("violet")
 blocks6.display();
 blocks7.display();
 blocks8.display();
 fill("cyan")
 blocks9.display();

ellipse(ball.position.x,ball.position.y,20);
slingshot.display();
}

function mouseDragged(){
  Matter.body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}