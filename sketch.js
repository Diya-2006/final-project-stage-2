var bg, bgImg;
var player, shooterImg, shooter_shooting;
var bat, batimg,batgroup;


function preload() {

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  batimg = loadAnimation("assets/bat1.jpg", "assets/bat2.jpg", "assets/bat3.jpg", "assets/bat4.jpg", "assets/bat5.jpg", "assets/bat6.jpg")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)

batgroup=new Group();
}

function draw() {
  background(0);




  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {

    player.addImage(shooter_shooting)

  }

  //player goes back to original standing image once we stop pressing the space bar
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }
spawnbats();
  drawSprites();

}
function spawnbats(){
  if (frameCount % 160 === 0) {
    var bat = createSprite(width+20,height-300,40,10);
    bat.y = Math.round(random(100,220));
    bat.addAnimation("flying",batimg);
    bat.scale = 0.2;
    bat.velocityX = -3;
    
     //assign lifetime to the variable
    bat.lifetime = 600;
    
    //adjust the depth
    bat.depth = player.depth;
    player.depth = player.depth+1;
    
    //add each cloud to the group
    batgroup.add(bat);
}
}