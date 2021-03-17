var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  AddBut = createButton("Add Food");
  AddBut.position(800,100);
  AddBut.mousePressed(add)
  FeedBut = createButton("Feed Pet");
  FeedBut.position(900,100);
  FeedBut.mousePressed(feedDog)

}

function draw() {
  background(46,139,87);
  drawSprites();
}

function add(){
  foodStock = foodStock + 1;
}
function feedDog(){
  foodStock = foodStock - 1;
}
