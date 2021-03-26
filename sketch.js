const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine;
var world;
var ground1;
var wreckingball;
var rope1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;  

  ground1 = new ground(400,390,800,10);
  rope1 = new rope(ball.body,{x:300,y:60})
  wreckingball = new ball(60,300,50);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display();
  wreckingball.display();

}