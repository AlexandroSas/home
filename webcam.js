const constraints = {
    audio: false,
    video: {
        //width: { min: 640, ideal: 1920 },
        //height: { min: 400, ideal: 1080 },
        //aspectRatio: { ideal: 1.7777777778 }
        width: window.screen.availWidth,
        height: window.screen.availHeight,
        facingMode: "user" // {exact: "environmet"} for external webcam
    }
};
document.addEventListener("DOMContentLoaded",init);
async function init(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch(e) {
        handleError(e);
    }
}

function handleError(error){

}

function handleSuccess(stream){
    const video = document.querySelector('video');
    video.srcObject = stream;
}