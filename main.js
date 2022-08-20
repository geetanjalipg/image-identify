Webcam.set({
    width:350,
    height:350,
image_format:"jpeg",jpeg_quaility:90

});

camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot' src="+data_uri+ ">";
    });

}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fRO_ppoFd/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");

}

function check(){
    img=document.getElementById("snapshot");
    classifier.classify(img,gotresults);

}
function gotresults(error,results){
if(error){
    console.log(error);

}
else{
    console.log(results);
    label=results[0].label;
    accuaracy=results[0].confidence.toFixed(3);
    document.getElementById("object_name").innerHTML=label;
    document.getElementById("object_accuracy").innerHTML=accuaracy;



    
}
}