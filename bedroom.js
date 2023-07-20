img="";
status1="";
object=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function preload(){
    img=loadImage("download.jpg");
}
function draw(){
    image(img,0,0,640,420);
    if(status1!=""){
        for(i=0; i<object.length; i++){
            fill("red");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            document.getElementById("status").innerHTML="Status: Object Detected";
        }
    }
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
        object=results;
    }
}