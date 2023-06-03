let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const time = document.querySelector('.time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

function startTimer() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  time.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  time.textContent = '00:00:00';
});
