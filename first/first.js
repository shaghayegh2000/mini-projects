var container = document.getElementById("container");
var txt = document.getElementById("Text");
var totTime = 10000;
var breathTime = (totTime/5)*2 ;
var holdTime = totTime/5 ;

var breathAnimation = ()=> {
    txt.innerHTML = "Breathe In!"
    setTimeout(() => {
        txt.innerHTML = "Hold!"
        setTimeout(()=>{
            txt.innerHTML = "Breathe Out!"
        },holdTime)
    },breathTime)
}
breathAnimation();

setInterval(breathAnimation , totTime);