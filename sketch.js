var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	redbox1 = createSprite(320,630,10,70)

	redbox2 = createSprite(370,650,80,10)

	redbox3 = createSprite(420,630,10,70)

	red1 = Bodies.rectangle(320,630,10,70 ,{isStatic:true});
	World.add(world, red1)

	red2 = Bodies.rectangle(370,630,80,10,{isStatic:true});
	World.add(world, red2)

red3 = Bodies.rectangle(420,630,10,70, {isStatic:true});
World.add(world, red3)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	

  }
else if(keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x  -20;
	translation ={x:-20,y:0}
	Matter.Body.translate(packageBody,translation)


}
else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x +20;
	translation = {x:20,y:0}
	Matter.Body.translate(packageBody,translation)

}

}



