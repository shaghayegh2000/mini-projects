var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var countdown = document.getElementById("countdown");

var currentYear = new Date().getFullYear();
var newYearTime = new Date("March 21 (currentYear + 1) 00:00:00 GMT+0330");
var currentTime = new Date();

var updateConutdown = () => {
    var diff = newYearTime - currentTime ;
    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor(diff/1000/60/60)%24;
    var m = Math.floor(diff/1000/60)%60;
    var s = Math.floor(diff/1000)%60;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(updateConutdown , 1000);
document.write(newYearTime + '<br>');
document.write(currentTime);


