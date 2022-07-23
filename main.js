NoseX=0;
NoseY=0;
function preload(){
    image1=loadImage("m.png");

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modalloaded);
poseNet.on("pose",gotposes);
}
function modalloaded(){
    console.log("posenet is initilized");
}
function gotposes(results){
    NoseX=results[0].pose.nose.x-33;
    NoseY=results[0].pose.nose.y;
    console.log("NoseX="+NoseX+"NoseY="+NoseY);
}
function draw(){
image(video,0,0,300,300);
image(image1,NoseX,NoseY,80,30);

}
function snapshot(){
    save("selfie.png");
}