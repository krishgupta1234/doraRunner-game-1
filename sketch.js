var backgroundImage,bg;
var doraRun1,doraRun;
var ground,invisibleGround;
var obstacle,obstaclesGroup;
var PLAY = 1;
var END=0;
var gameState = PLAY
var cakes


function preload(){
bg=loadImage("dora_backgroundimage.png")
doraRun1 = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png")
obstacleImage = loadImage("obstacle.png")
cakesImg = loadImage("cakebg.png")


}

function setup(){
createCanvas(1300,550)
backgroundImage = createSprite(650,300,10,10);
backgroundImage.addImage(bg)
backgroundImage.scale = 2
backgroundImage.velocityX = -3
 
doraRun = createSprite(70,420,10,10)
doraRun.addAnimation("doraRunning",doraRun1)
 
/*ground = createSprite(100,580,1000,5)
ground.velocityX = -4;
ground.x = ground.width/2
console.log(ground.x)
 ground.visible = false;*/
invisibleGround = createSprite(100,550,1000,5);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();


}

function draw(){
background("lightblue")

if(gameState === PLAY){



if(backgroundImage.x<0){
    backgroundImage.x = backgroundImage.width/2
  }
  //background.velocityX = 0
  //doraRun.velocityY = 0
  if(keyDown("space")&& doraRun.y>= 159) {
   doraRun.velocityY = -10;
}
doraRun.velocityY = doraRun.velocityY+0.5;
doraRun.collide(invisibleGround)

if(obstacleGroup.isTouching(doraRun)){
    //ground.velocityX = 0;
    //doraRun.velocityY = 0;
   // obstacleGroup.setVelocityXEach(0);
    //obstacleGroup.setLifetimeEach(-1);
  gameState = END
  
}






spawnobstacles()
spawnCakes()
}
else if(gameState === END){
doraRun.velocityX = 0


}




drawSprites()
}
     

























