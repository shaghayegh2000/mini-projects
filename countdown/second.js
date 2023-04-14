var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var countdown = document.getElementById("countdown");
var spinner = document.getElementById("spinner");
var year = document.getElementById("year");

var currentYear = new Date().getFullYear();
year.innerText = currentYear+1;
var newYearTime = new Date((currentYear + 1), 2, 21, 0, 0, 0);

var updateConutdown = () => {
    var currentTime = new Date();
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
setTimeout(() => {
    spinner.remove();
    countdown.style.display = "flex";
}, 2000);
setInterval(updateConutdown , 1000);



