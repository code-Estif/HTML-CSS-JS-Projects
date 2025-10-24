const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (!running) {
    timer = setInterval(runStopwatch, 1000);
    running = true;
    startBtn.textContent = 'Running...';
  }
});

pauseBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(timer);
    running = false;
    pauseBtn.textContent = 'Resume';
    startBtn.textContent = 'Start';
  } else {
    timer = setInterval(runStopwatch, 1000);
    running = true;
    pauseBtn.textContent = 'Pause';
    startBtn.textContent = 'Running...';
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  running = false;
  startBtn.textContent = 'Start';
  pauseBtn.textContent = 'Pause';
});
