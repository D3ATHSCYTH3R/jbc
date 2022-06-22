https://teachablemachine.withgoogle.com/models/6BNXbIM2W/
p1="";
p2="";


Webcam.set({
width:280,
height:240,
image_format:'png',
png_quality:90
});



cam=document.getElementById("cam");
Webcam.attach('#cam');
function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("snap").innerHTML='<img id="ii1" src="'+data_uri+'">';
    });
}
function ml3(){
    console.log("model is loaded")
}
console.log('ml5 version: ', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6BNXbIM2W/model.json', ml3);
function speak(){
    var synth=window.speechSynthesis;
    q1="the first option is "+p1;
    q2="the second option is "+p2;
    var utterThis= new SpeechSynthesisUtterance(q1+q2);
    synth.speak(utterThis);

}