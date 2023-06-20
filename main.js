status ="";
object=[];

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

    if(status != ""){
        
    for(i = 0; i < object.length; i++){

    fill("red");
    percent = floor(object[i].confidence*100);
    text(object[i].label + " " + percent + "%" , object[i].x + 15, object[i].y + 15);

    noFill();
    stroke("red");
    rect(object[i].x,object[i].y,object[i].width,object[i].height);

    if(objects[i].label == object_name){
           video.stop();
           object_detection.detect(gotResult);
           document.getElementById("object_number").innerHTML = object_name + " Found!!!!!";
           speak();
    }
    else{
        document.getElementById("status").innerHTML = "Mission Failed, We'll get 'em next time"
    }
    }
    }
}

function start(){
    object_detection = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status Report: Detecting Objects";
    object_name = document.getElementById("text_box").value;
}

function modelLoaded(){
    console.log("model loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
status = true;
}

function gotResult(error,results){
if(error){
    console.error(error);
}
if(results){
    console.log(results);
    objects = results;
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
