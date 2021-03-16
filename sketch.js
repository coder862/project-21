var canvas;
var music;
var box;
var blue;
var orange;
var pink;
var green;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();

    //create 4 different surfaces
    box = createSprite(random(20,750),200,20,20);
    box.velocityX = 3;
    box.velocityY = 4;
    box.shapeColor = "white";
    blue = createSprite(100,575 ,185,25);
    blue.shapeColor = "blue";
    orange = createSprite(300, 575,180,25);
    orange.shapeColor = "orange";
    pink = createSprite(500,575,180,25);
    pink.shapeColor = "pink";
    green = createSprite(700,575,180,25);
    green.shapeColor = "green";
    



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    box.bounceOff(edges);
    if(blue.isTouching(box) && box.bounceOff(blue)){
        box.shapeColor = "blue";
    }
    if(orange.isTouching(box) && box.bounceOff(orange)){
        box.shapeColor = "orange";
    }
    if(green.isTouching(box) && box.bounceOff(green)){
            box.shapeColor = "green";
    }
    if(pink.isTouching(box)){
        box.shapeColor = "pink";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    



    //add condition to check if box touching surface and make it box
}
