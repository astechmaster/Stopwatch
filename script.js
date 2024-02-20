let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  hours = minutes = seconds = milliseconds = 0;
  updateDisplay();
}

function updateStopwatch() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("hours").textContent = padTime(hours);
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
  document.getElementById("milliseconds").textContent =
    padMilliseconds(milliseconds);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function padMilliseconds(time) {
  return time.toString().padStart(3, "0");
}
