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
  createCanvas(windowWidth,windowHeight);


  //Creating Background Sprite
  backgr=createSprite(height/2,height/6,800,400);
  //Adding Image To Background
  backgr.addImage(backImage);
  //Scaling Background
  backgr.scale=1.5;
  //Giving X position to Background
  backgr.x=backgr.width/2;
  //Giving Velocity to Background to make it Scrolling
  backgr.velocityX=-3.2;


  //Creating Player (Monkey) Sprite
  player = createSprite(100,350,20,50);
  //Adding Animation to Player (Monkey)
  player.addAnimation("running",player_running)
  //Scaling PLayer (Monkey)
  player.scale=0.15


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

  //Giving Background color
  background(0);
  //Drawing Sprites
  drawSprites();

  //Giving stroke, size, font & fill to Score
  stroke("white");
  strokeWeight(4)
  textSize(20);
  textFont("Comic Sans MS");
  fill("black");
  text("Score : "+ score, 550,50);
  
  //if gameState is Play then what will happen
  if(gameState===PLAY){
      
    
    //if background is more than 130 then background should loop
    if(backgr.x<130){
       backgr.x=backgr.width/2;
    }
    //if FoodGroup is touching player then destoy each ,increase scale of player & incraese the score
    if(FoodGroup.isTouching(player)){
      //destroy the food group
      FoodGroup.destroyEach();
      //increase the scale of player
      player.scale=player.scale+0.02
      //increase the score
      score=score+1 
    }
    // if obstacle 2 is touching player then destroy each ,decrease the scale of player 
    if(obstaclesGroup2.isTouching(player)){
      //destroy the obstacleGroup2
      obstaclesGroup2.destroyEach();
      //decrease the scale of the player
      player.scale=player.scale-0.02
    }
    //if keydown(space) then give jump effect
    if (keyDown("space")) {
      player.velocityY = -13;
    }
    //Adding the gravity
    player.velocityY = player.velocityY + 0.8
    //Make the player collide with the ground
    player.collide(ground)
    //Calling function spawn food
    spawnFood();
    //Calling function spawn obstacle
    spawnObstacles();  
    //Calling function spawn obstacle 2
    spawnObstacles2();
    //if obstacle group is touching player then gamestate will be End
    if(obstaclesGroup.isTouching(player)){ 
        gameState = END;
  }

    //if gamestate is End then what
    }else if(gameState === END){
    
    //Giving velocity 0 to background
    backgr.velocityX = 0;
    //Player visible to false
    player.visible = false;
    
    //Food group is to destroy Each
    FoodGroup.destroyEach();
    //Obstacle group is to destroy Each
    obstaclesGroup.destroyEach();
    //Obstacle group 2 is to destroy Each
    obstaclesGroup2.destroyEach();
    
    //Giving stroke, size, font & fill to Game Over
    stroke("white");
    strokeWeight(4)
    textSize(42);
    textFont("Comic Sans MS");
    fill("black");
    text("Game Over!", 300,220);
  }
  
   
}
  

function spawnFood() {

  //Creating space intervals between spawning of banana
  if (frameCount % 280 === 0){
    var banana = createSprite(windowWidth+20,165,10,40);
    banana.velocityX = -(4 + 2*score/100);
    banana.addImage(bananaImage)
    player.depth = banana.depth + 1;     
    banana.scale = 0.1;
    banana.lifetime = 300;
    banana.y = random(100,200);
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 210 === 0){
    var obstacle = createSprite(windowWidth+20,319,10,40);
    obstacle.velocityX=-(4 + 2*score/100);
    obstacle.addImage(obstacle_img)           
    obstacle.scale = 0.13;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
  
}
function spawnObstacles2() {
  if (frameCount % 125 === 0){
    var obstacle2 = createSprite(windowWidth+20,350,10,40);
    obstacle2.velocityX=-(4 + 2*score/100);
    obstacle2.addImage(obstacle_img2)         
    obstacle2.scale = 0.021;
    obstacle2.lifetime = 300;
    obstacle2.y = random(100,200);
    obstaclesGroup2.add(obstacle2);
  }
}
//      MADE BY 
//   (: BHAGYA :)