var hujo, hujoimage, hujoback , hujoaxeanim;
var bg , bgimg;
var bg2 , bgimg2;
var axe,axeimg,bow, bowimg ,arrowimg, arrow;
var enemy1, enemyimg;
var gameState=1;


function preload(){
  hujoimage=loadAnimation("Hujo.png","Hujo2.png");
  hujoaxeanim = loadAnimation("Hujoaxe1.png", "Hujoaxe2.png", "Hujoaxe3.png");
  bgimg=loadImage("map 1.jpg");
  axeimg=loadImage("stone axe.png");
  bowimg=loadImage("bow.png");
  arrowimg=loadImage("arrow.png");
  enemyimg=loadImage("monster.png");
  bg2img=loadImage("map2.jpg");
  hujoback=loadAnimation("Hujoback.png","Hujoback2.png");
  
}
function setup() {
  createCanvas(1000,800);
  bg = createSprite(500, 500, 1000, 1000);
  bg.addImage(bgimg);
  
  bg2 = createSprite(500,500,1000,1000);
  bg2.addImage(bg2img);
  bg2.visible=false;

  hujo = createSprite(100,400,10,30);
  hujo.addAnimation("anim2",hujoimage);
  hujo.addAnimation("anim3",hujoback);
  hujo.addAnimation("anim",hujoaxeanim);
  hujo.scale=0.8;

  axe= createSprite(670,250,10,10);
  axe.addImage(axeimg);
  axe.scale=0.7;

  enemy1=createSprite(800,500,50,100);
  enemy1.addImage(enemyimg);
  enemy1.scale=2;


}

function draw() {
  background(0);
  createEdgeSprites();

  

  if(gameState===1){

    
  moveHujo();
  axehit();
      if(axe.isTouching(hujo)){
        axe.x=hujo.x-10;
        axe.y=hujo.y;
      }   

      if(hujo.isTouching(enemy1)){
        enemy1.destroy();
      }
        
      enemy1.y=hujo.y;

       if(hujo.x===945){
      gameState=2;
      console.log("yo");
      hujopos();
      
      }


    
    }

        if(gameState===2){
          
          console.log(bg2.depth);
          bg2.visible = true;
          moveHujo();
          axefollow();
          axehit();
        }

  drawSprites();
}



function moveHujo(){
  if(keyWentDown("W")){
    hujo.velocityY=-5;
    hujo.changeAnimation("anim3",hujoback);
  }else if(keyWentUp("W")){
    hujo.velocityY=0;
    hujo.changeAnimation("anim2",hujoimage);
  }

  if(keyWentDown("S")){
    hujo.velocityY=5;
  }else if(keyWentUp("S")){
    hujo.velocityY=0;
  }

  if(keyWentDown("A")){
    hujo.velocityX=-5;
  }else if(keyWentUp("A")){
    hujo.velocityX=0;
  }

  if(keyWentDown("d")){
    hujo.velocityX=5;
  }else if(keyWentUp("d")){
    hujo.velocityX=0;
  }
}

function hujopos(){
  hujo.x=100;
  hujo.y=400;
}

function axefollow(){
  axe.x=hujo.x-10;
  axe.y=hujo.y;
}

function axehit(){
  if(keyWentDown("h")){
    hujo.changeAnimation("anim",hujoaxeanim);
  }
}