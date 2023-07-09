const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream
async function selectStream() {

    try {
        const mediaST = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaST;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('oops!' , err);
    }
}

button.addEventListener('click' , async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectStream();