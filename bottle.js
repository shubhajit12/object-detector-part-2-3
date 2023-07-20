img="";
status1="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function preload(){
    img=loadImage("download(2).jpg");
}
function draw(){
    image(img,0,0,640,420);
}
function modelloaded(){
    console.log("Model Loaded");
    objectdetector.detect(img,gotresults);
    status1="tree";
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}