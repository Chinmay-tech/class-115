function preload(){

}

function draw(){
    image(video,0,0,350,300);
}

function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function takeSnapshot(){
    save('your_image');
    
}



function modelLoaded(){
    console.log('model loaded successfuly');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}