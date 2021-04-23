var bulletImage;
var bullet = [];
var shooterImage, shooter;
var edges;
var balloons;
var bullet_counter = 0;
var zombieImg,zombie,zombieGroup;
var Score = 0
var life = 10
var play = 2
var serve = 1
var gameState;

function preload() {
 zombieImg = loadImage("Zombie.png")
  bulletImage = loadImage("bullet.png");
  shooterImage = loadImage("soldier.png");

}

function setup() {
  createCanvas(1200, 700);
 
  createshooter(); 
  createbullet();
 zombieGroup = new Group();

  
}

function draw() {
  background("red");

textSize(30)
fill(231,123,231,121)
text("Make your SCORE 50 to win this game",400,650)




  textSize(25)
  fill("green")
  text("Score = " + Score,550,50)
  text("Life = " + life,100,50)
SpawnZombies();

if(bullet[bullet_counter].isTouching(zombieGroup)){
  zombieGroup.destroyEach();
  Score++
  bullet[bullet_counter].destroy()
}

  shooter.y = mouseY;
  bullet[0].y = shooter.y;
  
  if (keyWentDown("space")) {
    createbulletinMotion();
  }

  if(shooter.isTouching(zombieGroup)){
    life -= 1;
    zombieGroup.destroyEach()
  }

  

  if(life === 0){
    textSize(30)
    fill("red")
    text("You Lose",600,350)
    
  }

  if(Score === 50)
  {
    textSize(30)
    fill("yellow")
    text("You Won",600,350)
    zombieGroup.setVelocityXEach(0)
  }
  
  var currentSprites = getSprites();
  //drawSprites 
  for(s = 0;s < currentSprites.length;s++){     
    drawSprite(currentSprites[s]);
    
  
  }
  
  if (bullet_counter < 0) {  
      zombie.collide(bullet[bullet_counter],explosion);
  }  

}
 



function createshooter() {
  shooter = createSprite(50, 200, 100, 20);
  shooter.addAnimation("shooter", shooterImage);
  shooter.scale = 100 ;

}

function createbullet() {
  bullet[bullet_counter] = createSprite(40, shooter.y, 10, 10);
  bullet[bullet_counter].addAnimation("bullet", bulletImage);
  bullet[bullet_counter].scale = 0.1;
  
}

function createbulletinMotion() {
  bullet_counter++;
  bullet[bullet_counter] = createSprite(40, shooter.y, 10, 10);
  bullet[bullet_counter].addAnimation("bullet", bulletImage);
  bullet[bullet_counter].scale = 0.1;
  bullet[bullet_counter].velocityX = 50;
  
}

function createshooter() {
  shooter = createSprite(50, 200, 20, 20);
  shooter.addAnimation("shooter", shooterImage);
  shooter.scale = 0.5 ;

}



/*function explosion(spriteA,spriteB){
    /*spriteA.remove();
    spriteB.remove();  //score=score+1;

}*/
function SpawnZombies(){
  if(frameCount % 80 === 0){
    zombie = createSprite(1200,700)
    zombie.addImage(zombieImg)
    zombie.scale = 0.4
    zombie.velocityX = -5
    zombie.y = Math.round(random(1,800))
    zombieGroup.add(zombie)
  }
}