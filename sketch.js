var b,b_img;
var monkey,monkey_img,stone,stone_img,banana,banana_img;
var ground,rand,score;
var stonegroup,bananagroup;
var PLAY,END,gamestate;


function preload(){
  b_img=loadImage("jungle.jpg");
  monkey_img=
 loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  stone_img=loadImage("stone.png");
  banana_img=loadImage("banana.png");
}
function setup() {
  createCanvas(400, 400);
  b = createSprite(200,200,400,10);
  b.addImage("jungle",b_img);
  b.velocityX=-5;
  b.x=b.width/2;

  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey",monkey_img);
  monkey.scale=0.25;
    
 stonegroup=new Group ();
  bananagroup=new Group ();
 
  
  ground=createSprite(400,380,800,10);
  ground.visible=false;
 // ground.velocityX=-4;
  
  PLAY=1;
  END=0;
  gamestate=PLAY;
  
  
 // rand=random(10,200);
  
  score=0;
  
  
 //console.log(monkey.y);

}

function draw() {
  background(220);
  
  if(gamestate===PLAY){
  
  if(bananagroup.isTouching(monkey)){
    score=score+2;
    bananagroup.destroyEach();
  }
  
 
  if (b.x < 0){
      b.x = b.width/2;
    }
  
 /* switch(score){
      
    case 10:monkey.scale=0.12;
            break;
    case 20:monkey.scale=0.14;
            break;
    case 30:monkey.scale=0.16;
            break;
    case 40:monkey.scale=0.18;
            break;
            default: break;
      
  }*/
  
    if(keyDown("space")&& monkey.y>=100 ){
      monkey.velocityY = -14;
       }
         monkey.velocityY=monkey.velocityY+0.8;

     stone();
  banana2();
  
  monkey.collide(ground); 
  
   if(stonegroup.isTouching(monkey)){
   monkey.scale=0.2;
     gamestate=END;
  }
  }
  
  if(gamestate===END){
    b.velocityX=0;
    banana
  }
  drawSprites();
   
  textSize(20);
  text("score ="+score,230,55);
}

function stone(){
  if(frameCount % 200===0){
   var stone=createSprite(400,350,10,10);
   stone.addImage(stone_img);
    stone.scale=0.15;
    stone.velocityX=-5;
    stone.lifetime=134;
  
    stonegroup.add(stone);
//stonegroup.collide(ground);
  }
  
}

function banana2(){
  if(frameCount%100===0){
    banana=createSprite(370,315,10,10);
  banana.addImage(banana_img);
    banana.y=random(120,200);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=134;
    
    bananagroup.add(banana);
  }
    
}