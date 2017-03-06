
//module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var boxes = [];

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = Engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 3*height/4, width, 10, options);
  World.add(engine.world, ground);
  //boxA = new Box(200, 100, 50, 50);
  }

function mouseDragged(){
  boxes.push(new Box(mouseX,mouseY,random(10,30),random(10,30)));
}

function draw() {
  background(51);
  text("click and drag mouse",140,50,325,125);
  Engine.update(engine);
  //console.log(ground);
  fill(155);
  rect(0,300,400,300);
  for (var i=0; i < boxes.length;i++){
    boxes[i].show();
  }
  //boxA.show();
  //rect(boxA.position.x,boxA.position.y,80,250);
}
