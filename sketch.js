const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var start = 0;
var reset = 1;
var gamestate = reset;

var slingShot;
var polygon;

var al1b1,al1b2,al1b3,al1b4,al1b5,al1b6,al1b7;
var al2b1,al2b2,al2b3,al2b4,al2b5;
var al3b1,al3b2,al3b3;
var al4b1;

var bl1b1,bl1b2,bl1b3,bl1b4,bl1b5,bl1b6,bl1b7;
var bl2b1,bl2b2,bl2b3,bl2b4,bl2b5;
var bl3b1,bl3b2,bl3b3;
var bl4b1;

var cl1b1,cl1b2,cl1b3,cl1b4,cl1b5,cl1b6,cl1b7;
var cl2b1,cl2b2,cl2b3,cl2b4,cl2b5;
var cl3b1,cl3b2,cl3b3;
var cl4b1;

var ground1, ground2, ground3;

var score = 0;

function setup(){
 
  var canvas = createCanvas(1400,900);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-20,width,40);

  ground1 = new Ground(890,285,250,20);

  al1b1 = new Box1(800,245,30,40);
  al1b2 = new Box1(830,245,30,40);
  al1b3 = new Box1(860,245,30,40);
  al1b4 = new Box1(890,245,30,40);
  al1b5 = new Box1(920,245,30,40);
  al1b6 = new Box1(950,245,30,40);
  al1b7 = new Box1(980,245,30,40);

  al2b1 = new Box2(830,205,30,40);
  al2b2 = new Box2(860,205,30,40);
  al2b3 = new Box2(890,205,30,40);
  al2b4 = new Box2(920,205,30,40);
  al2b5 = new Box2(950,205,30,40);
  
  al3b1 = new Box3(860,165,30,40);
  al3b2 = new Box3(890,165,30,40);
  al3b3 = new Box3(920,165,30,40);

  al4b1 = new Box4(890,125,30,40);

  ground2 = new Ground(890,765,250,20);

  bl1b1 = new Box1(800,745,30,40);
  bl1b2 = new Box1(830,745,30,40);
  bl1b3 = new Box1(860,745,30,40);
  bl1b4 = new Box1(890,745,30,40);
  bl1b5 = new Box1(920,745,30,40);
  bl1b6 = new Box1(950,745,30,40);
  bl1b7 = new Box1(980,745,30,40);

  bl2b1 = new Box2(830,705,30,40);
  bl2b2 = new Box2(860,705,30,40);
  bl2b3 = new Box2(890,705,30,40);
  bl2b4 = new Box2(920,705,30,40);
  bl2b5 = new Box2(950,705,30,40);
      
  bl3b1 = new Box3(860,665,30,40);
  bl3b2 = new Box3(890,665,30,40);
  bl3b3 = new Box3(920,665,30,40);

  bl4b1 = new Box4(890,625,30,40);

  ground3 = new Ground(1190,565,250,20);

  cl1b1 = new Box1(1100,545,30,40);
  cl1b2 = new Box1(1130,545,30,40);
  cl1b3 = new Box1(1160,545,30,40);
  cl1b4 = new Box1(1190,545,30,40);
  cl1b5 = new Box1(1220,545,30,40);
  cl1b6 = new Box1(1250,545,30,40);
  cl1b7 = new Box1(1280,545,30,40);

  cl2b1 = new Box2(1130,505,30,40);
  cl2b2 = new Box2(1160,505,30,40);
  cl2b3 = new Box2(1190,505,30,40);
  cl2b4 = new Box2(1220,505,30,40);
  cl2b5 = new Box2(1250,505,30,40);
      
  cl3b1 = new Box3(1160,465,30,40);
  cl3b2 = new Box3(1190,465,30,40);
  cl3b3 = new Box3(1220,465,30,40);

  cl4b1 = new Box4(1190,425,30,40);

  polygon = new Polygon(200,200,50);
  
  slingshot = new SlingShot(polygon.body,{x:200, y:150});
}

function draw(){
    
  background(200);
  Engine.update(engine);

  ground.display();
  polygon.display();

  ground1.display();

  al1b1.display();
  al1b2.display();
  al1b3.display();
  al1b4.display();
  al1b5.display();
  al1b6.display();
  al1b7.display();

  al2b1.display();
  al2b2.display();
  al2b3.display();
  al2b4.display();
  al2b5.display();

  al3b1.display();
  al3b2.display();
  al3b3.display();
  
  al4b1.display();

  ground2.display();

  bl1b1.display();
  bl1b2.display();
  bl1b3.display();
  bl1b4.display();
  bl1b5.display();
  bl1b6.display();
  bl1b7.display();

  bl2b1.display();
  bl2b2.display();
  bl2b3.display();
  bl2b4.display();
  bl2b5.display();

  bl3b1.display();
  bl3b2.display();
  bl3b3.display();

  bl4b1.display();

  ground3.display();

  cl1b1.display();
  cl1b2.display();
  cl1b3.display();
  cl1b4.display();
  cl1b5.display();
  cl1b6.display();
  cl1b7.display();

  cl2b1.display();
  cl2b2.display();
  cl2b3.display();
  cl2b4.display();
  cl2b5.display();

  cl3b1.display();
  cl3b2.display();
  cl3b3.display();

  cl4b1.display();

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.setPosition(polygon.body,{x:200, y:150});
    slingshot.attach(polygon.body);
  }
}