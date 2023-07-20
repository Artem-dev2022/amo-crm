const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let time = seconds;

    let interval = setInterval(setTime, 1000);

    function setTime() {
        let hh = Math.floor(time / 60 /60);
        let mm = Math.floor(time / 60) - hh * 60;
        let ss = time - mm * 60 - hh * 3600;
        hh < 10 ? hh = "0" + hh : 0;
        mm < 10 ? mm = "0" + mm : 0;
        ss < 10 ? ss = "0" + ss : 0;
        timerEl.innerHTML = `${hh}:${mm}:${ss}`;
        time--;
        time < 0 ? clearInterval(interval) : 0;
    }
  };
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);

  inputEl.value = '';
});
