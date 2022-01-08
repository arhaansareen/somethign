var towerImg,tower,tower2;
var soldierImg,soldier;
var soldier2Img,soldier2;
var SpawnSoldiers;
var titleImg;
var SoldierGroup;
function preload()
{
  towerImg = loadImage("tower.png");
  soldierImg = loadAnimation("soldier.png");
  soldier2Img = loadAnimation("soldier2.png");
  titleImg = loadImage("title.png");
}
function setup() {
  createCanvas(1600,800);
  tower = createSprite(1400,700,20,20);
  tower.addImage(towerImg)
  tower.scale = 0.2;   
  
  tower2 = createSprite(200,700,20,20);
  tower2.addImage(towerImg)
  tower2.scale = 0.2;

  SpawnSoldiers = createButton("Spawn Soldiers")
  SpawnSoldiers.position(20,600);
  SpawnSoldiers.mousePressed(SpawnSoldiersFunction);

  title = createSprite(800,100,40,40);
  title.addImage(titleImg);
  title.scale = 0.5;
  
  SoldierGroup = new Group();
 
}
function draw() {
  background("black");  
 
  if(keyWentDown(RIGHT_ARROW))
  {
    soldier.changeAnimation("def",soldier2Img);
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    soldier.changeAnimation("abc",soldierImg);
  }
  if(keyDown("space"))
  {
    SoldierGroup.setVelocityYEach(-12);
    
  }
  SoldierGroup.setVelocityYEach+=(0.8);

  SoldierGroup.setVelocityXEach(1);
  drawSprites();
}
function SpawnSoldiersFunction() {

  soldier = createSprite(600,765,40,10);
  soldier.addAnimation("abc",soldierImg);
  soldier.addAnimation("def",soldier2Img);
  soldier.scale = 0.19;
     
  

  SoldierGroup.add(soldier);
  }

