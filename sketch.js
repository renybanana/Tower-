const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    
   
    yellow = new Yellow(200,500,60,60)
    box1 = new box(700,320,40,60);
    chain= new Chain(yellow.body,{x:240,y:420}); 
    platform1 = new Platform(700,350,300,10)
    box2 = new box(750,320,40,60);
    box3 = new box(800,320,40,60);
    box4 = new box(650,320,40,60);
    box5 = new box(600,320,40,60);
    box6 = new box(625,260,40,60);
    box7 = new box(675,260,40,60);
    box8 = new box(725,260,40,60);
    box9 = new box(775,260,40,60);
    box10 = new box(650,200,40,60);
    box11 = new box(700,200,40,60);
    box12 = new box(750,200,40,60);
    box13 = new box(675,140,40,60);
    box14 = new box(725,140,40,60);
    box15 = new box(700,80,40,60);
}

function draw(){
    background("lavender");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    yellow.display();
    chain.display();
    platform1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(yellow.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
