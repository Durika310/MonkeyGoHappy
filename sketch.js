var backImage,backgr;
var monkey,monkeyrunning;
var ground, invisibleground , groundimg;
var banana,bananaimg;
var rocks,rocksimg;
var score;

function preload(){
  
  backImage=loadImage("jungle2.jpg");

monkeyrunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_10.png");
  
  bananas = loadImage("bananas.png");
  rocksimg = loadImage("stone.png");

  collide = loadImage("Monkey_05.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkeyrunning);
  monkey.scale = 0.125;
  

  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  score = 0;
  
  
 
}

function draw() {
  
  background(255);
     
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
score = score + Math.round(getFrameRate()/60);
  
  monkey.collide(invisibleGround);
  
  if(gamestate === END)
{
  bg.velocityX = 0;
    
  stonegrp.setVelocityXEach(0);
  
  bananasgrp.setVelocityXEach(0);
  
  monkey.velocity = 0;
}
  drawSprites();
  
 
}
