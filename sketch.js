const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, base1, base2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;
var polygon;
var sling;

function setup(){

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  blockGroup1 = new Array();

  ground = new Ground(400, 395, 800, 10);

  base1 = new Ground(300, 295, 300, 10);
  base2 = new Ground(650, 195, 250, 10);

  block1 = new Block(210, 275, "blue");
  block2 = new Block(240, 275, "blue");
  block3 = new Block(270, 275, "blue");
  block4 = new Block(300, 275, "blue");
  block5 = new Block(330, 275, "blue");
  block6 = new Block(360, 275, "blue");
  block7 = new Block(390, 275, "blue");

  block8 = new Block(240, 245, "green");
  block9 = new Block(270, 245, "green");
  block10 = new Block(300, 245, "green");
  block11 = new Block(330, 245, "green");
  block12 = new Block(360, 245, "green");

  block13 = new Block(270, 215, "lightblue");
  block14 = new Block(300, 215, "lightblue");
  block15 = new Block(330, 215, "lightblue");

  block16 = new Block(300, 185, "pink");

  block17 = new Block(590, 175, "red");
  block18 = new Block(620, 175, "red");
  block19 = new Block(650, 175, "red");
  block20 = new Block(680, 175, "red");
  block21 = new Block(710, 175, "red");

  block22 = new Block(620, 145, "indigo");
  block23 = new Block(650, 145, "indigo");
  block24 = new Block(680, 145, "indigo");

  block25 = new Block(650, 115, "orange");

  polygon = new Polygon(50, 200);

  sling = new Slingshot(polygon.body, {x: 100, y: 200});

  Engine.run(engine);

}

function draw(){

  background(56, 44, 44);

  textSize(20);
  fill("white");
  text("Drag the Hexagonal Stone to Attack.", 50, 50);

  ground.display();

  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  polygon.display();

  sling.display();

}

function mouseDragged(){
  polygon.body.position.x = mouseX;
  polygon.body.position.y = mouseY;
}

function mouseReleased(){
  sling.fly();
}