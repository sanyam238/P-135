status ="";

function preload(){

}

function setup(){
    canvas = createCanvas(500,550);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(500,550);
    video.hide();
}

function draw(){
    image(video,0,0,500,550);
}

function start(){
    object_detection = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status Report: Detecting Objects";
    document.getElementById("text_box").value;
}

function modelLoaded(){
    console.log("model loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
status = true;
}