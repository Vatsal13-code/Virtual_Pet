//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  happyDog = loadImage("dogImg1.png")
  dogImg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10)
  dog.addImage(dogImg)
}


function draw() {  

  drawSprites();
  //add styles here

}



