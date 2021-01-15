var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function preload(){
  backgroundImg = loadImage("1295.jpg");
  scoreboard = loadImage("567890.png");
  gameoverImg = loadImage("123.png");
  img = loadImage("34.png");
}

function setup() {
  createCanvas(489, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-7,width,50);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-4, 10, divisionHeight));
   }
   for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko2(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko3(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko4(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko5(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko6(j ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko7(j ,375))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko8(j ,425))
  }
  var options ={
    isStatic : true
  }
  scoreboard2 = Bodies.rectangle(250,65,90,90,options);
  World.add(world,scoreboard2);

  var options ={
    isStatic : true
  }
  gameover = Bodies.rectangle(270,330,90,90,options);
  World.add(world,gameover);

  var options ={
    isStatic : true
  }
  img2 = Bodies.rectangle(270,617,90,90,options);
  World.add(world,img2);

}
 
function draw() {
  background(backgroundImg);
  //text(mouseX + "," + mouseY, 20, 50);
  Engine.update(engine);
  push();
    strokeWeight(8);
    stroke("black");
    fill("bkack");
  ground.display();
  pop();
  
  push();
  imageMode(CENTER);
  image(img,img2.position.x,img2.position.y,600,50);
  pop();
  textSize(35)
  text(" 500 ", 5, 630);
  text(" 500 ", 80, 630);
  text(" 500 ", 160, 630);
  text(" 500 ", 240, 630);
  text(" 100 ", 320, 630);
  text(" 100 ", 400, 630);
  text(" 100 ", 480, 630);
  text(" 200 ", 560, 630);
  text(" 200 ", 640, 630);
  text(" 200 ", 720, 630);

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>630)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
    push();
    strokeWeight(8);
    stroke("black");
    fill("bkack");
     divisions[k].display();
     pop();
   }
 
   push();
   imageMode(CENTER);
   image(scoreboard,scoreboard2.position.x,scoreboard2.position.y,240,130);
   pop();

    textSize(20 );
    fill("white");
    text("S C O R E  :  "+score,165,85);

    if ( gameState =="end") {
    
      push();
      imageMode(CENTER);
      image(gameoverImg,gameover.position.x,gameover.position.y,300,300);
      pop();
    }
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}