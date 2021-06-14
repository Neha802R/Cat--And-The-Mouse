var cat , catImg1 , catImg2 , catImg3;
var mouse , mouseImg1 , mouseImg2 , mouseImg3;
var gardenImg , garden;

function preload() {
    //load the images here
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
    gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(800,700);
    
    garden = createSprite(400,350);
    garden.addImage("garden",gardenImg);

    //create cat and mouse sprites here
    cat = createSprite(700 , 600 , 50 ,50);
    cat.addImage("cat",catImg1);
    cat.addAnimation("catMoving",catImg2);
    cat.addImage("cat1",catImg3);
    cat.scale = 0.1 ; 
    cat.debug = true;

    mouse = createSprite(150 , 600 , 50 ,50);
    mouse.addImage("mouse",mouseImg1);
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.addImage("mouse1",mouseImg3);
    mouse.scale = 0.1;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.x = 250 ;
        cat.changeAnimation("cat1");
        mouse.changeAnimation("mouse1");

    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyDown(LEFT_ARROW)){
         mouse.changeAnimation("mouseTeasing");
         cat.velocityX = -2;
         cat.changeAnimation("catMoving");
     }


}
