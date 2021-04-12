var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var ground2
var ground3
var ground4
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
		  
	ground2Sprite=createSprite(400,600,100,20);
	ground2Sprite.shapeColor=color("red")

	ground3Sprite=createSprite(360,550,20,100);
	ground3Sprite.shapeColor=color("red")

	ground4Sprite=createSprite(450,555,20,110);
	ground4Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	
     	
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  if (keyCode === DOWN_ARROW) {
	packageBody.position.y  =  packageBody.position.y  +5; 
    
  }
  if(packageBody.position.y>=560) {
	  packageBody.position.y= 560
}

}










