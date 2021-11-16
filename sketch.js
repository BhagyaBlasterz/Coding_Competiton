var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img,obstacle_img2,obstaclesGroup2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var gameOver; 
var score=0;
var attempts=3;

function preload(){

  // Loading Image for Background
  backImage=loadImage("jungle.jpg");

  //Loading Animation for Player (Monkey)
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  // Loading Image for Banana
  bananaImage = loadImage("banana.png");

  // Loading Image for Obstacle
  obstacle_img = loadImage("stone.png"); 

  // Loading Image for Obstacle2
  obstacle_img2=loadImage("obstacle.png");

  // Loading Image for Game Over
  gameOverImg = loadImage("gameOver.png");

}

function setup() {

  //Creating Canvas
  createCanvas(800,400);


  //Creating Background Sprite
  backgr=createSprite(0,0,800,400);
  //Adding Image To Background
  backgr.addImage(backImage);
  //Scaling Background
  backgr.scale=1.5;
  //Giving X position to Background
  backgr.x=backgr.width/2;
  //Giving Velocity to Background to make it Scrolling
  backgr.velocityX=-3.2;


  //Creating Player (Monkey) Sprite
  player = createSprite(100,310,20,50);
  //Adding Animation to Player (Monkey)
  player.addAnimation("running",player_running)
  //Scaling PLayer (Monkey)
  player.scale=0.19


  //Creating Ground Sprite
  ground = createSprite(400,350,800,10);
  //Giving X position to Ground
  ground.x=ground.width/2;
  //Making Ground Invisible so it will not able to See
  ground.visible=false;


  //Creating Food Group
  FoodGroup = new Group();

  //Creating Obstacle Group
  obstaclesGroup = new Group();

  //Craeting Obstacle Group 2
  obstaclesGroup2 = new Group();

  //Giving value 0 to Score
  score = 0;
}

function draw() { 
  background(0);
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 550,50);
  
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(FoodGroup.isTouching(player)){
      //Student 2-Challenge 2
      //destroy the food group
      //increase the scale of player
      //increase the score
      
    }
  
    if(obstaclesGroup2.isTouching(player)){
      //Student 4-Challenge 2
      //destroy the obstacleGroup2
      //descrease the scale of the player
      
    }
   
    //use keydown(space) to add jump effect- Student 1-challenge 2
    if (keyDown("space")) {
      player.velocityY = -13;
    }
    //Add the gravity- - Student 1-challenge 2
    player.velocityY = player.velocityY + 0.8

    //make the player collide with the ground- Student 1-challenge 2
    player.collide(ground)

    spawnFood();
    spawnObstacles();  
    spawnObstacles2();  
    if(obstaclesGroup.isTouching(player)){ 
      //student 3-challenge 2
        gameState = END;
    }
  }else if(gameState === END){

    backgr.velocityX = 0;
    player.visible = false;
    
    FoodGroup.destroyEach();
    obstaclesGroup.destroyEach();

    textSize(30);
    fill(255);
    text("Game Over!", 300,220);
  }
}

function spawnFood() {
  //Student 2
  if (frameCount % 130 === 0){
    var banana = createSprite(600,165,10,40);
    banana.velocityX = -3.2;
    banana.addImage(bananaImage)
    
     //assign scale and lifetime to the obstacle           
     banana.scale = 0.1;
     banana.lifetime = 300;
    
    //add each obstacle to the group
     FoodGroup.add(banana);
  }
  //write code here to  spawn the bananas with a space interval.
  //create a sprite for banana
  //add a banana image and scale it
  //banana.y = random(120,200);    

  //add velocityx to make the banana to move forward

  //add lifetime to the banana
  //move depth and random code inside framecount
  //add the foodgroup 

  //player.depth = banana.depth + 1;
    
  
}

function spawnObstacles() {
  //student 3-Challenge 1
  //write code here to spawn the obstacles
  if (frameCount % 150 === 0){
    var obstacle = createSprite(820,310,10,40);
    obstacle.velocityX = -3.2;
    obstacle.addImage(obstacle_img)
     //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.16;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
  //write code here to  spawn the obstacles with a space interval.
  //obstacle.velocityX=-(4 + 2*score/100); 
  //move the code of velocity indide framecount
  //create a sprite for obstacles
  //add a obstacles image and scale it
  //add lifetime to the obstacles
  //add the obstaclesGroup
  
}
function spawnObstacles2() {
  //student 4-Challenge 1
  //write code here to  spawn the obstacle2 with a space interval.
  //create a sprite for obstacle2
  //add a obstacle2 image and scale it
   //add velocityx to make the obstacle2 to move forward

  //add lifetime to the obstacle2
  //move random code inside framecount
  //add the obstacleGroup2

  //obstacle2.y = random(100,200);    
   
}
//      MADE BY 
//   (: BHAGYA :)