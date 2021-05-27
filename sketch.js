var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle1 ,particle2,particle3,particle4,particle5,particle6,particle7,particle8;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,230));
  }
  
  //create 4th row of plinko object
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,295));
  }
  //create particle objects
  
    particle1=new particle (200,250,20);
    particle2=new particle (300,30,20);
    particle3=new particle (250,20,20);
    particle4=new particle (280,50,20);
    particle5=new particle (150,45,20);
    particle6=new particle (450,70,20);
    particle7=new particle (350,10,20);
    particle8=new particle (400,60,20);

  }
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
particle1.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
particle6.display();
particle7.display();
particle8.display();

}