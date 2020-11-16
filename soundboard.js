var heart_sound = document.getElementById("heart-a");

var timer_sound = document.getElementById("timer-a");

var sewing_sound = document.getElementById("sewing-a");

function playHeart() {
   heart_sound.play();
}

function stopHeart() {
    heart_sound.pause();
    heart_sound.currentTime=0;
}

function playTimer() {
  timer_sound.play();
}

function stopTimer() {
    timer_sound.pause();
    timer_sound.currentTime=0;
}

function playSewing() {
   sewing_sound.play();
}

function stopSewing() {
    sewing_sound.pause();
    sewing_sound.currentTime=0;
}

//Credits go to https://stackoverflow.com/questions/14926306/javascript-play-sound-on-hover-stop-and-reset-on-hoveroff//