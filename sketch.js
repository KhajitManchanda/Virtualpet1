//Create variables here
var dogimg,dogimg2,dog
var database, foodS, foodstock
function preload()
{
	//load images here
  dogimg= loadImage("dogImg.png");
  dogimg2= loadImage("dogImg1.png");
}

function setup() {
  database= firebase.database()
	createCanvas(500, 500);
  dog= createSprite(250,300,150,150);
  dog.addImage(dogimg)
  dog.scale=0.5;
  foodstock=database.ref('Food')
  foodstock.on("value",readstock)
}


function draw() {  
background(49,139,87)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogimg2)
  }
fill(255,255,254);
stroke("black")
text("Food remaning:"+foodS, 170,100)
}
 function readstock(data){
foodS= data.val()
 }
function writeStock(x){
  if(x<=0){
    x=0;

  
  }else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
  

}

