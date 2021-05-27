var hypnoticball;
var database, position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value", readPosition, showError);

}

function readPosition(data){

    position = data.val();
    console.log(position.x);
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;

}

function showError(){
    console.log("error in database");
}

function writePosition(x, y){
    database.ref('ball/position').set({
        x : position.x + x,
        y : position.y + y
    })
}

function draw(){
    background("white");
    if(position !== undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

//function changePosition(x,y){
    //hypnoticball.x = hypnoticball.x + x;
    ///hypnoticball.y = hypnoticball.y + y;
//}
