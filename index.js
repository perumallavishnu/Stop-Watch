const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;
// let msec = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    min = 0;
    sec = 0;
    // msec = 0;
    timeDisplay.textContent = "00:00:00";

});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    // msec = Math.floor((elapsedTime));
    sec = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    // msec = pad(msec);
    sec = pad(sec);
    min = pad(min);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${min}:${sec}`;

    function pad(unit){
        return (("0") + unit).length >2 ? unit : "0"+unit;
    }
}