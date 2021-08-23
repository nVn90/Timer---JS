var timer;
var alarm = new Audio("/alarm.mp3");

//Interval of Timer
function mrInterval() {
  sec = document.getElementById("sec");
  timer = setInterval(() => {
    if (sec.value > 0) {
      newVal = sec.value - 1;
    }
    sec.value = newVal;
    // console.log(newVal);
    // document.getElementById('tmr').innerHTML = newVal;

    if (sec.value == 0) {
      clearInterval(timer);
      alarm.play();
    }
  }, 1000);
}

//Start Button
function updateTimer() {
  mrInterval();
  document.getElementById("start").disabled = true;
}

//Pause Button
function pauseTimer() {
  clearInterval(timer);
  document.getElementById("start").disabled = false;
}
