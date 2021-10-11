function spawnCakes(){
    if(frameCount % 120 === 0){
    cakes = createSprite(1400,random(100,300),10,10);
    cakes.addImage("cake.png",cakesImg)
cakes.velocityX = -3
 cakes.scale = 0.2








    }
}