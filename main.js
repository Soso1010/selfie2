setTimeout(function()
{
    imgId="selfie1";
    takeSelfie();
    speakData = "Tirando sua selfie em 10 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_url) {
        if(imgld=="selfie1"){
            document.getElementById("result1").innerHTML= '<img id= "selfie1" src="'+data_uri+'"/>';
        }
        if(imgld=="selfie2"){
            document.getElementById("result2").innerHTML= '<img id= "selfie2" src="'+data_uri+'"/>';
        }
        if(imgld=="selfie3"){
            document.getElementById("result3").innerHTML= '<img id= "selfie3" src="'+data_uri+'"/>';
        }
        <script src="main.js"></script>
    }
}
